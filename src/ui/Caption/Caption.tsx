import { forwardRef } from 'react';
import type { CaptionProps } from './Caption.types';
import styles from './Caption.module.scss';

const joinClasses = (...classes: Array<string | undefined | false>): string => {
  return classes.filter(Boolean).join(' ');
};

const Caption = forwardRef<HTMLElement, CaptionProps>(
  ({ tag: Tag = 'span', className, children, ...props }, ref) => {
    const captionClass = joinClasses(styles.caption, className);

    return (
      <Tag ref={ref} className={captionClass} {...props}>
        {children}
      </Tag>
    );
  },
);

Caption.displayName = 'Caption';

export default Caption;
