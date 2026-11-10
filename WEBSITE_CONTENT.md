# GUILD OF THE BLACK SKY — MASTER WEBSITE SPECIFICATION

> **How to use this file:**
> 1. Edit any text, numbers, bios, quotes, policies, or lore in this document.
> 2. Fill in any of the `[BLANK / CLASSIFIED PROJECT]` sections whenever you have new faction content ready, or leave them as placeholders.
> 3. Add new staff, ships, forms, or announcements by copying an existing block.
> 4. When ready, tell me: *"Update the website based on WEBSITE_CONTENT.md"* (or paste the modified sections), and the site will be updated, tested, and synced to your Raspberry Pi!

---

## 1. GLOBAL BRANDING & REALM TICKER

```yaml
site_title: "Guild of the Black Sky // Confluence Sovereign Aerosystems, Infrastructure & Necro-Logistics"
organization_name: "The Guild of the Black Sky"
motto: "Confluence Above All // Benevolent Corptocracy, Disciplined Steel, Sovereign Industry"
governing_body: "Council of Chairmen // Equal Departmental Franchise"
capital: "The City of Confluence, Nova Regnus"
territories: "Merchant Republic of Confluence (7 Sovereign Districts), Port Tawny, New Prosperity, Solace, Mistveil, Underdark Consulate"
interactive_realm_map: "https://srv2.zoomable.ca/viewer.php?i=img52cb7c4f385c87e5_Osterran_Realm_992026#zoom=1.00000&x=0.50000&y=0.19489"
official_colors:
  primary: "Blue-Grey (#2c3e50)"
  accent_warm: "Black Sky Orange (#ea580c)"
  subtle_dark: "Tactical Slate Gray (#1e293b)"
  foundation: "Crisp Light Background (#f8fafc / #ffffff)"
  senior_officer_accent: "Burnished Gold (#b45309)"
pi_node_port: 8081
```

### Real-Time Realm Ticker Items (Scrolling Top Bar)
1. `COUNCIL OF CHAIRMEN OPERATIONAL // EQUAL DEPARTMENTAL VOTING RATIFIED`
2. `CONFLUENCE SKYPORT STATUS: 3 ACTIVE BERTHS ONLINE // 97 SLOTS UNDER CONSTRUCTION`
3. `GLOWSTONE GEOTHERMAL GRID: MOUNTAIN TERRACE HEATING AT OPTIMAL FLUID PRESSURE`
4. `CORPUS CORPUS COLLEGIUM: TRAINING FACILITY FOR ETHICAL POWER-TOOL WORKFORCE`
5. `SECURITY DIRECTIVE: PRIESTS OF CYRINX DESIGNATED HOSTILE FOES POST-NEW MONTEFORTE`
6. `CIVIC NOTICE: NON-CONSENSUAL COMPEL TRUTH ON MEMBERS CONSTITUTES AN OVERT ACT OF WAR`
7. `QUARTERLY SALARY DISBURSEMENT: TIER ROLLS CURRENTLY ACTIVE FOR ENROLLED CITIZENS`

---

## 2. HIGH-PRIORITY DIRECTIVES & SPECIAL NOTICES

### Directive 001: Cyrinx Interdiction Authorization
- **Status:** `ACTIVE // RATIFIED BY GUILD COUNCIL`
- **Target:** `Priests of Cyrinx`
- **Mandate:**
  > "Based on documented patterns of detrimental activity and involvement in the New Monteforte disaster, Priests of Cyrinx constitute a severe destabilizing threat to Osterra. Guild personnel and authorized contractors are legally permitted to engage and neutralize identified Priests of Cyrinx—including apprehension, detainment, or termination—while prioritizing minimal collateral impact."

### Stance on Mind Magic & Sovereignty
- **Core Doctrine:**
  > "The Guild of the Black Sky considers any non-consensual compel truth, mental coercion, or psychic violation directed at our members, contractors, or reanimated personnel as an overt act of war against the Merchant Republic of Confluence."

---

## 3. HOME PAGE (`index.html`)

### Hero Section
- **Badge:** `BENEVOLENT CORPTOCRACY // CHARTERED CAPITAL OF NOVA REGNUS`
- **Headline:** `The Guild of the Black Sky`
- **Tagline:** `Disciplined Defense, Stratospheric Engineering, and Regulated Post-Mortem Industry for the Merchant Republic of Confluence.`
- **Primary CTA:** `Explore Confluence Fleet & Docks →` (Links to Aerosystems)
- **Secondary CTA:** `Official Forms Bureau` (Links to Forms Bureau)

