# 🌌 Guild of the Black Sky — Official Portal

High-availability defense contractor & municipal portal for the **Guild of the Black Sky**, governing the capital city of **Confluence, Nova Regnus** within the realm of **Osterra**.

Operating on a headless **Raspberry Pi** node and served globally via a Cloudflare tunnel at [https://guildoftheblacksky.com](https://guildoftheblacksky.com).

---

## 🏛️ Operating Divisions & Architecture

| Page | URL | Description |
| :--- | :--- | :--- |
| **Overview** | `index.html` | Portal homepage with radar telemetry, core faction principles (Benevolent Corptocracy, Equal Franchise), and 7-District Municipal directory. |
| **Airships & Docks** | `gen3.html` | Rigid-hull airship fleet specifications, heavy torsion ballista mounts, kinetic drop payloads, and Confluence Skyport master architecture. |
| **Realm Map** | `map.html` | Interactive high-resolution zoomable cartography of Osterra centered on Confluence (Hex 4712W). |
| **Corpus Corpus** | `spectra.html` | Toland's industrial power-tool doctrine, living custodian oversight, Corpus Corpus Collegium training facility, and S.P.E.A.K. bio-archive. |
| **Departments** | `departments.html` | The 5 official departments: Operations, R&D (Historical Reclamation, Applied Metaphysics, Temporal Studies), Internal Affairs, Infrastructure, and Trade & Commerce. |
| **Leadership** | `staff.html` | Active Council of Chairmen, Chair Emeritus (Sir Artorias), and Undead Staff (Woodford, Lil' Timmy). |
| **Forms Bureau** | `forms.html` | Canonical GBSF regulatory dockets and contracts with instant search and category filtering. |
| **Contact** | `contact.html` | Sacred Desk registry, dispatch directory, and regional headquarters across Osterra. |
| **Lil' Timmy Memorial** | `timmy.html` | Commemorative sentinel plaque honoring Little Timmy's stand against Pirate Prince Rory. |

---

## 🚀 Running the Local & Remote Service

- **Local Development:**
  ```bash
  python3 server.py 8081
  ```
- **Raspberry Pi Service (`blacksky.service`):**
  ```bash
  ssh <user>@<pi-ip> "systemctl --user status blacksky.service"
  ```
