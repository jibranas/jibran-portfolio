# 🎯 Portfolio Company Configuration - Complete Guide

## What Did We Build?

You can now maintain **separate portfolio links for each company** you apply to. Each link displays:
- ✅ Company-specific name
- ✅ Company-specific logo  
- ✅ Company-specific role title
- ✅ Personalized footer message

## Current Status

✅ **Default Company**: Udacity  
✅ **Ready to Add**: Any company you want

---

## 📖 Quick Usage Guide

### Current Working URL (Udacity)
```
http://localhost:3000/?company=udacity
```
or simply:
```
http://localhost:3000/
```

### When You Deploy
```
https://your-portfolio-domain.com/?company=udacity
```

---

## 🚀 Adding a New Company (Step by Step)

### Step 1: Get the Company Logo
1. Find/download the company's logo
2. Make sure it's:
   - **Format**: PNG (preferably with transparent background)
   - **Size**: Square ratio, at least 200x200px
   - **Quality**: High resolution

### Step 2: Save the Logo
Save it in your project:
```
/public/images/company_logo.png
```

Example:
```
/public/images/google_logo.png
/public/images/amazon_logo.png
/public/images/meta_logo.png
```

### Step 3: Add Configuration
Open `config/companies.ts` and add your company:

```typescript
export const companies: Record<string, CompanyConfig> = {
  udacity: {
    name: "Udacity",
    logo: "/images/Udacity_logo.png",
    role: "Product Manager",
  },
  
  // Add new company here 👇
  google: {
    name: "Google",
    logo: "/images/google_logo.png",
    role: "Product Manager",
  },
  
  amazon: {
    name: "Amazon",
    logo: "/images/amazon_logo.png",
    role: "Senior Product Manager",
  },
};
```

### Step 4: Test It
```bash
# If dev server isn't running:
npm run dev

# Visit in browser:
http://localhost:3000/?company=google
http://localhost:3000/?company=amazon
```

### Step 5: Deploy & Share
After deploying, share the company-specific URLs:
```
https://yoursite.com/?company=google    → for Google
https://yoursite.com/?company=amazon    → for Amazon
https://yoursite.com/?company=udacity   → for Udacity
```

---

## 📊 Tracking Your Applications

Create a simple spreadsheet to track your links:

| Company | URL | Date Sent | Status |
|---------|-----|-----------|--------|
| Udacity | `https://yoursite.com/?company=udacity` | Jan 3, 2026 | Applied |
| Google | `https://yoursite.com/?company=google` | Jan 5, 2026 | Pending |
| Amazon | `https://yoursite.com/?company=amazon` | Jan 6, 2026 | Draft |

---

## 🎨 What Changes on Each URL?

### Hero Section
```
Before: "I'd love to be a Product Manager at Udacity 🎓"
After:  "I'd love to be a Product Manager at Google 🔍"
```

### Footer
```
Before: "Created exclusively for the Udacity Product Manager position"
After:  "Created exclusively for the Google Product Manager position"
```

---

## 💡 Advanced: Multiple Roles at Same Company

Want to apply for different roles at the same company? Create separate entries:

```typescript
google_pm: {
  name: "Google",
  logo: "/images/google_logo.png",
  role: "Product Manager",
},

google_spm: {
  name: "Google",
  logo: "/images/google_logo.png",
  role: "Senior Product Manager",
},

google_apm: {
  name: "Google",
  logo: "/images/google_logo.png",
  role: "Associate Product Manager",
},
```

Then use different URLs:
```
/?company=google_pm   → Product Manager role
/?company=google_spm  → Senior Product Manager role
/?company=google_apm  → Associate Product Manager role
```

---

## 🔍 Example: Real Companies

Here are some ready-to-use configurations:

```typescript
// Tech Giants
google: {
  name: "Google",
  logo: "/images/google_logo.png",
  role: "Product Manager",
},

apple: {
  name: "Apple",
  logo: "/images/apple_logo.png",
  role: "Product Manager",
},

microsoft: {
  name: "Microsoft",
  logo: "/images/microsoft_logo.png",
  role: "Principal Product Manager",
},

meta: {
  name: "Meta",
  logo: "/images/meta_logo.png",
  role: "Product Manager",
},

amazon: {
  name: "Amazon",
  logo: "/images/amazon_logo.png",
  role: "Senior Product Manager",
},

// Startups
stripe: {
  name: "Stripe",
  logo: "/images/stripe_logo.png",
  role: "Product Manager",
},

notion: {
  name: "Notion",
  logo: "/images/notion_logo.png",
  role: "Product Manager",
},

shopify: {
  name: "Shopify",
  logo: "/images/shopify_logo.png",
  role: "Product Manager",
},

// Enterprise
salesforce: {
  name: "Salesforce",
  logo: "/images/salesforce_logo.png",
  role: "Product Manager",
},

adobe: {
  name: "Adobe",
  logo: "/images/adobe_logo.png",
  role: "Senior Product Manager",
},
```

---

## 🐛 Common Issues & Solutions

### Issue: Logo Doesn't Show
**Problem**: You see a broken image or no logo  
**Solution**: 
1. Check the file exists in `/public/images/`
2. Verify the path in `companies.ts` matches exactly
3. Check the file extension (`.png`, `.jpg`, etc.)

### Issue: Company Name Doesn't Change
**Problem**: Still shows "Udacity" for all URLs  
**Solution**:
1. Check your URL has `?company=` parameter
2. Verify the company key matches exactly (case-sensitive!)
3. Confirm the company exists in `config/companies.ts`

### Issue: Page Shows "Loading..."
**Problem**: Page stuck on loading screen  
**Solution**: This might be a dev server issue, refresh the page

---

## 🎯 Best Practices

1. **Logo Quality**: Use high-res, square logos (200x200px minimum)
2. **Naming**: Use lowercase, URL-friendly keys (`google`, not `Google Inc.`)
3. **Testing**: Always test locally before sharing with recruiters
4. **Tracking**: Keep a spreadsheet of which URLs you've sent where
5. **Consistency**: Use consistent role titles across similar positions
6. **Backup**: Keep all logos organized in your images folder

---

## 📁 File Structure

```
portfolio/
├── config/
│   └── companies.ts          ← Add companies here
├── hooks/
│   └── useCompany.ts          ← Hook to get company data
├── components/
│   ├── Hero.tsx               ← Shows company name/logo
│   └── Footer.tsx             ← Shows company in footer
├── public/
│   └── images/
│       ├── Udacity_logo.png   ← Current logo
│       ├── google_logo.png    ← Add more logos here
│       └── amazon_logo.png
└── app/
    └── page.tsx               ← Main page (updated)
```

---

## 🎉 You're Ready!

Your portfolio is now fully configured for multi-company applications. Here's what to do next:

1. ✅ Test the current Udacity setup: `http://localhost:3000/?company=udacity`
2. 📸 Find logos for companies you're targeting
3. ⚙️ Add those companies to `config/companies.ts`
4. 🧪 Test each company URL locally
5. 🚀 Deploy your portfolio
6. 📤 Share company-specific URLs in your applications

**Questions?** Check:
- `IMPLEMENTATION-SUMMARY.md` - Technical overview
- `README-COMPANY-SETUP.md` - Detailed setup guide
- `QUICK-START.md` - Quick reference

Good luck with your applications! 🚀

