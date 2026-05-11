#!/usr/bin/env bash
set +e
USER_SETTINGS="/mnt/c/Users/Administrator/AppData/Roaming/Code/User/settings.json"
WS_SETTINGS="/home/sztimhdd/vitaclaw-site/.vscode/settings.json"
echo "### user settings path: $USER_SETTINGS ###"
ls -la "$USER_SETTINGS" 2>&1
echo
echo "### user settings content (first 200 lines) ###"
[ -f "$USER_SETTINGS" ] && head -200 "$USER_SETTINGS" || echo "(file does not exist)"
echo
echo "### workspace .vscode dir ###"
ls -la /home/sztimhdd/vitaclaw-site/.vscode/ 2>&1
echo
echo "### workspace settings.json (if any) ###"
[ -f "$WS_SETTINGS" ] && cat "$WS_SETTINGS" || echo "(no workspace settings.json)"
