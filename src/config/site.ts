export const site = {
  title: "JB Bouhier",
  description: "Shipping startups that go mrrrrp",
  url: process.env.SITE_URL || 'https://jbouhier.com',
} as const;

export const author = {
  firstName: "JB",
  lastName: "Bouhier",
} as const;

export const company = {
  name: "Not a cat",
  tagline: "Shipping startups that go mrrrrp",
  url: "https://notacat.co",
} as const;
