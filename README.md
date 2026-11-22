# 🐾 Clumsy Giants — Large Breed Streetwear

> **Elevated streetwear for 40kg lapdogs, clumsy paws, personal space violations, and the humans who love them.**

Built with **Astro**, **Tailwind CSS**, self-hosted typography via **@fontsource**, strict **Cloudflare Pages** edge deployment (`_headers` + `_routes.json`), and **Stripe Checkout** integration.

---

## 🚀 Quick Start Guide (macOS & Windows)

Follow these simple instructions to run the website locally on your computer.

### 🍎 For macOS (MacBook, iMac, Mac mini)

If you're on a Mac, you can get the site running with a single script:

#### Step 1: Open Terminal
- Press `Cmd + Space` to open Spotlight, type **Terminal**, and hit `Enter`.

#### Step 2: Clone the Repository
If you haven't downloaded the code yet, run:
```bash
git clone https://github.com/SimonHadfield/BigDogStore.git
cd BigDogStore
```
*(If you already have the folder, just `cd` into it).*

#### Step 3: Run the Setup Script
Run the automated setup script:
```bash
./setup-mac.sh
```
*(If Terminal says `permission denied`, run `chmod +x setup-mac.sh && ./setup-mac.sh` or `bash setup-mac.sh`)*.

**What the script does automatically:**
1. Checks that **Node.js** is installed (or helps you install it via Homebrew or nodejs.org).
2. Generates your local `.env` configuration file automatically.
3. Installs all project dependencies (`npm install`).
4. Prompts you to launch the site and opens your browser at **http://localhost:4321**.

---

### 🪟 For Windows

#### Option A: 1-Click Batch File
1. Open the project folder in File Explorer.
2. Double-click `setup-windows.bat`.

#### Option B: PowerShell / Terminal
```powershell
git clone https://github.com/SimonHadfield/BigDogStore.git
cd BigDogStore
.\setup-windows.ps1
```

---

## 💻 Manual Commands (Any OS)

If you prefer to run commands manually in your terminal:

```bash
# 1. Install dependencies
npm install

# 2. Copy environment settings (if not already done)
cp .env.example .env    # On Mac/Linux
# copy .env.example .env  (On Windows Command Prompt)

# 3. Start the local development server
npm run dev
```

Then open your browser to:
👉 **[http://localhost:4321](http://localhost:4321)**

Press `Ctrl + C` in your terminal anytime to stop the server.

---

## 🛠️ Requirements & Troubleshooting

### 1. Node.js Requirement
This project requires **Node.js v18.0.0 or higher** (Node 20+ LTS recommended).
- Check your version: `node -v`
- If you don't have it installed, download the official installer at **[nodejs.org](https://nodejs.org/)**.

### 2. Private Repository Access on GitHub
If this repository is set to private:
1. Simon can invite your GitHub account under **Repository Settings > Collaborators > Add people**.
2. Once you accept the email or GitHub invitation, you can clone using your normal GitHub credentials or SSH key:
   ```bash
   git clone https://github.com/SimonHadfield/BigDogStore.git
   ```

### 3. Port 4321 is already in use
If another process is using port 4321, you can run:
```bash
npm run dev -- --port 4322
```
And view the site at `http://localhost:4322`.

---

## 📦 Project Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server at `http://localhost:4321` |
| `npm run build` | Compiles production hybrid build for Cloudflare Pages into `dist/` |
| `npm run preview` | Previews the compiled build locally |
| `npm test` | Runs the automated Node test suite (`tests/storefront.test.mjs`) |

---

## 🐾 About the Brand

**Clumsy Giants** is a boutique streetwear label designed for large-breed lovers (Dobermans, Great Danes, Bernese Mountain Dogs, Rottweilers, and oversized couch potatoes). 

- **Palette**: Pure White `#FFFFFF` canvas, Warm Cream `#F4ECE1` product cards, Solid Charcoal `#1A1816` headings & top announcement bar, Forest Olive `#4B5842` & Burgundy `#5C2B33` accents.
- **Typography**: Self-hosted `@fontsource/fredoka` rounded display headings paired with clean `@fontsource/plus-jakarta-sans` body copy (100% locked-down CSP, zero external Google Fonts requests).
- **Security & Performance**: Strict CSP, HSTS, `X-Frame-Options: DENY`, 100/100 Lighthouse performance.