### Core Metrics Bar
- **Metric 1:** `7 Districts` — *Confluence Sovereign Territory (Expanded under Chairman Riastrad)*
- **Metric 2:** `100 Berths` — *Confluence Skyport Master Plan (3 Active Docks Online)*
- **Metric 3:** `100% Free Will` — *§ 1301.3 Somatic Reflex Binding (Souls Depart Unhindered)*
- **Metric 4:** `Q3 Seasonal` — *Guaranteed Tiered Salary Disbursed Every Three Months*

### Faction Identity ("The Pitch Played Straight")
- **Heading:** `Why the Guild of the Black Sky?`
- **The Benevolent Corptocracy:**
  > "Everyone likes making money, and prosperity for all is wealth for all. We do not answer to a tyrant, king, or feudal lord; decisions are decided by the Council of Chairmen with equal departmental voting, with advancement earned strictly through merit, competence, and service. We pay consistent seasonal salaries every three months—a stability unmatched across Osterra."
- **Disciplined Combat Doctrine:**
  > "We do not fight as reckless brawlers. In every engagement, our squads establish consensus on objectives, deploy locking shield walls to absorb enemy charges, maneuver skirmishers and mages along the flanks, and outlast our opponents under layered magical wards."
- **Fair Bureaucracy:**
  > "Our contracts are exact, transparent, and binding. We actively prohibit hidden clauses, deceitful loopholes, and predatory legal traps. If you operate within our bylaws, the Guild will deploy its airships, legionnaires, and treasury to defend you."

