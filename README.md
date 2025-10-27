# 🐾 Pawfect Companion - Pet Website Template

A beautiful, fully responsive pet website template built with React, TypeScript, and Tailwind CSS. Perfect for pet blogs, pet product affiliates, or pet service businesses.

## 🚀 One-Click Deploy

Deploy your own copy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME&env=VITE_SUPABASE_URL,VITE_SUPABASE_PUBLISHABLE_KEY,VITE_SUPABASE_PROJECT_ID&envDescription=Supabase%20credentials%20for%20your%20backend&envLink=https://supabase.com/docs/guides/getting-started)

**Before deploying**, you'll need:
1. A free [Supabase](https://supabase.com) account
2. Create a new Supabase project
3. Get your project URL, anon key, and project ID from Supabase dashboard

The deploy button will:
- ✅ Clone this repository to your account
- ✅ Install all dependencies automatically
- ✅ Prompt you for your Supabase credentials
- ✅ Deploy your site live in minutes

## 🛍️ Managing Your Shop Products

Once deployed, you can manage your shop products through the admin dashboard:

1. **Login**: Go to `/auth` and login with your credentials (first user becomes admin automatically)
2. **Access Dashboard**: Navigate to `/dashboard` 
3. **Manage Products**: Click on the "Products" tab
4. **Add Products**: 
   - Click "Add Product" button
   - Fill in product details (title, price, rating, reviews, image URL, category)
   - Toggle affiliate status if needed
   - Click "Add Product" to save
5. **Edit/Delete**: Use the action buttons next to each product

**Product Categories**: Smart Tech, Toys, Grooming, Food & Treats, etc.

## 🎨 How to Edit Text & Images

### Editing Text Content

All page content is located in the `src/pages/` directory:

- **Homepage**: `src/pages/Index.tsx`
- **Shop Page**: `src/pages/Shop.tsx`
- **Blog**: `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx`
- **About**: `src/pages/About.tsx`
- **Contact**: `src/pages/Contact.tsx`

Simply open these files and edit the text within the JSX markup. For example:
```tsx
<h1>Your New Heading</h1>
<p>Your new paragraph text here</p>
```

### Changing Images

1. **Add your images** to the `src/assets/` folder
2. **Import the image** at the top of your component:
   ```tsx
   import myImage from "@/assets/my-image.jpg";
   ```
3. **Use the image** in your JSX:
   ```tsx
   <img src={myImage} alt="Description" />
   ```

**Current Images:**
- `hero-pets.jpg` - Homepage hero image
- `dog-training.jpg` - Dog training blog post
- `cat-grooming.jpg` - Cat grooming blog post
- `pet-products.jpg` - Pet products image

## 🎨 How to Change Colors & Fonts

### Changing Colors

All colors are defined using CSS variables in `src/index.css`. Edit the HSL values to match your brand:

```css
:root {
  --primary: 270 80% 65%;        /* Main brand color */
  --secondary: 340 90% 70%;      /* Accent color */
  --accent: 210 100% 50%;        /* Highlight color */
  --background: 0 0% 100%;       /* Page background */
  --foreground: 224 71% 4%;      /* Text color */
}
```

**Quick Color Changes:**
- **Primary (Purple)**: Change `--primary` value
- **Pink Accent**: Change `--secondary` value
- **Blue Links**: Change `--accent` value

### Changing Fonts

Fonts are configured in `tailwind.config.ts`:

1. **Add Google Font** to `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
   ```

2. **Update** `tailwind.config.ts`:
   ```ts
   fontFamily: {
     heading: ["Your Font", "serif"],
     body: ["Your Font", "sans-serif"],
   }
   ```

**Current Fonts:**
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## 📊 How to Connect Analytics

### Google Analytics

1. **Get your GA4 Measurement ID** from Google Analytics
2. **Add to** `index.html` in the `<head>` section:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Other Analytics Platforms

- **Plausible**: Add script tag to `index.html`
- **Fathom**: Add script tag to `index.html`
- **Microsoft Clarity**: Add script tag to `index.html`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
- Development server runs at `http://localhost:5173`
- Changes auto-reload in the browser
- TypeScript compilation errors show in terminal

## 🗂️ Project Structure

```
/src
  ├─ /assets          # Images and static files
  ├─ /components      # Reusable UI components
  ├─ /pages           # Page components (routes)
  ├─ /integrations    # Backend integrations
  ├─ /hooks           # Custom React hooks
  ├─ index.css        # Global styles & color system
  └─ main.tsx         # App entry point
```

## 🛠️ Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Blog system with categories
- ✅ Contact form with validation
- ✅ Newsletter signup
- ✅ Product showcase with affiliate links
- ✅ Social media sharing
- ✅ Dark/light mode support
- ✅ User authentication & admin dashboard
- ✅ Backend powered by Lovable Cloud

## 📝 Customization Tips

### Adding New Pages

1. Create new component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Add navigation link in `src/components/Navbar.tsx`

### Editing Navigation

Edit links in `src/components/Navbar.tsx`:
```tsx
<Link to="/your-page">Your Page</Link>
```

### Changing Logo/Brand Name

Search and replace "Pawfect Companion" across the project with your brand name.

## 🔗 Important Links

- **Lovable Documentation**: [https://docs.lovable.dev/](https://docs.lovable.dev/)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React Documentation**: [https://react.dev/](https://react.dev/)

## 📧 Support

For questions about this template:
- Review the code comments in each file
- Check Lovable documentation
- Visit Lovable Discord community

## 📄 License

This template is provided as-is for your use. Customize freely!

---

**Built with ❤️ using [Lovable](https://lovable.dev)**
