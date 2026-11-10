#!/usr/bin/env bash
# ==============================================================================
# BlackSky Web Portal - macOS Background Service Setup (launchd)
# Keeps the server running 24/7 on port 8081 with auto-restart on crash & login.
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PYTHON_PATH="$(which python3)"
PLIST_DIR="${HOME}/Library/LaunchAgents"
PLIST_FILE="${PLIST_DIR}/com.blacksky.portal.plist"

mkdir -p "${PLIST_DIR}"

cat <<EOF > "${PLIST_FILE}"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.blacksky.portal</string>
    <key>ProgramArguments</key>
    <array>
        <string>${PYTHON_PATH}</string>
        <string>${SCRIPT_DIR}/server.py</string>
        <string>8081</string>
    </array>
    <key>WorkingDirectory</key>
    <string>${SCRIPT_DIR}</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>${SCRIPT_DIR}/data/server.log</string>
    <key>StandardErrorPath</key>
    <string>${SCRIPT_DIR}/data/server_error.log</string>
</dict>
</plist>
EOF

echo "======================================================================"
echo " ✦ BLACKSKY WEB PORTAL - MACOS BACKGROUND SERVICE (launchd) ✦"
echo "======================================================================"
echo " [*] Service configuration saved to: ${PLIST_FILE}"

# Unload previous if loaded
launchctl unload "${PLIST_FILE}" 2>/dev/null || true

# Load and start service
launchctl load "${PLIST_FILE}"

echo " [✓] Service started! The website is now running continuously in the background on port 8081."
echo "     - Local URL:   http://localhost:8081"
echo "     - Logs:        tail -f ${SCRIPT_DIR}/data/server.log"
echo "     - Stop server: launchctl unload ${PLIST_FILE}"
echo "======================================================================"
