# ✨ Portfolio Company Configuration System

## 🎯 Overview

Your portfolio now supports **company-specific customization** through URL parameters. You can maintain separate links for different companies, each showing their unique name, logo, and role.

---

## 🚀 Quick Start

### Test It Now!
With your dev server running, try these URLs:

1. **Default (Udacity)**:  
   `http://localhost:3000/`

2. **Explicit Udacity**:  
   `http://localhost:3000/?company=udacity`

Both will show your Udacity-customized portfolio!

---

## 📝 Adding a New Company (3 Simple Steps)

### 1️⃣ Add Logo
Save company logo to:
```
/public/images/company_name_logo.png
```

### 2️⃣ Update Config
Edit `config/companies.ts`:
```typescript
google: {
  name: "Google",
  logo: "/images/google_logo.png",
  role: "Product Manager",
},
```

### 3️⃣ Test & Share
```
Local:    http://localhost:3000/?company=google
Deployed: https://yoursite.com/?company=google
```

---

## 📂 Files Created/Modified

### New Files
- ✅ `config/companies.ts` - Company configurations
- ✅ `hooks/useCompany.ts` - React hook for company data
- ✅ `components/Footer.tsx` - Dynamic footer
- ✅ `HOW-TO-USE.md` - Complete usage guide
- ✅ `QUICK-START.md` - Quick reference
- ✅ `README-COMPANY-SETUP.md` - Detailed documentation
- ✅ `IMPLEMENTATION-SUMMARY.md` - Technical summary

### Modified Files
- ✅ `components/Hero.tsx` - Now uses dynamic company data
- ✅ `app/page.tsx` - Added Suspense for client-side routing

---

## 🎨 What Changes Per Company?

When you visit `/?company=google` instead of `/?company=udacity`:

### Hero Section
```diff
- "I'd love to be a Product Manager at Udacity"
+ "I'd love to be a Product Manager at Google"
```

### Logo
```diff
- Shows Udacity logo
+ Shows Google logo
```

### Footer
```diff
- "Created exclusively for the Udacity Product Manager position"
+ "Created exclusively for the Google Product Manager position"
```

---

## 📋 Example Companies to Add

Ready-to-use configuration examples:

```typescript
// Tech Giants
google: { name: "Google", logo: "/images/google_logo.png", role: "Product Manager" },
apple: { name: "Apple", logo: "/images/apple_logo.png", role: "Product Manager" },
microsoft: { name: "Microsoft", logo: "/images/microsoft_logo.png", role: "Principal PM" },
meta: { name: "Meta", logo: "/images/meta_logo.png", role: "Product Manager" },
amazon: { name: "Amazon", logo: "/images/amazon_logo.png", role: "Senior PM" },

// Startups
stripe: { name: "Stripe", logo: "/images/stripe_logo.png", role: "Product Manager" },
notion: { name: "Notion", logo: "/images/notion_logo.png", role: "Product Manager" },
shopify: { name: "Shopify", logo: "/images/shopify_logo.png", role: "Product Manager" },
```

---

## 🔧 Technical Details

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **State Management**: URL search parameters
- **Client Side**: Uses `useSearchParams` hook
- **Fallback**: Defaults to Udacity if no/invalid parameter

---

## 📖 Documentation

| File | Purpose |
|------|---------|
| `HOW-TO-USE.md` | Complete usage guide with examples |
| `QUICK-START.md` | Fast reference for adding companies |
| `README-COMPANY-SETUP.md` | Detailed technical documentation |
| `IMPLEMENTATION-SUMMARY.md` | What was implemented |

---

## 🎯 Next Steps

1. **Test Current Setup**
   ```bash
   # Dev server should be running
   # Visit: http://localhost:3000/?company=udacity
   ```

2. **Add Your First New Company**
   - Find/download a company logo
   - Save to `/public/images/`
   - Add to `config/companies.ts`
   - Test locally

3. **Deploy**
   - Deploy your site (Vercel/Netlify/etc.)
   - Test the live URLs
   - Share company-specific links in applications

4. **Track Applications**
   - Create a spreadsheet with URLs
   - Track which company got which link
   - Monitor responses

---

## 💡 Pro Tips

1. **Organize Logos**: Keep a dedicated logos folder on your computer
2. **Track Everything**: Use a spreadsheet to track all company URLs
3. **Test First**: Always test locally before sharing
4. **Consistent Naming**: Use lowercase, URL-friendly company keys
5. **High Quality**: Use high-res, square logos (200x200px minimum)

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Logo not showing | Check file path in config matches actual file |
| Company name not changing | Verify URL parameter matches config key exactly |
| Shows default (Udacity) | Company key doesn't exist in config or is misspelled |
| Page stuck on "Loading..." | Refresh the page, check dev server console |

---

## ✅ Checklist

- [x] Created company configuration system
- [x] Updated Hero component with dynamic data
- [x] Created dynamic Footer component
- [x] Added Suspense boundary for client-side routing
- [x] Created comprehensive documentation
- [x] Added example company configurations
- [x] Tested with Udacity (default company)
- [ ] Add logos for other target companies
- [ ] Add other companies to config
- [ ] Test all company URLs
- [ ] Deploy to production
- [ ] Share company-specific URLs

---

## 🎉 Summary

Your portfolio is now **fully configurable** for multiple companies! You can:

✅ Maintain separate links for each company  
✅ Customize company name, logo, and role  
✅ Track applications with unique URLs  
✅ Easily add new companies in 3 steps  

**Current Status**: ✅ Working with Udacity as default  
**Ready For**: Adding any company you want  

---

## 📞 Quick Reference

### Add Company
1. Logo → `/public/images/company_logo.png`
2. Config → `config/companies.ts`
3. Test → `http://localhost:3000/?company=key`

### Share Link
```
https://your-portfolio.com/?company=google
```

### Default Company
If no `?company=` parameter or invalid key → Shows Udacity

---

**You're all set! Good luck with your applications! 🚀**

For detailed guides, see:
- 📖 `HOW-TO-USE.md` - Complete guide
- ⚡ `QUICK-START.md` - Quick reference
- 📚 `README-COMPANY-SETUP.md` - Full documentation
