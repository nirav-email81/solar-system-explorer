# Solar Explorer — Setup Guide

Follow these steps to download and run the Solar Explorer project on your computer.

## Prerequisites

You need **two things** installed:

### 1. Node.js (includes npm)
- Download from: https://nodejs.org/ (use the **LTS** version)
- After installing, open a terminal and verify:
  ```bash
  node --version   # Should show v18 or higher
  npm --version    # Should show v9 or higher
  ```

### 2. Git
- Download from: https://git-scm.com/downloads
- After installing, open a terminal and verify:
  ```bash
  git --version    # Should show v2.x or higher
  ```

## Step 1: Clone the Repository

Open a terminal (Command Prompt, PowerShell, or Git Bash) and run:

```bash
git clone https://github.com/nirav-email81/solar-system-explorer.git
cd solar-system-explorer
```

This downloads the project and enters the project folder.

## Step 2: Install Dependencies

Inside the project folder, run:

```bash
npm install
```

This downloads all required packages (React, Three.js, etc.). You'll see a `node_modules` folder appear.

## Step 3: Start the Development Server

Run:

```bash
npm run dev
```

You should see output like:

```
  VITE v5.x.x  ready in XXX ms
  ➜  Local:   http://localhost:5173/
```

## Step 4: Open in Browser

Open your browser and go to:

**http://localhost:5173/**

You should see the Solar Explorer homepage with the solar system navigation.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot-reload) |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

## Troubleshooting

### "npm is not recognized" error
Make sure Node.js is installed and restart your terminal.

### "git is not recognized" error
Make sure Git is installed and restart your terminal.

### Blank screen or 3D view not showing
Make sure your browser supports WebGL (all modern browsers do). Try Chrome or Firefox.

### Port 5173 already in use
Run `npm run dev -- --port 3000` to use a different port.

## Need Help?

Open an issue at: https://github.com/nirav-email81/solar-system-explorer/issues
