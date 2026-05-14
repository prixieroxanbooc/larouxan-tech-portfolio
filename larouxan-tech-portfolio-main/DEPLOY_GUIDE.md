# Deploy Guide — LarouxanTech Portfolio

Project originally built sa **Lovable**, then na-download as local code. Para ma-deploy ulit at ma-update ang current domain mo, may **3 paths** kang pwedeng pagpilian. Pumili ka kung saan ka most comfortable.

---

## Path A: Push to GitHub → Lovable auto-syncs → custom domain

Ito ang **pinaka-recommended** kasi:
- Lovable nasubaybayan na yung GitHub repo (kung naka-connect siya from the start)
- Bawat push sa GitHub = auto deploy via Lovable
- Custom domain settings stay sa Lovable dashboard

### Step 1 — Initialize Git (kung wala pa)

Buksan PowerShell sa project folder:

```powershell
cd "C:\Users\User\Downloads\larouxan-tech-portfolio-main\larouxan-tech-portfolio-main"
git status
```

Kung sabi "not a git repository":

```powershell
git init
git branch -M main
```

### Step 2 — Connect to your existing GitHub repo

Hanapin mo yung Lovable project sa lovable.dev. Doon makikita yung connected GitHub repo URL (something like `github.com/prixieroxanbooc/larouxan-tech-portfolio`).

```powershell
git remote add origin https://github.com/prixieroxanbooc/larouxan-tech-portfolio.git
git fetch origin
git pull origin main --allow-unrelated-histories
```

Kung may merge conflicts, resolve mo muna. Karaniwang ang conflict sa `package-lock.json` — pwedeng tanggalin yung local at gamitin yung sa GitHub:

```powershell
git checkout origin/main -- package-lock.json
```

### Step 3 — Stage + commit your changes

**Tip:** I-check muna kung ano yung mababago para hindi mag-commit ng sensitive files (e.g. node_modules, .env):

```powershell
git status
```

Verify mo nasa `.gitignore` na yung `node_modules/` at `.env*`. Kung wala:

```powershell
@'
node_modules/
.env
.env.local
dist/
.DS_Store
'@ | Out-File -FilePath .gitignore -Encoding utf8 -Append
```

Then add + commit:

```powershell
git add src public DEPLOY_GUIDE.md package.json package-lock.json index.html vite.config.ts tailwind.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json
git commit -m "feat: multi-page portfolio + new projects, skills, dark mode, modern UI"
```

### Step 4 — Push to GitHub

```powershell
git push -u origin main
```

### Step 5 — Lovable auto-deploys

Bumalik ka sa **lovable.dev** → buksan yung project. Detect mo dapat yung commit at mag-auto-build. Kapag tapos (~1–2 min), yung Lovable preview URL mo refreshed na.

### Step 6 — Custom domain (kung meron ka na)

Sa Lovable dashboard → **Project Settings** → **Custom Domain** → tingnan kung naka-link pa rin yung domain mo. Walang dapat baguhin sa DNS — automatic na-sync.

Kung wala pang custom domain, sundan mo yung Lovable's "Add custom domain" wizard. Bibigyan ka ng DNS records (A record / CNAME) na ilalagay mo sa registrar mo (Namecheap, GoDaddy, etc).

---

## Path B: Skip GitHub, deploy directly via Lovable's "Import Files"

Kung gusto mo less Git complexity:

1. Sa lovable.dev, buksan yung project.
2. Hanapin yung "Import" or "Sync" option (lokasyon depende sa Lovable's current UI).
3. I-upload mo yung buong `larouxan-tech-portfolio-main/` folder (or zip mo muna).
4. Lovable mag-re-import yung files at mag-rebuild.

**Warning:** Mas confusing ito kung naka-connect already yung Lovable sa GitHub repo. Path A mas malinis.

---

## Path C: Deploy elsewhere (Vercel / Netlify) — bypass Lovable entirely

Kung gusto mong direct na ikaw ang naka-control sa deployment (mas mabilis, mas configurable):

### Vercel (recommended for Vite + React)

1. `npm i -g vercel` (one-time install)
2. From the project folder:
   ```powershell
   vercel
   ```
3. Sundan yung prompts — pumili "Create new project", framework: **Vite**, build command: `npm run build`, output: `dist`.
4. Bibigyan ka ng deploy URL. Pwede mong i-link sa custom domain via Vercel dashboard.

### Netlify

1. Buksan netlify.com → "Add new site" → connect to GitHub repo (after Path A step 4).
2. Build command: `npm run build`. Publish directory: `dist`.
3. Save → auto-deploy.

**Pros ng Vercel/Netlify:** Faster CDN, walang Lovable platform lock-in, lebrere ka sa monthly Lovable credits.
**Cons:** Pag may bug or design change gusto mo, hindi mo na pwede gamitin yung Lovable's visual editor — code-only updates na.

---

## Sa Lovable's visual editor — after pushing changes

⚠️ **Important:** Yung mga changes na ginawa natin (multi-page conversion, 18 project cards, dark mode, etc.) ay code-level changes. Pag bumalik ka sa Lovable's visual editor:

- Pwedeng hindi kaagad ma-detect ng visual editor yung custom components (Layout, ScrollToTop, ProjectCard, CustomCursor, ThemeProvider, ThemeToggle).
- **Safe usage**: Use Lovable's visual editor for SMALL tweaks (text changes, color tweaks). Para sa structural changes, use VS Code / Cursor / Claude Code at push via git.
- **Risk**: If Lovable's AI re-generates a file (e.g. "redesign the hero"), pwedeng mawala yung custom logic. Always commit muna bago mag-prompt sa Lovable.

---

## Local preview commands (cheat sheet)

```powershell
# Start dev server (hot reload, port 8080)
cd "C:\Users\User\Downloads\larouxan-tech-portfolio-main\larouxan-tech-portfolio-main"
npm run dev

# Build for production (creates dist/ folder)
npm run build

# Preview the production build locally
npm run preview
```

Dev server URL: **http://localhost:8080/**
Phone via Wi-Fi: **http://192.168.254.104:8080/** (kung same Wi-Fi)

---

## Final pre-deploy checklist

- [ ] Test sa desktop browser (Chrome / Edge): http://localhost:8080
- [ ] Test sa phone via network URL (same Wi-Fi)
- [ ] Click yung theme toggle (sun/moon icon) → confirm dark mode works
- [ ] Click hamburger menu sa mobile → confirm drawer slides
- [ ] Visit every page: `/`, `/services`, `/projects`, `/skills`, `/about`, `/testimonials`, `/contact`
- [ ] Click "Images" button sa Asana + Appsmith cards → confirm gallery opens
- [ ] Hover over cards on desktop → confirm gradient border glows
- [ ] Run `npm run build` → confirm walang TypeScript errors
- [ ] Commit + push to GitHub (Path A) or deploy directly (Path B/C)

Pag tapos lahat ng above, ready ka na for production.
