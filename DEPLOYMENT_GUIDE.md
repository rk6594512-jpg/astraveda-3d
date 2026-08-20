# AstraVeda 3D — Deployment Guide
# Deploy Karne Ka Complete Step-by-Step Guide

## Pehle Local Pe Test Karo (Step 1)

```bash
# 1. Project folder me jao
cd astraveda-3d

# 2. Dependencies install karo
npm install

# 3. Type check karo
npm run typecheck

# 4. Build karo
npm run build

# 5. Local server chalao
npm run dev

# 6. Browser me check karo: http://localhost:3000
```

**Agar koi error aaye to pehle usse fix karo, phir deploy karo.**

---

## Option A: Vercel Pe Deploy (Recommended — Free & Fast)

Vercel Next.js ke liye best hai. Auto-build, auto-deploy, aur preview URLs milti hain.

### Method 1: Vercel CLI (Command Line)

```bash
# 1. Vercel CLI install karo (globally)
npm install -g vercel

# 2. Login karo
vercel login

# 3. Project folder me jao aur deploy karo
cd astraveda-3d
vercel

# 4. First time setup:
#   - "Set up and deploy?" → Y (Yes)
#   - "Which scope?" → apna account select karo
#   - "Link to existing project?" → N (No)
#   - "What's your project name?" → astraveda-3d
#   - "Which directory?" → . (current)
#   - "Want to modify settings?" → N (No)

# 5. Production deploy ke liye:
vercel --prod
```

### Method 2: Vercel Dashboard (GitHub se)

1. **GitHub pe push karo:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AstraVeda 3D MVP"
   git branch -M main
   # GitHub repo banayo: https://github.com/new
   git remote add origin https://github.com/USERNAME/astraveda-3d.git
   git push -u origin main
   ```

2. **Vercel Dashboard:**
   - https://vercel.com pe jao
   - "Add New Project" click karo
   - GitHub se "astraveda-3d" repo import karo
   - Framework: "Next.js" auto-detect hoga
   - "Deploy" button daba do

3. **Done!** URL milegi: `https://astraveda-3d.vercel.app`

---

## Option B: Netlify Pe Deploy

Netlify bhi free hai aur achha performance deta hai.

### Method 1: Netlify CLI

```bash
# 1. Netlify CLI install karo
npm install -g netlify-cli

# 2. Login karo
netlify login

# 3. Deploy karo
cd astraveda-3d
netlify deploy --build

# 4. Production deploy:
netlify deploy --prod --build
```

### Method 2: Netlify Dashboard (GitHub se)

1. GitHub pe repo push karo (upar wale steps follow karo)
2. https://app.netlify.com pe jao
3. "Add new site" → "Import an existing project"
4. GitHub connect karo, "astraveda-3d" repo select karo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20`
6. "Deploy site" daba do

---

## Option C: Railway / Render (Backend ke saath)

Jab aap Phase 5 me Supabase backend add karoge, tab ye platforms useful hain:

### Railway
```bash
npm install -g @railway/cli
railway login
cd astraveda-3d
railway init
railway up
```

### Render
- https://render.com pe jao
- "New Web Service" → GitHub repo connect karo
- Build Command: `npm install && npm run build`
- Start Command: `npm start`

---

## Custom Domain Setup (Optional)

### Vercel pe:
1. Dashboard → Project Settings → Domains
2. Apna domain add karo (e.g., `astraveda3d.com`)
3. DNS records add karo (Vercel instructions follow karo)

### Netlify pe:
1. Site settings → Domain management → Custom domains
2. Domain add karo
3. DNS CNAME record add karo

---

## Post-Deploy Verification Checklist

Deploy ke baad ye sab check karo:

- [ ] Landing page load hota hai
- [ ] 3D hero / starfield dikhta hai
- [ ] Mobile pe responsive hai
- [ ] Hindi/English toggle kaam karta hai
- [ ] Onboarding flow chalta hai
- [ ] Kundli dashboard tabs switch hote hain
- [ ] Palm scan upload kaam karta hai
- [ ] AI chat messages bhejne pe response aata hai
- [ ] Navbar mobile menu khulta hai
- [ ] Footer links kaam karte hain
- [ ] Console me koi error nahi hai
- [ ] Page refresh pe 404 error nahi aata

---

## Common Errors & Solutions

### Error: "Module not found"
**Solution:** `npm install` dubara chalao

### Error: "Build failed"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error: "TypeScript errors"
**Solution:** `npm run typecheck` chalao, errors fix karo

### Error: "404 on page refresh" (Netlify)
**Solution:** `netlify.toml` already banaya hai, usme redirects hain

### Error: "404 on page refresh" (Vercel)
**Solution:** Vercel Next.js ko auto-handle karta hai, `vercel.json` already hai

---

## Environment Variables (Phase 5 ke liye)

Jab backend add karoge:

1. `.env.example` ko copy karo:
   ```bash
   cp .env.example .env.local
   ```

2. Values fill karo:
   - Supabase URL & keys
   - AI API keys
   - Astrology calculation API

3. Vercel/Netlify dashboard pe bhi same env variables add karo

---

## Performance Optimization Tips

1. **Images:** `public/` me WebP/AVIF format use karo
2. **3D Scene:** Mobile pe 2D fallback active hai
3. **Fonts:** Google Fonts preconnect already hai `layout.tsx` me
4. **Bundle:** `next.config.ts` me `experimental.optimizePackageImports` add kar sakte ho

---

## Recommended: Vercel + GitHub Workflow

Sabse best tarika ye hai:

1. GitHub repo banayo
2. Vercel se GitHub repo connect karo
3. Har commit pe auto-deploy hoga
4. Pull requests pe preview URL milegi
5. Main branch pe production deploy hoga

**Isse aap kisi bhi agent ko code changes karne ke liye bol sakte ho, aur wo GitHub pe push karega — Vercel auto-deploy kar dega.**

---

## Support

Agar koi issue aaye to:
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- Next.js deployment: https://nextjs.org/docs/deployment
