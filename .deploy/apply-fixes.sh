#!/usr/bin/env bash
# Run on local WSL. Pushes Caddyfile + env updates to the server, then reloads/restarts.
set -euo pipefail

LOCAL_KEY=$(grep -oE 'sk-[A-Za-z0-9_-]+' /home/sztimhdd/vitaclaw-site/.env.local | head -1)
if [ -z "$LOCAL_KEY" ]; then
  echo "FATAL: no DEEPSEEK_API_KEY found in /home/sztimhdd/vitaclaw-site/.env.local" >&2
  exit 1
fi
echo "[local] key sha16: $(printf %s "$LOCAL_KEY" | sha256sum | cut -c1-16) length=${#LOCAL_KEY}"

# Stage Caddyfile to a temp path on the server
scp /home/sztimhdd/vitaclaw-site/.deploy/Caddyfile.new vitaclaw-aliyun:/tmp/Caddyfile.new

ssh vitaclaw-aliyun KEY="$LOCAL_KEY" bash -se <<'REMOTE'
set -euo pipefail
TS=$(date -u +%Y%m%dT%H%M%SZ)

echo "[remote] backing up current Caddyfile and env file"
cp -a /etc/caddy/Caddyfile "/etc/caddy/Caddyfile.bak.${TS}"
cp -a /etc/vitaclaw/vitaclaw-site.env "/etc/vitaclaw/vitaclaw-site.env.bak.${TS}"

echo "[remote] installing new Caddyfile"
install -m 0644 -o root -g root /tmp/Caddyfile.new /etc/caddy/Caddyfile
rm -f /tmp/Caddyfile.new

echo "[remote] validating Caddyfile"
caddy validate --config /etc/caddy/Caddyfile

echo "[remote] updating /etc/vitaclaw/vitaclaw-site.env (DEEPSEEK_API_KEY)"
TMP=$(mktemp)
awk -v k="$KEY" 'BEGIN{done=0}
  /^DEEPSEEK_API_KEY=/{print "DEEPSEEK_API_KEY="k; done=1; next}
  {print}
  END{ if(!done) print "DEEPSEEK_API_KEY="k }' /etc/vitaclaw/vitaclaw-site.env > "$TMP"
install -m 0640 -o root -g vitaclaw "$TMP" /etc/vitaclaw/vitaclaw-site.env
rm -f "$TMP"

echo "[remote] new env file (redacted):"
sed -E 's/(=).+/\1***REDACTED***/' /etc/vitaclaw/vitaclaw-site.env

echo "[remote] reloading caddy"
systemctl reload caddy

echo "[remote] restarting vitaclaw-site (Node API)"
systemctl restart vitaclaw-site
sleep 2
systemctl is-active vitaclaw-site
systemctl is-active caddy

echo "[remote] confirming new key is in process env"
PID=$(systemctl show -p MainPID --value vitaclaw-site)
echo "MainPID=$PID"
tr '\0' '\n' < /proc/"$PID"/environ | grep -E '^DEEPSEEK_API_KEY=' \
  | awk -F= '{ k=$2; printf("DEEPSEEK_API_KEY length=%d prefix=%s suffix=%s\n", length(k), substr(k,1,4), substr(k,length(k)-3)) }'
REMOTE

echo
echo "[local] done. Backups left on server with suffix .bak.<timestamp>."
