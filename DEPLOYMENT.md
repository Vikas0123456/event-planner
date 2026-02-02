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

## 🎯 **Netlify Deployment** (With Custom URL)

Netlify is excellent and free. You can customize your site URL easily!

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

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. **IMPORTANT:** Before clicking "Deploy site", click **"Show advanced"** or **"Options"**
7. In **"Site name"** field, enter your custom name (e.g., `premium-catering` or `my-catering-service`)
   - This will create URL: `https://your-custom-name.netlify.app`
   - Only lowercase letters, numbers, and hyphens allowed
   - Must be unique (if taken, try variations)
8. Click **"Deploy site"**
9. Done! 🎉 Your site will be live in 2-3 minutes

### Step 3: Change Site Name After Deployment (If Needed)

If you want to change the URL after deployment:

1. Go to your site dashboard on Netlify
2. Click **"Site settings"** (top right)
3. Click **"Change site name"** under "General"
4. Enter your new custom name
5. Click **"Save"**
6. Your new URL will be: `https://new-name.netlify.app`

### Step 4: Custom Domain (Optional)

1. Go to **"Domain settings"** in your site dashboard
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `catering.com`)
4. Follow DNS instructions
5. Netlify will provide SSL certificate automatically

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

## 🎯 Netlify URL Customization Tips

### Good Site Names:
- ✅ `premium-catering-services`
- ✅ `my-catering-company`
- ✅ `catering-delhi`
- ✅ `wedding-catering-2024`

### Bad Site Names (Avoid):
- ❌ `Premium Catering` (spaces not allowed)
- ❌ `catering@2024` (special chars not allowed)
- ❌ `CATERING` (uppercase not recommended)

### URL Format:
- Default: `random-name-12345.netlify.app`
- Custom: `your-custom-name.netlify.app`
- Custom Domain: `yourdomain.com`

**Note:** `netlify.toml` file is already added to your project for optimal configuration!

---

## After Deployment (Netlify)

1. Your site will be live at: `https://your-custom-name.netlify.app`
2. Every git push = automatic new deployment
3. Check deployment logs in Netlify dashboard
4. Monitor performance in Netlify Analytics (free tier available)
5. Preview deployments for every branch/PR automatically created

---

## Troubleshooting

### Build Fails on Netlify?
- Check build logs in Netlify dashboard (Deploy log)
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally first to test
- Verify `netlify.toml` file exists (already added to your project)

### Site Name Already Taken?
- Try variations: `catering-service-1`, `my-catering-2024`
- Add numbers or location: `catering-delhi`, `catering-mumbai`
- Use your business name: `premium-catering-services`

### Images Not Loading?
- Make sure image URLs are absolute or use `/` prefix
- Check if images are in `public/` folder
- For external images, use full URLs (https://...)

### Routing Issues on Netlify?
- `netlify.toml` file already handles this with redirects
- If still issues, check Netlify dashboard → Site settings → Build & deploy → Post processing

### How to Change Netlify URL Later?
1. Go to Site settings → General
2. Click "Change site name"
3. Enter new name (must be unique)
4. Save

---

**Need help?** Check Vercel docs: https://vercel.com/docs

