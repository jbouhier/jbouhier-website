export const siteConfig = {
  // Site identity
  name: "JB",
  title: "JB | Building Bootstrapped SaaS Products",
  description: "I build and grow bootstrapped SaaS products. Follow my journey as I share insights and lessons learned.",
  
  // Site URL configuration
  baseUrl: process.env.SITE_URL || 'https://jbouhier.com',
  
  // Author information
  author: {
    name: "JB",
    twitter: "@jb_notacat",
  },
  
  // SEO & Metadata
  defaultImage: "/social-preview.jpg",
  themeColor: "#FAD1C4",
  locale: "en-US",
  
  // Social links (moved to social.ts, keeping this for backward compatibility)
  links: {
    github: "https://github.com/jbouhier",
  },
} as const;

export type SiteConfig = typeof siteConfig;
