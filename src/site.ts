export const SITE = {
  title: "JB Bouhier",
  description: "Software Engineer & Founder",
};

export interface SocialLink {
  title: string;
  url: string;
  iconName: string;
}

export const socialLinks: SocialLink[] = [
  {
    title: "X",
    url: "https://x.com/jb_notacat",
    iconName: "fa6-brands:x-twitter",
  },
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/jb-notacat.bsky.social",
    iconName: "fa6-brands:bluesky", 
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@jb-notacat",
    iconName: "fa6-brands:youtube",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/jbbouhier/",
    iconName: "fa6-brands:linkedin-in",
  },
  {
    title: "GitHub",
    url: "https://github.com/jbouhier",
    iconName: "fa6-brands:github",
  },
];
