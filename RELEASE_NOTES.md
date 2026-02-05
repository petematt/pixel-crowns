# Pixel Crowns - Release Notes & Deployment Guide

## How to Deploy a New Version
Follow these steps to push your changes to GitHub and update the live game on GitHub Pages.

```powershell
# 1. Stage your changes
git add .

# 2. Commit your changes
# Replace "Your descriptive message" with what you changed
git commit -m "Your descriptive message"

# 3. Push source code to GitHub (master branch)
git push origin master

# 4. Build and deploy to GitHub Pages
# This runs 'npm run build' followed by 'gh-pages -d dist'
npm run deploy
```

---

## Version History

### v1.1.0 - The Narrative Overhaul & Deployment Fix
*Released: February 2026*

#### **Core Enhancements**
- **Narrative Overhaul**: Rewrote all event text (100+ events and 30 chains) to remove repetitive "Currently:" boilerplate.
- **Tone & Style**: Injected a snarky, cynical, Matt Dinniman-inspired voice throughout the game.
- **Revolt System**: Implemented a priority-trigger system for faction revolts when reputation drops below 20.
- **Event Balancing**: Reduced chain starter weights (from 10 to 1-3) to increase variety in early-game events.

#### **UI & UX**
- **Main Menu**: Fixed logic to ensure new players start at the Main Menu.
- **Image Loading**: Converted asset paths to relative URLs to fix missing images on GitHub Pages.
- **Ignore Logic**: "Ignore Request" button now only appears if no other options are affordable.
- **Title Update**: Formally rebranded the game as **Pixel Crowns**.

#### **Technical**
- **GitHub Pages Configuration**: Set up `vite.config.ts` and `package.json` for seamless deployment.
- **TypeScript Cleanup**: Resolved major build-blocking type errors and unused imports.
- **Git Initialization**: Set up project repository and `.gitignore`.
