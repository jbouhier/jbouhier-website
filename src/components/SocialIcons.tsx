import { socialLinks } from '@/config';

export const SocialIcons = () => {
  return (
    <div className="flex gap-6 justify-center">
      {socialLinks.map(({ name, href, Icon, className }) => {
        if (!Icon) return null;
        
        return (
          <a 
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden transition-all duration-200 ease-out
              flex items-center justify-center w-12 h-12 rounded-full
              bg-gradient-to-br from-surface-50 to-surface-100 dark:from-surface-800/50 dark:to-surface-900/50
              hover:from-primary-100/50 hover:to-primary-200/40 dark:hover:from-primary-900/50 dark:hover:to-primary-800/40
              hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-offset-2 hover:ring-primary-300/50 dark:hover:ring-primary-700/50
              text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-300
              active:scale-95`}
            aria-label={name}
            title={name}
          >
            <span className="sr-only">{name}</span>
            <Icon 
              className={className}
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
