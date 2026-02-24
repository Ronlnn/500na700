import type { ElementType, PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
  tag?: ElementType;
  className?: string;
}
