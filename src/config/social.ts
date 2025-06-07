import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaFeather } from "react-icons/fa6";
import type { IconType } from "react-icons";

export type SocialPlatform = 'x' | 'bluesky' | 'youtube' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  title: string;
  url: string;
  icon: string;
}

// Social links with string icon names for Astro components
export const socialLinks = [
  {
    platform: 'x',
    title: 'X',
    url: 'https://x.com/jb_notacat',
    icon: 'x',
    color: '#1f2937', // surface.dark from Tailwind config
  },
  {
    platform: 'bluesky',
    title: 'Bluesky',
    url: 'https://bsky.app/profile/jb-notacat.bsky.social',
    icon: 'bluesky',
    color: '#1f2937', // surface.dark from Tailwind config
  },
  {
    platform: 'youtube',
    title: 'YouTube',
    url: 'https://www.youtube.com/@jb-notacat',
    icon: 'youtube',
    color: '#1f2937', // surface.dark from Tailwind config
  },
  {
    platform: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jb-notacat',
    icon: 'linkedin',
    color: '#1f2937', // surface.dark from Tailwind config
  },
] as const;
