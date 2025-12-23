import type { IconType } from "react-icons";
import { FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";

export interface SocialLink {
  name: string;
  href: string;
  Icon: IconType;
  className?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'X',
    href: 'https://x.com/jb_bouhier',
    Icon: FaXTwitter,
    className: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/jbouhier.com',
    Icon: FaBluesky,
    className: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@jb-bouhier',
    Icon: FaYoutube,
    className: 'w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jbbouhier',
    Icon: FaLinkedin,
    className: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
  },
] as const;
