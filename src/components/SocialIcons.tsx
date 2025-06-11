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
            className={`group relative overflow-hidden transition-all duration-300 ease-out
              flex items-center justify-center w-14 h-14 rounded-2xl
              bg-white/10 dark:bg-black/20 backdrop-blur-lg
              border border-white/20 dark:border-white/10
              shadow-lg shadow-black/10 dark:shadow-black/30
              hover:bg-white/20 dark:hover:bg-black/30
              hover:shadow-xl hover:shadow-primary-400/10 dark:hover:shadow-primary-700/20
              hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-white/20
              text-surface-600 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-300
              active:scale-95`}
            aria-label={name}
            title={name}
          >
            <span className="sr-only">{name}</span>
            <Icon 
              className={className}
              style={{ 
                color: 'currentColor',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: 'transparent',
                willChange: 'transform, color, filter',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
