# Product Requirements Document (PRD)
**Project Name:** LuxeScents  
**Version:** 1.1  
**Date:** 10 August 2025  
**Prepared by:** Anuj Kumar

## 1. Overview

LuxeScents is an e-commerce platform for luxury fragrances targeting both high-end and budget-conscious buyers. The platform will offer premium perfumes at competitive prices, limited-time deals, and AI-powered scent recommendations. It will also cater to gift buyers through a gift registry and subscription service.

This project will be deployed on Railway for scalable and fast hosting, ensuring minimal downtime and efficient global delivery.

## 2. Goals & Objectives

- Provide a modern, elegant, and mobile-first shopping experience for luxury fragrances.
- Offer personalized AI fragrance recommendations to enhance product discovery.
- Attract both premium buyers and deal-seekers through discounts and exclusive offers.
- Enable easy gift shopping via a public gift registry and subscription options.
- Ensure scalable, secure, and optimized deployment on Railway.

## 3. Target Audience

- **Luxury fragrance lovers** seeking authentic, high-quality scents.
- **Budget-conscious perfume buyers** looking for discounted premium products.
- **Gift buyers** searching for high-end fragrances at lower prices.

## 4. Key Features

### 4.1 Homepage
- Hero banner showcasing top discounted luxury perfumes.
- Quick links to:
  - Limited-Time Deals
  - New Arrivals
  - Gift Ideas
- Featured product cards with images, prices, and discount badges.

### 4.2 Shop Page
- **Filters:** Brand, scent family, price range, rating.
- **Sort:** Best-sellers, newest, biggest discounts.
- Grid layout with product images, prices, and discount indicators.

### 4.3 Product Detail Page
- Large product imagery with zoom feature.
- Detailed description including notes, longevity, projection.
- Customer reviews & ratings.
- Add to Cart, Add to Wishlist, and Add to Gift Registry.

### 4.4 Deals Page
- Dedicated section for limited-time offers and flash sales.
- Countdown timers to create urgency.

### 4.5 Wishlist & Gift Registry
- Save favorite scents for later.
- Public registry link for sharing with friends/family.

### 4.6 Subscription Service
- Monthly fragrance delivery at a discounted rate.
- User can set fragrance preferences.

### 4.7 AI Fragrance Recommender
- Quiz-based + AI-powered recommendations.
- Suggests products currently on sale.

### 4.8 Cart & Checkout
- Guest checkout + account-based checkout.
- **Multiple payment methods:**
  - Credit/Debit Card
  - PayPal
  - Stripe (future integration)
- Order confirmation page + confirmation email.

### 4.9 Account Dashboard
- View orders, subscriptions, wishlist.
- Manage shipping + payment details.

## 5. Tech Stack

### Frontend:
- **Vite + TypeScript**
- **React + shadcn/ui**
- **Tailwind CSS**

### Backend & Storage:
- **Supabase** (database, authentication, file storage)

### Authentication:
- Email/password login
- Google OAuth (optional)

### Hosting & Deployment:
- **Railway** for backend + frontend hosting
- Automatic deployments via GitHub integration
- Environment variable management in Railway Dashboard
- Railway PostgreSQL for production database (if not using Supabase DB)
- CDN caching for static assets

## 6. Design Specifications

### Font:
- **Inter**

### Colors:
- **Primary:** Light Blue (#A7C7E7)
- **Accent:** Dark Pastel Green (#77966D)
- **Background:** White with soft grays

### Layout:
- Mobile-first, card-based, modern UI
- Generous whitespace, clean typography

## 7. Success Metrics

- **Conversion Rate:** % of visitors completing purchases.
- **Average Order Value (AOV):** Increased through upsells and subscriptions.
- **Return Rate:** Percentage of returning customers.
- **Engagement Rate:** Wishlist and registry usage.
- **Deployment Stability:** Uptime > 99.9% on Railway.

## 8. Timeline & Phases

### Phase 1 (MVP) – 8–10 weeks
- Core pages: Homepage, Shop, Product Detail, Deals, Cart/Checkout
- Wishlist & Gift Registry
- Basic AI Recommendation Quiz
- Railway setup for backend + frontend

### Phase 2 (Enhancements) – 4–6 weeks
- Subscription Service
- Google OAuth Login
- Advanced AI Recommendations

### Phase 3 (Growth) – Ongoing
- Mobile app development
- Loyalty program integration

## 9. Risks & Dependencies

### Risks:
- **Authenticity of luxury fragrances** – must ensure verified suppliers.
- **AI recommendations** may need constant fine-tuning for accuracy.

### Dependencies:
- Railway performance scaling for high-traffic events (flash sales).

## 10. Appendix

- **Competitor Inspiration:** FragranceNet, Sephora, Notino.
- **Design References:** Minimalist luxury e-commerce templates.
- **Railway Docs:** https://docs.railway.app
