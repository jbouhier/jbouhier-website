export type SocialPlatform = 'x' | 'bluesky' | 'youtube' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  title: string;
  url: string;
  icon: string;
}

const iconColor = '#1f2937';

export const socialLinks = [
  {
    platform: 'x',
    title: 'X',
    url: 'https://x.com/jb_notacat',
    icon: 'x',
    color: iconColor,
  },
  {
    platform: 'bluesky',
    title: 'Bluesky',
    url: 'https://bsky.app/profile/jb-notacat.bsky.social',
    icon: 'bluesky',
    color: iconColor,
  },
  {
    platform: 'youtube',
    title: 'YouTube',
    url: 'https://www.youtube.com/@jb-notacat',
    icon: 'youtube',
    color: iconColor,
  },
  {
    platform: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jbbouhier',
    icon: 'linkedin',
    color: iconColor,
  },
] as const;
