#!/usr/bin/env bash
set -euo pipefail
scp /home/sztimhdd/vitaclaw-site/.deploy/Caddyfile.new vitaclaw-aliyun:/tmp/Caddyfile.new
ssh vitaclaw-aliyun bash -se <<'REMOTE'
set -euo pipefail
TS=$(date -u +%Y%m%dT%H%M%SZ)
cp -a /etc/caddy/Caddyfile "/etc/caddy/Caddyfile.bak.${TS}"
install -m 0644 -o root -g root /tmp/Caddyfile.new /etc/caddy/Caddyfile
rm -f /tmp/Caddyfile.new
caddy validate --config /etc/caddy/Caddyfile 2>&1 | tail -2
systemctl reload caddy
echo "caddy: $(systemctl is-active caddy)"
REMOTE
