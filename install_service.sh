#!/usr/bin/env bash
# ==============================================================================
# BlackSky Web Portal - Raspberry Pi systemd Service Installer
# Automatically configures, enables, and starts the service to keep the site
# running 24/7 on boot with automatic restart on crashes.
# ==============================================================================

set -e

# Current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CURRENT_USER="${SUDO_USER:-$USER}"
PYTHON_PATH="$(which python3 || echo "/usr/bin/python3")"
SERVICE_NAME="blacksky.service"
SYSTEMD_PATH="/etc/systemd/system/${SERVICE_NAME}"

echo "======================================================================"
echo " ✦ BLACKSKY WEB PORTAL - SERVICE INSTALLER ✦"
echo "======================================================================"
echo " [*] Target User:        ${CURRENT_USER}"
echo " [*] Working Directory:  ${SCRIPT_DIR}"
echo " [*] Python Executable:  ${PYTHON_PATH}"
echo " [*] Listening Port:     8081"
echo "======================================================================"

# Check if running on Linux with systemd
if [ "$(uname -s)" != "Linux" ]; then
    echo "[!] Notice: This system is $(uname -s), not Linux (systemd is standard on Raspberry Pi OS)."
    echo "    For macOS, run './setup_macos_service.sh' instead."
    echo ""
    echo "    Generating tailored 'blacksky.service' file for when you copy this to your Pi..."
fi

# Generate tailored systemd unit file
cat <<EOF > "${SCRIPT_DIR}/blacksky.service"
[Unit]
Description=BlackSky Space Intelligence & Defense Web Portal (Port 8081)
After=network.target network-online.target
Wants=network-online.target

[Service]
Type=simple
User=${CURRENT_USER}
WorkingDirectory=${SCRIPT_DIR}
ExecStart=${PYTHON_PATH} ${SCRIPT_DIR}/server.py 8081
Restart=always
RestartSec=3
Environment=PYTHONUNBUFFERED=1
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

echo "[+] Successfully generated ${SCRIPT_DIR}/blacksky.service"

# If running on Linux and has root / sudo, install directly to systemd
if [ "$(uname -s)" = "Linux" ]; then
    if [ "$EUID" -ne 0 ]; then
        echo ""
        echo "[*] To install into systemd, please run with sudo:"
        echo "    sudo ./install_service.sh"
        exit 0
    fi

    echo "[*] Installing to ${SYSTEMD_PATH}..."
    cp "${SCRIPT_DIR}/blacksky.service" "${SYSTEMD_PATH}"
    chmod 644 "${SYSTEMD_PATH}"

    echo "[*] Reloading systemd daemon..."
    systemctl daemon-reload

    echo "[*] Enabling service on boot..."
    systemctl enable "${SERVICE_NAME}"

    echo "[*] Starting service..."
    systemctl restart "${SERVICE_NAME}"

    echo "======================================================================"
    echo " [✓] BlackSky service installed and running!"
    echo "======================================================================"
    systemctl status "${SERVICE_NAME}" --no-pager
else
    echo ""
    echo "[*] When you copy this project to your Raspberry Pi, run:"
    echo "    sudo ./install_service.sh"
    echo ""
    echo "    It will automatically configure the paths and start the service!"
fi
