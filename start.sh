#!/usr/bin/env bash
# ==============================================================================
# The Guild of the Black Sky - Raspberry Pi Launch Script
# Merchant Republic of Confluence // Nova Regnus
# ==============================================================================

set -e

# Change to the script's directory
cd "$(dirname "$0")"

# Check for python3
if ! command -v python3 &> /dev/null; then
    echo "[!] Error: python3 could not be found. Please install Python 3 on your Raspberry Pi."
    exit 1
fi

PORT="${1:-8081}"

echo "=================================================================="
echo " ✦ INITIALIZING GUILD OF THE BLACK SKY TERMINAL [PORT ${PORT}] ✦"
echo "=================================================================="

# Detect local IP
LOCAL_IP=$(hostname -I 2>/dev/null | awk '{print $1}' || echo "127.0.0.1")

echo " [*] Raspberry Pi LAN URL: http://${LOCAL_IP}:${PORT}"
echo " [*] Local Host URL:      http://localhost:${PORT}"
echo " [*] Tunnel Endpoint:     Point your cloudflared/ngrok to localhost:${PORT}"
echo " [*] Starting server daemon..."
echo "=================================================================="

exec python3 server.py "$PORT"
