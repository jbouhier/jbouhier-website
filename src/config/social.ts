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
    href: 'https://x.com/jb_notacat',
    Icon: FaXTwitter,
    className: 'w-7 h-7',
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/jbouhier.com',
    Icon: FaBluesky,
    className: 'w-7 h-7',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@jb-notacat',
    Icon: FaYoutube,
    className: 'w-9 h-9',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jbbouhier',
    Icon: FaLinkedin,
    className: 'w-7 h-7',
  },
] as const;
