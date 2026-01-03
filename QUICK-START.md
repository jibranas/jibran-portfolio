# Quick Start: Adding a New Company

This is a quick reference for adding new companies to your portfolio.

## Steps to Add a Company

### 1. Get the Company Logo
- Find a high-quality logo (preferably square, PNG with transparent background)
- Recommended size: 200x200px or larger
- Save it in `/public/images/` as `company_logo.png`

### 2. Update Configuration
Open `config/companies.ts` and add your company:

```typescript
export const companies: Record<string, CompanyConfig> = {
  udacity: {
    name: "Udacity",
    logo: "/images/Udacity_logo.png",
    role: "Product Manager",
  },
  // Add your new company here:
  google: {
    name: "Google",
    logo: "/images/google_logo.png",
    role: "Product Manager",  // Customize the role
  },
};
```

### 3. Test Your Configuration
- Start the development server: `npm run dev`
- Visit: `http://localhost:3000/?company=google`
- Verify the company name, logo, and role appear correctly

### 4. Share Your Link
Once deployed, share the company-specific URL:
```
https://your-portfolio-domain.com/?company=google
```

## Example Companies

```typescript
// Tech Giants
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

meta: {
  name: "Meta",
  logo: "/images/meta_logo.png",
  role: "Product Manager",
},

microsoft: {
  name: "Microsoft",
  logo: "/images/microsoft_logo.png",
  role: "Principal Product Manager",
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

// Enterprise
salesforce: {
  name: "Salesforce",
  logo: "/images/salesforce_logo.png",
  role: "Product Manager",
},

oracle: {
  name: "Oracle",
  logo: "/images/oracle_logo.png",
  role: "Senior Product Manager",
},
```

## Tips

1. **Company Key**: Use lowercase, no spaces (e.g., `jpmorgan` not `JP Morgan`)
2. **Logo Format**: PNG with transparent background works best
3. **Logo Placement**: Always save logos in `/public/images/`
4. **Testing**: Always test locally before sharing the link
5. **Tracking**: Keep a spreadsheet of which URLs you've sent to which companies

## URL Examples

- Udacity: `https://yoursite.com/?company=udacity`
- Google: `https://yoursite.com/?company=google`
- Amazon: `https://yoursite.com/?company=amazon`
- Meta: `https://yoursite.com/?company=meta`

## Troubleshooting

**Problem**: Logo doesn't show
- **Solution**: Check the file path in config matches the actual file location

**Problem**: Company name doesn't change
- **Solution**: Make sure the company key in the URL matches the key in `companies.ts` exactly (case matters!)

**Problem**: Shows default company (Udacity)
- **Solution**: The company key doesn't exist in your config, double-check spelling

## Need Help?

Check the full documentation in `README-COMPANY-SETUP.md`

