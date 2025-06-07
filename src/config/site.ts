export const siteConfig = {
  title: "JB | Builds startups",
  description: "I build and grow bootstrapped SaaS products. Follow my journey as I share insights and lessons learned.",
  baseUrl: process.env.SITE_URL || 'https://jbouhier.com',
} as const;

export const author = {
  firstName: "JB",
  lastName: "Bouhier",
  subtitle: "Building bootstrapped SaaS products",
} as const;
