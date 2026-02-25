import type { SVGProps } from 'react';

export type LogoVariant = 'primary' | 'secondary';

export interface LogoBaseProps extends SVGProps<SVGSVGElement> {
  className?: string;
  'aria-label'?: string;
}

export interface LogoProps extends LogoBaseProps {
  variant?: LogoVariant;
}
