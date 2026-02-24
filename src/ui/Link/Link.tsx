import { forwardRef } from 'react';
import type { LinkProps } from './Link.types';
import styles from './Link.module.scss';

const joinClasses = (...classes: Array<string | undefined | false>): string => {
  return classes.filter(Boolean).join(' ');
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ tag: Tag = 'a', className, children, href = '#', ...props }, ref) => {
    const linkClass = joinClasses(styles.link, className);

    return (
      <Tag ref={ref} className={linkClass} href={href} {...props}>
        {children}
      </Tag>
    );
  },
);

Link.displayName = 'Link';

export default Link;
