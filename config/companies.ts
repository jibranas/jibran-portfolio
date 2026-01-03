export interface CompanyConfig {
  name: string;
  logo: string;
  role?: string;
}

export const companies: Record<string, CompanyConfig> = {
  udacity: {
    name: "Udacity",
    logo: "/images/Udacity_logo.png",
    role: "Product Manager",
  },
  // Add more companies below as you apply to them
  // 
  // Example entries (uncomment and customize):
  coursera: {
    name: "Coursera",
    logo: "/images/Coursera_logo.png",
    role: "Product Manager",
  },
  // google: {
  //   name: "Google",
  //   logo: "/images/google_logo.png",
  //   role: "Product Manager",
  // },
  // amazon: {
  //   name: "Amazon",
  //   logo: "/images/amazon_logo.png",
  //   role: "Senior Product Manager",
  // },
  // meta: {
  //   name: "Meta",
  //   logo: "/images/meta_logo.png",
  //   role: "Product Manager",
  // },
  // microsoft: {
  //   name: "Microsoft",
  //   logo: "/images/microsoft_logo.png",
  //   role: "Principal Product Manager",
  // },
  // apple: {
  //   name: "Apple",
  //   logo: "/images/apple_logo.png",
  //   role: "Product Manager",
  // },
};

export const defaultCompany: CompanyConfig | null = null;

export function getCompanyConfig(companyKey?: string | null): CompanyConfig | null {
  if (!companyKey) return defaultCompany;
  return companies[companyKey.toLowerCase()] || defaultCompany;
}

