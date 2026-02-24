import type { ElementType, PropsWithChildren } from 'react';

export interface CaptionProps extends PropsWithChildren {
  tag?: ElementType;
  className?: string;
}
