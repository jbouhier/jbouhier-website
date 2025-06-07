import React from 'react';
import { SocialIcons as BaseSocialIcons } from './SocialIcons';
import type { SocialIcon } from './SocialIcons';

interface ClientSocialIconsProps {
  icons: SocialIcon[];
}

export const ClientSocialIcons: React.FC<ClientSocialIconsProps> = ({ icons }) => {
  return <BaseSocialIcons icons={icons} />;
};
