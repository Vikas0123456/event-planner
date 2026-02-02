# 🍽️ Premium Catering Services Website

A modern, mobile-first, fully responsive website for a premium catering business. Built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Premium UI/UX Design** - Modern, elegant interface with glassmorphism effects
- 📱 **Mobile-First** - Fully responsive design optimized for all screen sizes
- 🎭 **Smooth Animations** - Parallax effects, fade-ins, and hover animations
- 🖼️ **Image Gallery** - Lightbox preview with navigation
- 💬 **WhatsApp Integration** - Direct contact via WhatsApp
- ⭐ **Testimonials Carousel** - Auto-rotating customer reviews
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🚀 **Fast Performance** - Optimized with Vite and lazy loading

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Routing:** React Router DOM 6
- **Language:** JavaScript (ES6+)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 2. Start Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will start at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

or

```bash
yarn build
```

The production build will be in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

or

```bash
yarn preview
```

## 📁 Project Structure

```
premium-catering-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── SpecialOffers.jsx
│   │   ├── Facilities.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/             # Page components
│   │   └── Home.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # This file
```

## 🎨 Customization

### Update WhatsApp Number

To change the WhatsApp contact number, update it in the following files:

1. `src/components/Hero.jsx` - Line with `https://wa.me/917067059611`
2. `src/components/Contact.jsx` - Line with `https://wa.me/917067059611`
3. `src/components/Footer.jsx` - Line with `https://wa.me/917067059611`
4. `src/components/Navbar.jsx` - Line with `https://wa.me/917067059611`
5. `src/components/SpecialOffers.jsx` - Line with `https://wa.me/917067059611`

Replace `917067059611` with your WhatsApp number (include country code without +).

### Update Contact Information

Edit contact details in:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Replace Gallery Images

Update the `images` array in `src/components/Gallery.jsx` with your actual image URLs.

### Customize Colors

Modify the color scheme in `tailwind.config.js` under the `theme.extend.colors` section.

## 📱 Sections

1. **Hero Section** - Eye-catching landing with parallax effect and CTAs
2. **About Section** - Business introduction with statistics
3. **Services Section** - Six service cards with icons
4. **Gallery Section** - Image grid with lightbox preview
5. **Special Offers** - Promotional banners with discount information
6. **Facilities** - Why choose us section with feature highlights
7. **Testimonials** - Auto-rotating customer reviews carousel
8. **Contact Section** - Contact form and WhatsApp integration
9. **Footer** - Links, contact info, and social media

## 🎯 Key Features Explained

### WhatsApp Integration

The website includes multiple WhatsApp contact buttons that open WhatsApp Web/App with a pre-filled message to the admin number: **+91 7067059611**

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly buttons and navigation

### Animations

- Fade-in animations on scroll
- Parallax effects in hero section
- Hover effects on cards and buttons
- Smooth transitions throughout

### Glassmorphism

Modern glassmorphism effects using:
- `backdrop-blur-md`
- Semi-transparent backgrounds
- Subtle borders and shadows

## 🔧 Environment Variables (Optional)

If you need to add environment variables, create a `.env` file:

```env
VITE_WHATSAPP_NUMBER=917067059611
VITE_CONTACT_EMAIL=info@premiumcatering.com
```

Then use them in your components:

```javascript
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER
```

## 📝 Form Handling

The contact form saves data to **localStorage** and automatically downloads a JSON file with all contacts.

- **localStorage**: Data is stored in browser's local storage
- **JSON Download**: Each submission downloads a complete JSON file with all contacts
- **No Backend Required**: Everything works client-side only

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy, Vite will automatically use the next available port.

### Tailwind Styles Not Loading

Ensure `postcss.config.js` and `tailwind.config.js` are properly configured.

### Images Not Loading

Replace placeholder image URLs in `Gallery.jsx` with actual hosted images.

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Support

For issues or questions, please contact:
- Email: info@premiumcatering.com
- WhatsApp: +91 7067059611

## 🎉 Credits

- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/)
- **Images:** [Unsplash](https://unsplash.com/) (replace with your own)

---

**Built with ❤️ for premium catering services**

