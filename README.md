# zadotec.com — my portfolio site

Built with **Astro** (a tool that turns Markdown files into a fast website) and hosted free on **GitHub Pages**.

---

## 1. Install these on Windows (one time)

| Tool | Download | Why |
|---|---|---|
| Git for Windows | https://git-scm.com/download/win | Saves versions of your site and sends them to GitHub |
| VS Code | https://code.visualstudio.com | Where you edit files |
| Node.js **LTS** | https://nodejs.org | Runs the site on your PC for preview |
| GitHub Desktop (optional) | https://desktop.github.com | Upload with buttons instead of commands |

In VS Code, install the extension **"Astro"** (search in the Extensions tab).

## 2. Run the site on your PC

1. Unzip this folder, e.g. to `C:\Users\<you>\zadotec`.
2. In VS Code: **File → Open Folder** → choose the folder.
3. Open the terminal: **Terminal → New Terminal**, then run:

```bash
npm install      # first time only — downloads Astro
npm run dev      # starts the site at http://localhost:4321
```

4. Open http://localhost:4321 in your browser. When you save a file, the page updates by itself.
5. Press `Ctrl + C` in the terminal to stop.

## 3. Where things are

```
src/
  site.config.ts        ← your name, role, email, LinkedIn, GitHub links
  data/profile.ts       ← skills, experience, education, certificates
  content/
    projects/           ← one .md file = one project
    case-studies/       ← one .md file = one case study
    learning/           ← one .md file = one learning note (_template.md is a template)
  styles/global.css     ← colors and design
public/
  CNAME                 ← your domain (zadotec.com)
```

**First thing to edit:** `src/site.config.ts` → put your real email, LinkedIn and GitHub links.

## 4. Add a new post (the daily workflow)

1. Copy `src/content/learning/_template.md` → rename it, e.g. `azure-vnets.md` (lowercase, dashes, no spaces). The file name becomes the web address: `zadotec.com/learning/azure-vnets/`.
2. Edit the top part (between the `---` lines): title, summary, date, tags, icon, color.
3. Change `draft: true` to `draft: false`.
4. Write below it in Markdown:
   - `## Heading`, `**bold**`, `- bullet`, `1. numbered`
   - code: three backticks + `powershell` … three backticks
   - images: put the file in `public/images/` and write `![description](/images/file.png)`
5. Check it at http://localhost:4321, then publish (step 6).

For a **project**, also set `status: Planned`, `In progress` or `Done`.

**Icons:** cloud, server, network, terminal, shield, bot, book, monitor, folder, award
**Colors:** blue, teal, violet, orange, pink, green

## 5. Put it on GitHub (one time)

1. Create a free account at https://github.com (use your personal email).
2. Click **New repository** → name: `zadotec` → **Public** → Create.
3. In the VS Code terminal, inside the project folder:

```bash
git init
git add .
git commit -m "First version of zadotec.com"
git branch -M main
git remote add origin https://github.com/<your-username>/zadotec.git
git push -u origin main
```

(GitHub Desktop alternative: **File → Add local repository** → choose the folder → **Publish repository**.)

4. On GitHub: repository → **Settings → Pages** → under *Build and deployment*, set **Source = GitHub Actions**.
5. Go to the **Actions** tab — you'll see "Deploy to GitHub Pages" running. After ~1 minute your site is live at `https://<your-username>.github.io/zadotec/`… but it is set up for your own domain, so finish step 7.

## 6. Publish changes (every time)

```bash
git add .
git commit -m "Add note: Azure VNets"
git push
```

The site updates automatically in about a minute.

## 7. Connect zadotec.com

1. Buy `zadotec.com` from a registrar (e.g. Cloudflare, Namecheap, Porkbun, Gabia).
2. In the registrar's **DNS** settings add:
   - 4 × **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 × **CNAME** record for `www` → `<your-username>.github.io`
3. On GitHub → **Settings → Pages → Custom domain**: type `zadotec.com` → Save. When the check passes, tick **Enforce HTTPS**.
4. DNS can take a few minutes to a few hours.

(Check GitHub's "Managing a custom domain for your GitHub Pages site" docs if the IPs above ever change.)

## 8. Safety rules for work content

Never publish: IP addresses, hostnames, server/switch names, site codes, colleague or vendor names, ticket numbers, screenshots of internal systems. Write the problem, cause, fix and lesson in general terms — or rebuild it in your home lab and show that.

## Git cheat-sheet

| Command | What it does |
|---|---|
| `git status` | What changed? |
| `git add .` | Prepare all changes |
| `git commit -m "message"` | Save a version with a note |
| `git push` | Send to GitHub (publishes the site) |
| `git pull` | Get the latest from GitHub (if you edited on another PC) |
| `git log --oneline` | List past versions |
