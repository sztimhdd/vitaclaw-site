#!/usr/bin/env bash
set -e
HOST="${HOST:-101.133.154.49}"
echo "### Public host = $HOST ###"
echo
echo "--- GET / ---"
curl -sS -o /dev/null -w 'http=%{http_code} size=%{size_download} time=%{time_total}s\n' "http://$HOST/"
echo "--- GET /health ---"
curl -sS -w '\nhttp=%{http_code}\n' "http://$HOST/health"
echo "--- GET /healthz ---"
curl -sS -w '\nhttp=%{http_code}\n' "http://$HOST/healthz"
echo
echo "--- POST /api/vitaclaw-assistant/chat (real product question) ---"
RESP=$(mktemp)
HTTP=$(curl -sS -o "$RESP" -w '%{http_code}' \
  -X POST -H 'content-type: application/json' \
  -d '{"message":"VitaClaw 在内核执行层是怎么保证安全的？"}' \
  "http://$HOST/api/vitaclaw-assistant/chat")
SIZE=$(wc -c < "$RESP")
echo "http=$HTTP size=$SIZE bytes"
echo "--- raw response (first 1200 chars) ---"
head -c 1200 "$RESP"; echo
echo
echo "--- assertions ---"
TYPE=$(node -e "const j=require('fs').readFileSync('$RESP','utf8');try{const o=JSON.parse(j);console.log(o.type||'')}catch{console.log('PARSE_ERR')}")
USED=$(node -e "const j=require('fs').readFileSync('$RESP','utf8');try{const o=JSON.parse(j);console.log(o.usedModel===true?'true':'false')}catch{console.log('PARSE_ERR')}")
SRCS=$(node -e "const j=require('fs').readFileSync('$RESP','utf8');try{const o=JSON.parse(j);console.log(Array.isArray(o.sources)?o.sources.length:'NA')}catch{console.log('PARSE_ERR')}")
ANSLEN=$(node -e "const j=require('fs').readFileSync('$RESP','utf8');try{const o=JSON.parse(j);console.log((o.answer||'').length)}catch{console.log('PARSE_ERR')}")
echo "type=$TYPE  usedModel=$USED  sources=$SRCS  answer.length=$ANSLEN"
PASS=true
[ "$HTTP" = "200" ] || { echo "FAIL: http != 200"; PASS=false; }
[ "$TYPE" = "answer" ] || { echo "FAIL: type != answer"; PASS=false; }
[ "$USED" = "true" ] || { echo "FAIL: usedModel != true (DeepSeek not actually called)"; PASS=false; }
[ "$SRCS" -gt 0 ] 2>/dev/null || { echo "FAIL: no sources"; PASS=false; }
[ "$ANSLEN" -gt 50 ] 2>/dev/null || { echo "FAIL: answer too short"; PASS=false; }
rm -f "$RESP"
$PASS && echo "PASS: end-to-end DeepSeek-backed chat works through Caddy on $HOST"
