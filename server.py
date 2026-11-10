#!/usr/bin/env python3
"""
The Guild of the Black Sky (GoBS) - Sovereign Defense & Municipal Logistics Portal
Merchant Republic of Confluence // Nova Regnus // World of Osterra
Running on Port 8081 for Raspberry Pi & Cloudflare Tunnel.
"""

import http.server
import socketserver
import os
import sys
import json
import socket
import datetime
import random
import platform

PORT = int(os.environ.get("PORT", 8081))
HOST = os.environ.get("HOST", "0.0.0.0")
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
DATA_DIR = os.path.join(BASE_DIR, "data")
SUBMISSIONS_FILE = os.path.join(DATA_DIR, "submissions.json")

os.makedirs(DATA_DIR, exist_ok=True)
if not os.path.exists(SUBMISSIONS_FILE):
    with open(SUBMISSIONS_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)

def get_telemetry():
    """Generates real-time Confluence defense telemetry & Pi hardware temperature."""
    telemetry = {
        "hostname": socket.gethostname(),
        "platform": f"{platform.system()} {platform.release()}",
        "server_time": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC"),
        "sector": "Merchant Republic of Confluence // Nova Regnus",
        "fleet_status": "CONFLUENCE SKYPORT PATROL ACTIVE",
        "active_corpses_mining": 42810 + random.randint(-15, 25),
        "phlogiston_reserves": "96.4% CAPACITY",
        "tax_relief_disbursed_gp": 4892400 + random.randint(100, 500),
        "airships_deployed": 18,
        "deep_mine_depth_leagues": 4.2,
        "chaos_containment_status": "HE WHO EATS CONTAINED AT THE VEIL",
    }

    temp_path = "/sys/class/thermal/thermal_zone0/temp"
    if os.path.exists(temp_path):
        try:
            with open(temp_path, "r") as tf:
                temp_milli = int(tf.read().strip())
                telemetry["cpu_temp_c"] = round(temp_milli / 1000.0, 1)
        except Exception:
            telemetry["cpu_temp_c"] = 43.5
    else:
        telemetry["cpu_temp_c"] = 41.2

    return telemetry

class BlackSkyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def end_headers(self):
        # Force Cloudflare & browsers to never cache stale static files
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        if self.path == "/api/telemetry":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(get_telemetry()).encode("utf-8"))
            return

        if self.path == "/api/submissions":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            try:
                with open(SUBMISSIONS_FILE, "r", encoding="utf-8") as f:
                    submissions = json.load(f)
            except Exception:
                submissions = []
            self.wfile.write(json.dumps(submissions[-20:]).encode("utf-8"))
            return

        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/submit-form":
            content_length = int(self.headers.get("Content-Length", 0))
            post_body = self.rfile.read(content_length)

            try:
                payload = json.loads(post_body.decode("utf-8"))
            except Exception:
                payload = {}

            tracking_id = f"GBS-{datetime.datetime.now().year}-{random.randint(10000, 99999)}"
            record = {
                "tracking_id": tracking_id,
                "timestamp": datetime.datetime.now().isoformat(),
                "form_type": payload.get("form_type", "GENERAL-DOCKET"),
                "applicant_name": payload.get("applicant_name", "Anonymous Citizen"),
                "estate_reference": payload.get("estate_reference", "Confluence Registry Parcel"),
                "assignment_preference": payload.get("assignment_preference", "World's Spine Deep Extraction"),
                "notes": payload.get("notes", ""),
                "status": "RATIFIED BY S.P.E.A.K. & CORPUS CORPUS CORPUS"
            }

            try:
                with open(SUBMISSIONS_FILE, "r", encoding="utf-8") as f:
                    submissions = json.load(f)
            except Exception:
                submissions = []

            submissions.append(record)
            with open(SUBMISSIONS_FILE, "w", encoding="utf-8") as f:
                json.dump(submissions, f, indent=2)

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            response_data = {
                "success": True,
                "tracking_id": tracking_id,
                "message": "Docket validated by S.P.E.A.K. Core Spirit Woodford and archived in the Post-Mortal Rolls.",
                "record": record
            }
            self.wfile.write(json.dumps(response_data).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

def run_server():
    local_ip = get_ip()
    print("=" * 72)
    print(" ✦ THE GUILD OF THE BLACK SKY (GoBS) // DEFENSE & CIVIC PORTAL ✦ ")
    print(" Merchant Republic of Confluence // Nova Regnus // World of Osterra ")
    print("=" * 72)
    print(f" [*] Local Pi URL:     http://localhost:{PORT}")
    print(f" [*] Network LAN URL:  http://{local_ip}:{PORT}")
    print(f" [*] Hostname URL:     http://{socket.gethostname()}.local:{PORT}")
    print(f" [*] Tunnel Target:    http://127.0.0.1:{PORT}")
    print(" [*] Serving from:    ", PUBLIC_DIR)
    print(" [*] Database file:   ", SUBMISSIONS_FILE)
    print("=" * 72)

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer((HOST, PORT), BlackSkyHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down Guild of the Black Sky portal.")
            sys.exit(0)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        PORT = int(sys.argv[1])
    run_server()
