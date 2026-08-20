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

This downloads all required packages (React, Three.js, React Markdown, etc.). You'll see a `node_modules` folder appear.

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

## Environment Variables (for Chat Feature)

The AI chat feature requires a **Groq API key**. Without it, the chat page will still load but will show an error when sending messages.

### Getting a Groq API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up or log in
3. Navigate to **API Keys** in the sidebar
4. Click **Create API Key** and copy it

### Setting the Key for Local Development

For local development, create a `.env` file in the project root:

```
GROQ_API_KEY=your_api_key_here
```

Note: The Netlify function reads from `process.env.GROQ_API_KEY`, so for local testing you may need to use the Netlify CLI (see below).

### Setting the Key for Production (Netlify)

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site Settings** → **Environment Variables**
4. Click **Add a variable**
5. Key: `GROQ_API_KEY`
6. Value: your Groq API key
7. Save

The chat feature will work after the next deployment.

## Netlify Deployment

### Option A: Git-based (Recommended)

1. Push your code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Select your GitHub repository
5. Netlify auto-detects Vite — no build settings needed
6. Click **Deploy site**
7. Set the `GROQ_API_KEY` environment variable (see above)

### Option B: Netlify CLI

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Log in:
   ```bash
   netlify login
   ```
3. Initialize the site:
   ```bash
   netlify init
   ```
4. Deploy:
   ```bash
   netlify deploy --prod
   ```

Note: The Netlify CLI must be authenticated for deployment commands to work.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot-reload) |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

## Keyboard Shortcuts (3D View)

| Key | Action |
|-----|--------|
| Space | Pause / Resume animation |
| + / = | Increase simulation speed |
| - | Decrease simulation speed |
| R | Reset camera to overview |
| O | Toggle orbit lines |
| B | Toggle belt particles |
| L | Toggle body labels |
| F | Toggle fullscreen mode |

## Toggle Controls (3D View)

Click the toggle buttons in the top-right of the 3D scene to show/hide:
- **Orbits** — dashed orbit lines for each body
- **Belts** — asteroid belt, Kuiper belt, Trojan asteroids
- **Labels** — body name labels
- **L-points** — Lagrange points (Earth and Jupiter)

## Troubleshooting

### "npm is not recognized" error
Make sure Node.js is installed and restart your terminal.

### "git is not recognized" error
Make sure Git is installed and restart your terminal.

### Blank screen or 3D view not showing
Make sure your browser supports WebGL (all modern browsers do). Try Chrome or Firefox.

### Port 5173 already in use
Run `npm run dev -- --port 3000` to use a different port.

### Chat shows "GROQ_API_KEY not configured"
Make sure you've set the `GROQ_API_KEY` environment variable in your Netlify dashboard (for production) or `.env` file (for local development).

### Visit counter not updating
The visit counter uses a free API (countapi.mileshilliard.com). If it doesn't update immediately, it may be a temporary API delay. The counter also includes country-level tracking via ip-api.com.

### Chat messages don't scroll
If the chat page doesn't scroll to show new messages, ensure `.chat-messages` and `.chat-container` in `index.css` have `min-height: 0`. This is a common flexbox overflow issue where flex children default to `min-height: auto` and expand to fit content instead of triggering `overflow-y: auto`.

## Need Help?

Open an issue at: https://github.com/nirav-email81/solar-system-explorer/issues
