import type { ElementType, PropsWithChildren } from 'react';

export interface LinkProps extends PropsWithChildren {
  tag?: ElementType;
  className?: string;
  href?: string;
}