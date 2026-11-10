#!/usr/bin/env bash
# ==============================================================================
# BlackSky Service Manager - Universal Control Script
# Usage: ./service.sh [start|stop|restart|status|logs]
# ==============================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMMAND="${1:-status}"
OS="$(uname -s)"

is_pi_service_installed() {
    [ -f "/etc/systemd/system/blacksky.service" ]
}

is_mac_service_installed() {
    [ -f "${HOME}/Library/LaunchAgents/com.blacksky.portal.plist" ]
}

case "$COMMAND" in
    start)
        if [ "$OS" = "Linux" ] && is_pi_service_installed; then
            sudo systemctl start blacksky.service
            echo "[+] Started blacksky.service via systemd."
        elif [ "$OS" = "Darwin" ] && is_mac_service_installed; then
            launchctl load "${HOME}/Library/LaunchAgents/com.blacksky.portal.plist"
            echo "[+] Started BlackSky service via launchd."
        else
            echo "[*] Starting server directly in background..."
            nohup python3 "${SCRIPT_DIR}/server.py" 8081 > "${SCRIPT_DIR}/data/server.log" 2>&1 &
            echo $! > "${SCRIPT_DIR}/data/server.pid"
            echo "[+] Server running with PID $(cat "${SCRIPT_DIR}/data/server.pid") on http://localhost:8081"
        fi
        ;;

    stop)
        if [ "$OS" = "Linux" ] && is_pi_service_installed; then
            sudo systemctl stop blacksky.service
            echo "[+] Stopped blacksky.service."
        elif [ "$OS" = "Darwin" ] && is_mac_service_installed; then
            launchctl unload "${HOME}/Library/LaunchAgents/com.blacksky.portal.plist"
            echo "[+] Stopped BlackSky launchd service."
        else
            if [ -f "${SCRIPT_DIR}/data/server.pid" ]; then
                PID=$(cat "${SCRIPT_DIR}/data/server.pid")
                kill "$PID" 2>/dev/null || true
                rm -f "${SCRIPT_DIR}/data/server.pid"
                echo "[+] Killed process $PID."
            else
                pkill -f "server.py 8081" 2>/dev/null || true
                echo "[+] Stopped any active server instances."
            fi
        fi
        ;;

    restart)
        "$0" stop
        sleep 1
        "$0" start
        ;;

    status)
        echo "======================================================================"
        echo " ✦ BLACKSKY SERVICE STATUS (PORT 8081) ✦"
        echo "======================================================================"
        if [ "$OS" = "Linux" ] && is_pi_service_installed; then
            systemctl status blacksky.service --no-pager
        elif [ "$OS" = "Darwin" ] && is_mac_service_installed; then
            echo "[*] macOS launchd service detected."
            launchctl list | grep "com.blacksky.portal" || echo "[!] Not currently loaded."
        fi

        # Check port 8081
        if lsof -i :8081 >/dev/null 2>&1 || netstat -tuln 2>/dev/null | grep -q ":8081 "; then
            echo "[✓] Port 8081 is ACTIVE and listening."
        else
            echo "[!] Nothing is currently listening on port 8081."
        fi
        echo "======================================================================"
        ;;

    logs)
        if [ "$OS" = "Linux" ] && is_pi_service_installed; then
            journalctl -u blacksky.service -f -n 50
        elif [ -f "${SCRIPT_DIR}/data/server.log" ]; then
            tail -f -n 50 "${SCRIPT_DIR}/data/server.log"
        else
            echo "[!] No log file found yet at ${SCRIPT_DIR}/data/server.log"
        fi
        ;;

    *)
        echo "Usage: $0 {start|stop|restart|status|logs}"
        exit 1
        ;;
esac
