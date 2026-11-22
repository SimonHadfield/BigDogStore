#!/usr/bin/env bash
# ==============================================================================
# Clumsy Giants Storefront - macOS Local Setup Script
# Streetwear for Large Breed Lovers
# ==============================================================================

set -e

# Terminal colors
BOLD='\033[1m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo ""
echo -e "${BOLD}${BLUE}🐾 ====================================================== 🐾${NC}"
echo -e "${BOLD}${BLUE}   CLUMSY GIANTS - LOCAL MAC SETUP & LAUNCH SCRIPT${NC}"
echo -e "${BOLD}${BLUE}   Streetwear for Large Breed Lovers${NC}"
echo -e "${BOLD}${BLUE}🐾 ====================================================== 🐾${NC}"
echo ""

# 1. Detect macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
  echo -e "${YELLOW}⚠️ Notice: This script is optimized for macOS, but attempting to run anyway...${NC}"
fi

# 2. Check for Node.js
echo -e "${BOLD}[1/4] Checking for Node.js & npm...${NC}"

if ! command -v node >/dev/null 2>&1; then
  echo -e "${YELLOW}Node.js is not currently installed.${NC}"

  # Check if Homebrew is available to auto-install
  if command -v brew >/dev/null 2>&1; then
    echo -e "${BLUE}🍺 Homebrew detected. Installing Node.js via Homebrew...${NC}"
    brew install node
  else
    echo ""
    echo -e "${RED}❌ Node.js is required to run the website, but wasn't found.${NC}"
    echo -e "${BOLD}How to install Node.js on your Mac (takes ~1 minute):${NC}"
    echo "  1. Download the LTS installer from: https://nodejs.org/"
    echo "  2. Double-click the downloaded .pkg file and follow the standard Mac installer."
    echo "  3. Reopen your Terminal and run this script again:"
    echo -e "     ${GREEN}./setup-mac.sh${NC}"
    echo ""
    exit 1
  fi
fi

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)
echo -e "${GREEN}✅ Found Node.js ${NODE_VERSION} and npm ${NPM_VERSION}${NC}"

# 3. Environment configuration (.env)
echo -e "${BOLD}[2/4] Setting up local environment configuration...${NC}"

if [ ! -f .env ]; then
  if [ -f .env.example ]; then
    cp .env.example .env
    echo -e "${GREEN}✅ Created local .env configuration file from .env.example${NC}"
  else
    cat <<EOF > .env
STRIPE_SECRET_KEY=sk_test_placeholder_for_local_dev
STRIPE_WEBHOOK_SECRET=whsec_placeholder_for_local_dev
PUBLIC_SITE_URL=http://localhost:4321
POD_API_URL=https://api.printprovider.example.com/v1/orders
POD_API_KEY=pod_test_key_sample
EOF
    echo -e "${GREEN}✅ Generated default local .env configuration${NC}"
  fi
else
  echo -e "${BLUE}ℹ️ Existing .env file detected, keeping your configuration.${NC}"
fi

# 4. Install npm dependencies
echo -e "${BOLD}[3/4] Installing project packages & dependencies...${NC}"
npm install
echo -e "${GREEN}✅ All packages installed successfully!${NC}"

# 5. Success summary & auto-run prompt
echo ""
echo -e "${BOLD}${GREEN}🎉 ====================================================== 🎉${NC}"
echo -e "${BOLD}${GREEN}   CLUMSY GIANTS IS READY TO RUN!${NC}"
echo -e "${BOLD}${GREEN}🎉 ====================================================== 🎉${NC}"
echo ""
echo -e "To start the site manually at any time:"
echo -e "  1. In Terminal, navigate to this folder: ${BLUE}cd $(pwd)${NC}"
echo -e "  2. Run: ${GREEN}npm run dev${NC}"
echo -e "  3. Open your browser at: ${BOLD}http://localhost:4321${NC}"
echo ""

read -p "Would you like to start the website right now? (Y/n): " RUN_NOW
RUN_NOW=${RUN_NOW:-Y}

if [[ "$RUN_NOW" =~ ^[Yy]$ ]]; then
  echo ""
  echo -e "${BOLD}${BLUE}🚀 Starting local development server...${NC}"
  echo -e "Press ${BOLD}Ctrl + C${NC} in this Terminal window whenever you want to stop it."
  echo ""
  # Open browser automatically on macOS after 2 seconds in background
  (sleep 2 && open "http://localhost:4321" 2>/dev/null || true) &
  npm run dev
else
  echo -e "${BLUE}No problem! Whenever you're ready, just type: ${GREEN}npm run dev${NC}"
fi
