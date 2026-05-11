#!/usr/bin/env bash
set -e
LOCAL_KEY=$(grep -oE 'sk-[A-Za-z0-9_-]+' /home/sztimhdd/vitaclaw-site/.env.local | head -1)
LOCAL_HASH=$(printf '%s' "$LOCAL_KEY" | sha256sum | cut -c1-16)
REMOTE_KEY=$(ssh vitaclaw-aliyun "cat /etc/vitaclaw/vitaclaw-site.env" | grep -oE 'sk-[A-Za-z0-9_-]+' | head -1)
REMOTE_HASH=$(printf '%s' "$REMOTE_KEY" | sha256sum | cut -c1-16)
echo "local  key sha16: $LOCAL_HASH (length=${#LOCAL_KEY})"
echo "server key sha16: $REMOTE_HASH (length=${#REMOTE_KEY})"
if [ "$LOCAL_HASH" = "$REMOTE_HASH" ]; then
  echo "RESULT: MATCH — server already has the same DEEPSEEK_API_KEY as local .env.local"
else
  echo "RESULT: MISMATCH — server has a different key; will update server file."
fi
echo
echo "### Full /etc/vitaclaw/vitaclaw-site.env (redacted) ###"
ssh vitaclaw-aliyun "cat /etc/vitaclaw/vitaclaw-site.env" | sed -E 's/(=).+/\1***REDACTED***/'
