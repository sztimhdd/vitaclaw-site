#!/usr/bin/env bash
set +e
echo "### vitaclaw-site.service unit file ###"
sed -E 's/(DEEPSEEK_API_KEY=)[^"[:space:]]+/\1***REDACTED***/g' /etc/systemd/system/vitaclaw-site.service
echo
echo "### Any EnvironmentFile referenced ###"
grep -E '^EnvironmentFile|^Environment' /etc/systemd/system/vitaclaw-site.service | sed -E 's/(DEEPSEEK_API_KEY=)[^"[:space:]]+/\1***REDACTED***/'
echo
echo "### Direct test against Node on :3001 (POST chat) ###"
curl -sS -X POST -H 'content-type: application/json' \
  -d '{"message":"VitaClaw 是什么"}' \
  -o /tmp/direct-chat.json \
  -w 'direct POST -> %{http_code} (%{size_download} bytes, %{time_total}s)\n' \
  http://127.0.0.1:3001/api/vitaclaw-assistant/chat
echo "---direct chat response (first 800 chars)---"
head -c 800 /tmp/direct-chat.json; echo
echo
echo "### Test through Caddy (port 80) GET wrong-method should be 405 ###"
curl -sS -o /dev/null -w 'GET  /api/...  -> %{http_code}\n' http://127.0.0.1/api/vitaclaw-assistant/chat
curl -sS -X POST -H 'content-type: application/json' -d '{"message":"hi"}' \
  -o /tmp/caddy-chat.json \
  -w 'POST /api/...  -> %{http_code}\n' \
  http://127.0.0.1/api/vitaclaw-assistant/chat
echo "---caddy chat response (first 200 chars)---"
head -c 200 /tmp/caddy-chat.json; echo
echo
echo "### sha of local vs server server.js ###"
sha256sum /opt/vitaclaw/control-plane/vitaclaw-site/server.js /opt/vitaclaw/control-plane/vitaclaw-site/server/vitaclaw-assistant.js 2>&1
echo
echo "### server git status ###"
cd /opt/vitaclaw/control-plane/vitaclaw-site && git -c safe.directory='*' status --short && git -c safe.directory='*' log -3 --oneline
