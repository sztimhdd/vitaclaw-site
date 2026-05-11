#!/usr/bin/env bash
set +e
echo "### NODE/NPM ###"
node -v 2>&1
npm -v 2>&1
which pm2 2>&1
pm2 -v 2>&1
echo
echo "### CADDY ###"
which caddy
caddy version 2>&1 | head -2
systemctl is-active caddy 2>&1
echo
echo "### CADDYFILE ###"
cat /etc/caddy/Caddyfile 2>&1 | head -120
echo
echo "### PROD DIR ###"
ls -la /opt/vitaclaw/ 2>&1
echo
ls -la /opt/vitaclaw/control-plane/vitaclaw-site/ 2>&1 | head -40
echo
echo "### .env.local on server (redacted) ###"
sed -E 's/(=).+/\1***REDACTED***/' /opt/vitaclaw/control-plane/vitaclaw-site/.env.local 2>&1
echo
echo "### LISTENING PORTS ###"
ss -tlnp 2>&1 | head -25
echo
echo "### PM2 LIST ###"
pm2 list 2>&1 | head -25
echo
echo "### git branch in prod ###"
cd /opt/vitaclaw/control-plane/vitaclaw-site 2>/dev/null && git -c safe.directory='*' rev-parse --abbrev-ref HEAD && git -c safe.directory='*' log -1 --oneline 2>&1
