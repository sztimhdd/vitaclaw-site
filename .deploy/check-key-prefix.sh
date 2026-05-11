#!/usr/bin/env bash
set -e
ssh vitaclaw-aliyun '
LINE=$(grep "^DEEPSEEK_API_KEY=" /etc/vitaclaw/vitaclaw-site.env)
RAW="${LINE#DEEPSEEK_API_KEY=}"
# strip optional surrounding quotes
RAW="${RAW%\"}"; RAW="${RAW#\"}"
LEN=${#RAW}
PREFIX=$(printf %s "$RAW" | head -c 4)
SUFFIX=$(printf %s "$RAW" | tail -c 4)
HASH=$(printf %s "$RAW" | sha256sum | cut -c1-16)
echo "server DEEPSEEK_API_KEY: prefix=${PREFIX} suffix=${SUFFIX} length=${LEN} sha16=${HASH}"
'
echo "---"
LOCAL_KEY=$(grep -oE 'sk-[A-Za-z0-9_-]+' /home/sztimhdd/vitaclaw-site/.env.local | head -1)
LEN=${#LOCAL_KEY}
PREFIX=$(printf %s "$LOCAL_KEY" | head -c 4)
SUFFIX=$(printf %s "$LOCAL_KEY" | tail -c 4)
HASH=$(printf %s "$LOCAL_KEY" | sha256sum | cut -c1-16)
echo "local  DEEPSEEK_API_KEY: prefix=${PREFIX} suffix=${SUFFIX} length=${LEN} sha16=${HASH}"
