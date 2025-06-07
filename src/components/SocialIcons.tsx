import type { FC } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

export type SocialIcon = {
  name: string;
  href: string;
  icon: 'x' | 'bluesky' | 'youtube' | 'linkedin';
  color: string;
  title: string;
};

export const iconMap = {
  'x': FaXTwitter,
  'bluesky': FaBluesky,
  'youtube': FaYoutube,
  'linkedin': FaLinkedin,
} as const;

// Define hover colors for each icon
const iconHoverColors = {
  'x': '#1DA1F2', // Twitter/X blue
  'bluesky': '#4A90E2', // Bluesky blue
  'youtube': '#FF0000', // YouTube red
  'linkedin': '#0077B5', // LinkedIn blue
} as const;

interface SocialIconsProps {
  icons: SocialIcon[];
}

export const SocialIcons: FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className="flex gap-6">
      {icons.map(({ name, href, icon, color, title }) => {
        const IconComponent = iconMap[icon];
        if (!IconComponent) return null;
        
        return (
          <a 
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 ease-in-out flex items-center justify-center w-12 h-12 rounded-full hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-primary-500 ${color} md:hover:bg-opacity-20 md:hover:scale-110 md:active:scale-95`}
            aria-label={title || name}
            title={title}
          >
            <span className="sr-only">{title || name}</span>
            <IconComponent 
              className={`transition-colors duration-300 ${icon === 'youtube' ? 'w-9 h-9' : 'w-7 h-7'}`}
              style={{ 
                color: color,
                transition: 'color 0.3s ease-in-out',
                backgroundColor: 'transparent'
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
