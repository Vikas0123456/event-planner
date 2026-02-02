# 🚀 Deployment Guide

## Best Option: **Vercel** (Recommended)

Vercel is the easiest and best option for React + Vite apps. Free, fast, and zero configuration needed.

### Step 1: Push Code to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**
7. Done! 🎉 Your site will be live in 2-3 minutes

### Step 3: Custom Domain (Optional)

1. Go to your project settings
2. Click **"Domains"**
3. Add your custom domain
4. Follow DNS instructions

---

## Alternative Option: **Netlify**

Netlify is also excellent and free.

### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**
7. Done! 🎉

---

## Alternative Option: **GitHub Pages**

Free but requires a bit more setup.

### Steps:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repo name
  server: {
    port: 3000,
    open: true
  }
})
```

4. Deploy:
```bash
npm run deploy
```

---

## Quick Comparison

| Platform | Free Tier | Ease | Speed | Custom Domain |
|----------|-----------|------|-------|---------------|
| **Vercel** ⭐ | ✅ Yes | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | ✅ Free |
| **Netlify** | ✅ Yes | ⭐⭐⭐⭐ | ⚡⚡⚡ | ✅ Free |
| **GitHub Pages** | ✅ Yes | ⭐⭐⭐ | ⚡⚡ | ✅ Free |

---

## Recommended: **Vercel**

**Why Vercel?**
- ✅ Zero configuration
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Global CDN (super fast)
- ✅ Preview deployments for PRs
- ✅ Free custom domains
- ✅ Analytics included

---

## After Deployment

1. Your site will be live at: `https://your-project.vercel.app`
2. Every git push = automatic new deployment
3. Check deployment logs in Vercel dashboard
4. Monitor performance and analytics

---

## Troubleshooting

### Build Fails?
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally first to test

### Images Not Loading?
- Make sure image URLs are absolute or use `/` prefix
- Check if images are in `public/` folder

### Routing Issues?
- Vercel auto-handles React Router
- If issues, add `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

**Need help?** Check Vercel docs: https://vercel.com/docs

