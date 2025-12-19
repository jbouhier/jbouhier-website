export const site = {
  title: "JB Bouhier",
  description: "Building startups",
  url: process.env.SITE_URL || 'https://jbouhier.com',
} as const;

export const author = {
  firstName: "JB",
  lastName: "Bouhier",
  subtitle: "Building startups",
} as const;
