import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"
import type { IconType } from "react-icons"
import { FaFeather } from "react-icons/fa6"

export interface SiteConfig {
  name: string;
  description: string;
  baseUrl: string;
}

export interface Product {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface SocialLink {
  title: string;
  url: string;
  icon: string;
}

// Create a mapping of icon names to their components
const iconMap: Record<string, IconType> = {
  'FaTwitter': FaTwitter,
  'FaFeather': FaFeather,
  'FaYoutube': FaYoutube,
  'FaLinkedin': FaLinkedin
};

export const socialLinks: SocialLink[] = [
  {
    title: 'X',
    url: 'https://x.com/jb_notacat',
    icon: 'FaTwitter'
  },
  {
    title: 'Bluesky',
    url: 'https://bsky.app/profile/jb-notacat.bsky.social',
    icon: 'FaFeather'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/@jb-notacat',
    icon: 'FaYoutube'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jbbouhier/',
    icon: 'FaLinkedin'
  }
];

// Export the icon map for use in other components
export { iconMap };

export const siteConfig: SiteConfig = {
  name: 'JB Bouhier',
  description: 'Bootstrapping SaaS products',
  baseUrl: 'https://jbouhier.com'
};

export const products: Product[] = [
  {
    title: 'StripeBoost',
    description: 'Streamline Stripe operations',
    image: 'stripeboost.ico',
    url: 'https://stripeboost.com/',
  },
];
