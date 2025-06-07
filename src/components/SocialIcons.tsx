import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import { socialLinks } from '@/config';

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

const socialIcons: SocialIcon[] = socialLinks.map(link => ({
  name: link.title,
  href: link.url,
  icon: link.icon as 'x' | 'bluesky' | 'youtube' | 'linkedin',
  color: link.color,
  title: link.title
}));

export const SocialIcons = () => {
  return (
    <div className="flex gap-6 justify-center">
      {socialIcons.map(({ name, href, icon, color, title }) => {
        const IconComponent = iconMap[icon];
        if (!IconComponent) return null;
        
        return (
          <a 
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden transition-all duration-200 ease-out
              flex items-center justify-center w-12 h-12 rounded-full
              bg-gradient-to-br from-primary-50/30 to-primary-100/20
              hover:from-primary-100/50 hover:to-primary-200/40
              hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-offset-2 hover:ring-primary-300/50
              text-primary-700 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200
              ${color} active:scale-95`}
            aria-label={title || name}
            title={title}
          >
            <span className="sr-only">{title || name}</span>
            <IconComponent 
              className={`${icon === 'youtube' ? 'w-9 h-9' : 'w-7 h-7'}`}
              style={{ 
                color: 'currentColor',
                transition: 'color 0.2s ease-out, transform 0.2s ease-out',
                backgroundColor: 'transparent',
                willChange: 'transform, color'
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
