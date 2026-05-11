#!/usr/bin/env bash
set +e
echo "### Process tree of node on :3001 ###"
PID=$(ss -tlnp 2>/dev/null | awk '/:3001 /{print $0}' | grep -oE 'pid=[0-9]+' | head -1 | cut -d= -f2)
echo "PID=$PID"
[ -n "$PID" ] && ps -o pid,ppid,user,cmd -p "$PID" 2>&1
[ -n "$PID" ] && pstree -sa "$PID" 2>&1
[ -n "$PID" ] && cat /proc/"$PID"/environ 2>/dev/null | tr '\0' '\n' | grep -E 'PORT|NODE_ENV|DEEPSEEK' | sed -E 's/(KEY=).+/\1***REDACTED***/'
echo
echo "### systemd units mentioning vitaclaw / node ###"
systemctl list-unit-files --type=service 2>/dev/null | grep -iE 'vitaclaw|deepseek|chat|api' 2>&1
systemctl list-units --type=service --state=running 2>/dev/null | grep -iE 'vitaclaw|deepseek|chat|api|node' 2>&1
echo
echo "### Look for any systemd unit pointing to vitaclaw-site ###"
grep -rl 'vitaclaw-site' /etc/systemd/system /lib/systemd/system 2>/dev/null
echo
echo "### Caddy unit ###"
systemctl status caddy --no-pager 2>&1 | head -10
echo
echo "### Existing dist contents (top-level) ###"
ls /opt/vitaclaw/control-plane/vitaclaw-site/dist/ 2>&1 | head
echo
echo "### Health checks ###"
curl -sS -o /dev/null -w 'GET /health -> %{http_code}\n' http://127.0.0.1/health
curl -sS -o /dev/null -w 'GET /  -> %{http_code}\n' http://127.0.0.1/
curl -sS -X POST -H 'content-type: application/json' -d '{"message":"VitaClaw 是什么"}' \
  -o /tmp/chat-resp.json -w 'POST /api/.../chat -> %{http_code}\n' \
  http://127.0.0.1/api/vitaclaw-assistant/chat
echo "---chat response (first 500 chars)---"
head -c 500 /tmp/chat-resp.json; echo
