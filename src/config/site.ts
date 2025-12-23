export const site = {
  title: "JB Bouhier",
  description: "Building startups",
  url: process.env.SITE_URL || 'https://jbouhier.com',
} as const;

export const author = {
  firstName: "JB",
  lastName: "Bouhier",
} as const;

export const company = {
  name: "Not a cat ventures",
  url: "https://notacatventures.com",
} as const;
