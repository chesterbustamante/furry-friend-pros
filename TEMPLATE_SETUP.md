# PawfectCompanion - Pet Care Website Template

A fully-functional, SEO-optimized pet care website with affiliate marketing features, blog system, and admin analytics dashboard.

## 🚀 Quick Setup (3 Minutes)

### 1. First User Gets Admin Access
The **first user to sign up automatically becomes the admin**. This user gets full access to:
- Real analytics dashboard at `/dashboard`
- All admin features

All subsequent users get standard "user" role and cannot access the admin dashboard.

### 2. Sign Up Your Admin Account
1. Navigate to `/auth`
2. Click "Sign Up" tab
3. Enter your admin credentials
4. You're now the admin! 🎉

### 3. Test the Template
- **Public Demo Dashboard**: `/demo` - Shows mock data to buyers (SEO blocked)
- **Real Admin Dashboard**: `/dashboard` - Protected, shows real metrics (admin only)
- **Blog System**: Full CRUD capability for pet care articles
- **Shop**: Affiliate product showcase with commission tracking
- **Newsletter**: PawMail signup integration ready

## 🎯 What's Included

### ✅ Authentication System
- Email/password authentication
- Auto-confirm emails enabled (no email verification needed for testing)
- Role-based access control (admin, user)
- Protected routes with role checking

### ✅ Dual Dashboard System
1. **Demo Dashboard** (`/demo`)
   - Public access
   - Mock/sample data
   - SEO blocked (noindex, nofollow)
   - Perfect for marketing and showcasing

2. **Admin Dashboard** (`/dashboard`)
   - Admin-only access
   - Real analytics and metrics
   - Traffic, clicks, conversions tracking
   - Revenue estimates

### ✅ Content Features
- Blog system with categories (Dog Training, Cat Care, Nutrition, Product Reviews)
- Social sharing buttons
- Newsletter signup (PawMail)
- Affiliate product cards with CTA buttons
- Contact form

### ✅ SEO Optimized
- Meta tags configured
- Semantic HTML structure
- Mobile-responsive design
- Clean URLs

## 🛠️ Technical Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Lovable Cloud (Supabase)
- **Database**: PostgreSQL with Row Level Security
- **Auth**: Lovable Cloud Authentication
- **Charts**: Recharts

## 📊 Database Schema

### Tables
- `profiles` - User profile information
- `user_roles` - Role-based access control (admin, moderator, user)

### Security
- Row Level Security (RLS) enabled on all tables
- First user auto-assigned admin role
- Secure authentication with JWT tokens

## 🔐 Admin Access

The first user to sign up gets admin privileges automatically. This is perfect for:
1. **Development/Testing**: You become admin immediately
2. **Buyers**: They become admin when they first set up the template
3. **Production**: First real user gets admin control

### How to Make Another User Admin
Access the backend and insert a row into `user_roles`:
```sql
INSERT INTO user_roles (user_id, role)
VALUES ('user-uuid-here', 'admin');
```

## 🎨 Customization

### Colors & Branding
Edit `src/index.css` and `tailwind.config.ts` to customize:
- Primary color (default: warm coral)
- Secondary color (default: soft blue)
- Accent color (default: playful purple)
- Font families
- Border radius

### Content
- Blog posts: Edit `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx`
- Products: Edit `src/pages/Shop.tsx`
- Analytics data: Edit `src/pages/Dashboard.tsx`

### Images
Replace images in `src/assets/`:
- `hero-pets.jpg`
- `dog-training.jpg`
- `cat-grooming.jpg`
- `pet-products.jpg`

## 📦 Deployment

The template is ready to deploy as-is:
1. Click "Publish" in Lovable
2. Your site goes live with working authentication and database
3. Sign up to become admin
4. Start customizing!

## 🔗 Routes

### Public Routes
- `/` - Homepage
- `/shop` - Pet Gear Shop
- `/blog` - Blog listing
- `/blog/:id` - Individual blog posts
- `/about` - About page
- `/contact` - Contact form
- `/demo` - Demo dashboard (mock data, SEO blocked)
- `/auth` - Sign in/Sign up

### Protected Routes
- `/dashboard` - Admin dashboard (requires admin role)

## 💡 Marketing Strategy

This template is **ready to sell** because it includes:

1. **Demo Dashboard** - Buyers see exactly what they're getting
2. **Real Functionality** - Not just a static template
3. **Admin Protection** - Secure and production-ready
4. **Monetization Ready** - Affiliate links, newsletter, analytics built-in
5. **Professional Design** - Modern, clean, trustworthy aesthetic

## 📝 License & Support

This template includes:
- Full source code access
- Backend infrastructure (Lovable Cloud)
- All UI components (shadcn/ui)
- Authentication system
- Database with RLS

Perfect for:
- Pet bloggers
- Affiliate marketers
- Pet product reviewers
- Pet care professionals

---

**Need Help?** Check the backend dashboard for database management, or refer to Lovable documentation at https://docs.lovable.dev
