# Company-Specific Portfolio Configuration

This portfolio supports company-specific customization through URL parameters, allowing you to maintain separate links for different job applications.

## How It Works

The portfolio dynamically displays different company names, logos, and roles based on the URL you share.

## Usage

### URL Format

```
https://your-portfolio-domain.com/?company=COMPANY_KEY
```

### Examples

- **Udacity**: `https://your-portfolio-domain.com/?company=udacity`
- **Google**: `https://your-portfolio-domain.com/?company=google`
- **Default** (no parameter): `https://your-portfolio-domain.com/`

## Adding a New Company

1. **Add company logo to `/public/images/`**
   - Save the logo as `company_logo.png` (e.g., `google_logo.png`)

2. **Update `/config/companies.ts`**
   ```typescript
   export const companies: Record<string, CompanyConfig> = {
     udacity: {
       name: "Udacity",
       logo: "/images/Udacity_logo.png",
       role: "Product Manager",
     },
     google: {
       name: "Google",
       logo: "/images/google_logo.png",
       role: "Senior Product Manager",
     },
     // Add more companies here
   };
   ```

3. **Share the customized URL**
   - Share `https://your-domain.com/?company=google` for Google applications
   - Share `https://your-domain.com/?company=udacity` for Udacity applications

## Company Configuration Structure

Each company entry requires:
- `name`: Company name to display (string)
- `logo`: Path to logo in `/public/images/` (string)
- `role`: Optional job title (defaults to "Product Manager")

## Default Company

If no `?company=` parameter is provided, the portfolio defaults to Udacity. You can change this in `/config/companies.ts`:

```typescript
export const defaultCompany: CompanyConfig = {
  name: "Your Company",
  logo: "/images/your_logo.png",
  role: "Product Manager",
};
```

## Best Practices

1. **Logo Images**: Use square logos (e.g., 200x200px) in PNG format with transparent backgrounds
2. **Company Keys**: Use lowercase, URL-friendly strings (e.g., `meta`, `amazon`, `microsoft`)
3. **Role Titles**: Keep role titles concise and professional
4. **Testing**: Always test new company configurations before sharing the link

## Link Management

Create a spreadsheet or document to track your application links:

| Company | URL | Status |
|---------|-----|--------|
| Udacity | `https://yoursite.com/?company=udacity` | Applied |
| Google | `https://yoursite.com/?company=google` | Pending |

## Advanced: Multiple Roles

If applying for different roles at the same company, create separate entries:

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
```

Then use: `?company=google_pm` or `?company=google_spm`

## Troubleshooting

- **Logo not showing**: Verify the image exists in `/public/images/` and the path in config is correct
- **Company not changing**: Check that the company key in the URL matches exactly (case-sensitive) with the key in `companies.ts`
- **Default company showing**: The company key might not exist in the configuration, or URL parameter is misspelled

