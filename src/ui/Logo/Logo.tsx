import React from 'react';
import { LogoPrimary } from './LogoPrimary';
import { LogoSecondary } from './LogoSecondary';
import type { LogoProps, LogoVariant, LogoBaseProps } from './Logo.types';

const LOGO_COMPONENTS: Record<LogoVariant, React.FC<LogoBaseProps>> = {
  primary: LogoPrimary,
  secondary: LogoSecondary,
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'primary',
  className,
  ...props
}) => {
  const SelectedLogoComponent = LOGO_COMPONENTS[variant];
  return <SelectedLogoComponent className={className} {...props} />;
};

export default Logo;