### Confluence 7-District Municipal Directory
*(The metropolitan heart of Nova Regnus carved into the World's Spine Mountains)*
1. **Central District — Founding Capital & Sacred Seat:**
   High Court, Guild Headquarters, Council Chambers, and the Original Temple to Pecune.
2. **North District — The Great Sky Docks & Northern Gates:**
   Confluence Skyport berths (3 active, 97 planned), and the miles-wide martial parade training grounds.
3. **North-East District — The Temple District:**
   Sacred Sanctuaries of Alara and Pecune, overseeing contract oaths and civic blessings.
4. **South-East District — The High Market:**
   The premier commercial hub of Osterra: *"If it can be bought anywhere in the planes, it can be bought in Confluence."*
5. **South District — The Great Southern Gates & R&D:**
   Toland's advanced laboratory spires, subterranean portals, and a thriving international culinary scene.
6. **South-West District — The Artisan's District:**
   Twelve bustling civic squares and hundreds of workshops producing precision arms, alchemical vials, and clockwork parts.
7. **North-West District — Guild Enterprises & Corpus Corpus:**
   Subsidized public works, the Corpus Corpus Collegium & Reanimation Complex, and Osterra's largest general hospital complex.

---

## 4. DEPARTMENTS OF THE GUILD (`departments.html`)

The Guild operates through 5 principal departments with equal voting franchise on the Council of Chairmen:

### 1. Operations Department
- **Department Head:** Sir Garon Ironrock
- **Role:** Managing wartime logistics and tactics.


### 2. Research and Development Department
- **Department Head:** Toland of Agnan
- **Specialized Sub-Departments:**
  1. **Department of Historical Reclamation** (Toland of Agnan):
     Archaeological recovery, anatomical dissection, and reverse-engineering of ancient pre-cataclysm Magelord technologies and arcane matrices.
  2. **Department of Applied Metaphysics** (Owain Fairwind):
     Translating experimental magical breakthroughs into civil infrastructure, power tools, aerial propulsion, and defensive warfare systems.
  3. **Department of Temporal Studies** (Elspeth Ortell):
     Investigating lost Magelord chronomancy, timeline stability, causality wards, and time-dilated preservation wards.

### 3. Internal Affairs Department
- **Department Head:** Nikos the Benevolent
- **Role:** Maintaining internal cohesion, verifying protocol compliance, protecting members from non-consensual enchantments, and quietly identifying external infiltration and malevolent planar influence without compromising public confidence.

### 4. Infrastructure & Logistics Department
- **Department Head:** Riastrad Fireforged (Steward Riastrad Ulster)
- **Role:** Master planning of Confluence's 7 districts, deep geothermal glowstone heating, indoor cargo lifters, and arterial supply trains connecting to Port Tawny.

### 5. Trade and Commerce Department
- **Department Administration:** Church of Pecune
- **Role:** Managing commercial relations, high-market stall licenses, precious metal valuations, and guaranteeing contract sanctity under divine law.

---

## 5. LEADERSHIP & COUNCIL ROSTER (`staff.html`)

*(No species tags are used. Active members listed first, followed by Emeritus and Undead Staff.)*

### Active Leadership

#### 1. Sir Garon Ironrock
- **Role:** Chairman of Operations // Frontline Knight
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 2. Toland of Agnan
- **Role:** Chairman of Research & Development // Dean of Corpus Corpus Collegium
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 3. Nikos the Benevolent
- **Role:** Chairman of Internal Affairs // Chief Compliance Officer
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 4. Shaylee
- **Role:** Officer of Trade and Commerce
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 5. First Aeronaut Owain Fairwind
- **Role:** The First Aeronaut of Osterra // Head of Applied Metaphysics
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 6. Elspeth Ortell
- **Role:** Head of Temporal Studies // Arcane Scholar
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 7. Cyfnerth
- **Role:** Executive Chef for Black Sky
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 8. Ridmark
- **Role:** Loss Prevention Officer
- **Profile:** TODO
- **Quote:** *"TODO"*

#### 9. Riastrad Fireforged (Steward Riastrad Ulster)
- **Role:** Chairman of Infrastructure & Logistics
- **Profile:** TODO
- **Quote:** *"TODO"*

---

### Leadership Emeritus

#### Sir Artorias the Moonslayer
- **Role:** Chairman Emeritus // Former Chair of Research & Development
- **Profile:** TODO

---

### Undead Staff

#### 1. Woodford
- **Role:** Senior Archival Clerk & Chief Stenographer
- **Classification:** Reanimated Administrative Staff (Non-Sentient Somatic Protocol)
- **Profile:** Dedicated archival clerk maintaining meticulous records, canonical form registries, and meeting transcripts with tireless precision under S.P.E.A.K. protocols.

#### 2. Lil' Timmy
- **Role:** Core Spirit Interface // S.P.E.A.K. Subconscious Indexer
- **Classification:** Reanimated Cognitive Interface Staff
- **Profile:** Beloved guardian whose spirit serves as the foundational interface within the S.P.E.A.K. archival architecture. Commemorated across Confluence for heroic vigilance.
- **Memorial Plaque:** Accessible via discrete commemorative link ([View Memorial](timmy.html)).

---

## 6. AEROSYSTEMS & SKYPORT BERTHS (`gen3.html`)

### World of Osterra Physical Constraints
> [!IMPORTANT]
> Black powder does **not** burn or detonate in Osterra under natural metaphysical laws. All airship armaments rely exclusively on heavy torsion ballistae, high-altitude drops of kinetic shaped metal and stone masses, and airborne skeletal drops.

### History of Osterran Flight
- Owain Fairwind did not invent the airship, but was the first pilot who successfully rode an experimental dire seal air balloon, proving the physical reality of aerial transport.

### Confluence Skyport Master Architecture
- **Location:** `North District // Mount Confluence Upper Terraces`
- **Berths:** `3 Fully Completed Airship Berths Online // 97 Berths Under Active Construction`
- **Mooring:** `Stratospheric Mooring at 8,200 Cubits`
- **Engineering:** `Direct cargo lifts connecting mountain berths to the High Market and foundries below.`

### Fleet Airframes & Payload Capabilities
1. **The Leviathan-Class Rigid Airship**
   - Role: `Heavy Airborne Flagship / Strategic Airframe`
   - Armament: `Heavy Torsion Ballistae, Kinetic Drop Bays (Shaped Stone & Dense Metal Penetrators)`
   - Special Capacity: `Airborne skeletal shock-force drop pods`
2. **The Cloud-Strider Interceptor Mark IV**
   - Role: `High-Speed Patrol & Wyvern Neutralizer`
   - Armament: `Dual Heavy Torsion Harpoon Ballistae`
   - Mission: `Patrolling the skies over Nova Regnus against aerial raiders.`
3. **The Noctis Glowstone & Ore Hauler**
   - Role: `Heavy Mountain-to-Foundry Bulk Freight`
   - Capacity: `85 Tons of Raw Ore & Glowstone`
4. **The Vindicator Tactical Scout**
   - Role: `Forward Reconnaissance & Border Surveillance`
   - Armament: `Rapid-Fire Repeating Ballista`
5. **[BLANK / CLASSIFIED AIRSHIP PROJECT]**
   - Name: `[ PROJECT NIMBUS // EXPERIMENTAL AIRFRAME ]`
   - Role: `[ PENDING SPECIFICATION ]`
   - Notes: `[ Reserved for future airframe design. ]`

---

## 7. CORPUS CORPUS CORPUS & COLLEGIUM (`spectra.html`)

### Power-Tool Doctrine
- Pioneered by Toland of Agnan: skeletons and non-sentient undead function strictly as heavy power tools and machinery.
- Deployed for non-skilled, repetitive, and hazardous physical labor: deep excavation, mining toxic glowstone seams, and transporting massive burdens where wheel carts are physically infeasible.
- Every undead power tool operates under the direct physical and arcane supervision of living custodians.

### Corpus Corpus Collegium
- Certified Ethical Necromancy Training Facility located in Confluence's North-West District.
- Curriculum:
  1. **Workforce Management:** Training living custodians to issue safe, precise somatic commands.
  2. **Osteo-Maintenance:** Cleaning, structural reinforcing, and preservation of skeletal machinery.
  3. **Regulated Reanimation:** Advanced instruction for gifted apprentices in full compliance with the Realm Code of Magical Regulations.

### S.P.E.A.K. Architecture
- Post-Mortal Bio-Archival Interface & Illithid Intelligence System.
- Retains institutional memory, legal precedents, and engineering blueprints across centuries.
- Lil' Timmy operates as the Core Spirit Interface; Woodford serves as the archival clerk.

---

## 9. CANONICAL FORMS BUREAU (`forms.html`)

*(The official Guild of the Black Sky Form - GBSF registry)*

| Form ID | Official Title | Category | Description |
|---|---|---|---|
| **GMSF0A** | Petition for Form | All Bureaus | The prerequisite application required to officially request any subsequent Guild form. |
| **GBSF1A** | Permanent Member Contract | Membership | Comprehensive lifetime employment covenant with quarterly salary tier enrollment. |
| **GBSF2D** | Temporary Contract | Membership | Short-term contractor agreement for seasonal campaigns or specialized crafts. |
| **GBSF3C** | Requisition Form | Infrastructure | Standard material request for tools, glowstone, alchemical reagents, or airship parts. |
| **GBSF4A** | Permanent Contract Amendments | Legal | Formal adjustment petition for existing permanent member bylaws or compensation tiers. |
| **GBSF5A** | Temporary Faction Member Contract | Membership | Accelerated onboarding contract for external adventurers and auxiliary participants. |
| **GBSF6B** | Standard Delivery Catalogue | Trade | Approved list of goods, raw ores, and provisions available for municipal procurement. |
| **GBSF7B** | Catalogue Bill of Receipt | Trade | Official proof of delivery and cargo acceptance signed at Confluence Sky Docks. |
| **GBSF8A** | Official Trade Form | Trade | Bilateral mercantile treaty authorized for inter-faction barter and coin transactions. |
| **GBSF9A** | Formal Invoice | Trade | Certified ledger demand for payment in silver coin or mithril certificates. |
| **GBSF10A** | Premium Delivery Catalogue | Trade | High-grade enchanted items, rare glowstone cuts, and specialized aeromantic hardware in High Market. |
| **GBSF11A** | Miscellaneous Modifications & Addendums | Legal | Flexible legal addendum for extraordinary stipulations not covered in standard dockets. |
| **GBSF12A** | Petition for Redress of Grievances | Legal | Legal claims for libel, defamation, slander, or breach of professional respect. |
| **GBSF13A** | Independent Merchant Contract | Trade | Commercial vendor license permitting stall operation in Confluence's High Market bazaar. |
| **GBSF14A** | Indication of Diplomatic Interest (Successful) | Legal | Formal documentation of successful treaty talks with realms like Eponore, Grove, or Ravens. |
| **GBSF15A** | Indication of Diplomatic Interest (Failed) | Legal | Official bureaucratic record of failed negotiations, logged for archival precedent. |
| **GBSF702B** | Voluntary Post-Mortem Asset Pledge | Corpus Corpus | Pledges physical remains for non-sentient power-tool labor under living supervision pursuant to regulations. |

---

## 10. METROPOLITAN REGISTRY & CONTACT (`contact.html`)

- **High Court & Sacred Desk:**
  `High Spire Citadel, Central District`
  `Plaza of the Broken Chain, Confluence, Nova Regnus, Osterra`
- **Airship Berths:**
  `Confluence Sky Docks 1–3 (Berths 4–100 In Development), North District`
- **Memorial Sentinel Gate:**
  `Little Timmy's Stand (Relocated Playground & Underdark Barrier), South District`
- **Bazaar & Commercial Inquiries:**
  `The High Market Offices, South-East District`
