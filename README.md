# ⚡ Quiz Arena — Live Classroom Challenge

An interactive, real-time multiplayer **Classroom Quiz Arena** (Kahoot-inspired) engineered for secondary school Commerce, HSC Economics, Business Studies, and general knowledge. Built with the same **zero-friction scaffold architecture** as your other classroom tools (`year12business`, `year11econ`, and `commercetravel`).

Target repository: [`simonaa2/quizarena`](https://github.com/simonaa2/quizarena)

---

## 🌟 Key Features

* **Zero-Server Real-Time Sync**: Runs 100% in-browser on GitHub Pages without paid server hosting (WebRTC DataChannels + WSS MQTT fallback + BroadcastChannel).
* **Projector / Smartboard Arena (`host.html`)**: Large 6-digit Game PIN, live QR code for instant mobile scan-to-join, synchronized countdown timer, response distribution charts, dynamic animated leaderboard, and an Olympic 3-tier podium with confetti.
* **Student Controller (`play.html`)**: Mobile-first tactile 4-quadrant pad (🔴 ▲, 🔵 ◆, 🟡 ●, 🟢 ■), haptic feedback, instantaneous speed scoring, and live streak bonuses (`🔥 3 in a row!`).
* **Procedural Web Audio Engine (`sound.js`)**: Native in-browser game show ticks, lock-in chimes, correct answer bells, and victory fanfares — **zero external MP3 files to download or get blocked by school web filters**.
* **Pre-Loaded Curriculum Packs (`quizzes.js`)**:
  * HSC Economics: Global Economy, Balance of Payments, Free Trade & Protection, Exchange Rates, Inflation, and Macroeconomic Policy.
  * HSC Business Studies: Marketing Influences & 4Ps, Financial Ratios & Liquidity, Working Capital Management.
  * Year 10 Commerce: Consumer Rights under ACL, Foreign Exchange & Travel Budgeting, Credit vs Debit.
  * Rapid-Fire Speed Round: High-yield formulas, economic indicators, and key concepts.
* **Solo Revision Mode (`solo.html`)**: Independent self-paced study at home with timed rounds and syllabus rationale explanations.
* **Gradebook & Exporting**: 1-click **Download CSV** and automated Google Sheets sync via `google_script.js`.

---

## 🚀 Quick Start (Play in 10 Seconds)

You can play immediately with zero server setup:
1. Open [`index.html`](index.html) in your browser.
2. Under **Teacher / Projector**, choose a quiz and click **Launch Arena (Projector)**.
3. On the projector screen, you will see a 6-digit **Game PIN** and a **QR Code**.
4. Students scan the QR code or visit the site on their phones, enter the PIN, and pick their name from the class roster!

---

## 📊 Step-by-Step Google Sheets Setup (Optional)

If you want student quiz marks automatically recorded to your private Google Drive spreadsheet:

### Step 1: Create Google Sheet & Paste Script
1. Open [Google Sheets](https://sheets.new) and create a new blank sheet (e.g. `Quiz Arena Master Records`).
2. In the top menu, click **Extensions** ➔ **Apps Script**.
3. Erase all existing placeholder code in the script editor.
4. Open [`google_script.js`](google_script.js), copy the entire file, and paste it into Apps Script.
5. Click the **Save** (disk) icon.

### Step 2: Deploy Web App
1. Click **Deploy** (top right) ➔ **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Configure settings:
   * **Description**: `Quiz Arena Submissions`
   * **Execute as**: `Me (your email)`
   * **Who has access**: **`Anyone`** *(Must be Anyone so student responses submit seamlessly without school Google login prompts)*.
4. Click **Deploy**, authorize permissions if prompted, and copy the **Web App URL** (ends in `/exec`).

### Step 3: Paste URL in `config.js`
1. Open [`config.js`](config.js).
2. Paste your Web App URL into `SCRIPT_URL`:
   ```javascript
   SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
   ```
3. Update `STUDENTS` with your class roster if you want students to quick-select their names from a drop-down.
4. Save `config.js`.

---

## 🌐 How to Host on GitHub Pages (`simonaa2/quizarena`)

1. Create a public repository on GitHub named **`quizarena`** under your account (`simonaa2`):
   [https://github.com/new](https://github.com/new)
2. Push this folder to GitHub:
   ```bash
   git add .
   git commit -m "Launch standalone Quiz Arena"
   git branch -M main
   git remote set-url origin https://github.com/simonaa2/quizarena.git
   git push -u origin main
   ```
3. In your GitHub repository:
   * Click **Settings** ➔ **Pages** (in the left sidebar).
   * Under **Build and deployment** ➔ **Source**, select **Deploy from a branch**.
   * Choose branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Within 60 seconds, your Live Arena will be accessible globally at:
   ```
   https://simonaa2.github.io/quizarena/
   ```

---

## 👩‍🏫 Classroom Gameplay Tips

1. **Dual Display**: Put `host.html` on your classroom projector or smartboard and enter full screen (`⛶`).
2. **Back of Room Accessibility**: On student mobile controllers, answer options show both the large colored geometric shape and the answer text so students in the back row don't have to squint at the whiteboard.
3. **Pacing**: Use 20 seconds for standard recall questions, or 30–45 seconds for calculations and balance of payments analysis.
4. **Syllabus Explanations**: After every question, pause on the explanation drawer to unpack why distractor choices were incorrect before revealing the leaderboard.
5. **Mark Recording**: At the end of the match, click **Download CSV** or **Sync Google Sheet** for instant assessment records.
