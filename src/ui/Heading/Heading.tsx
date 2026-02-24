import { forwardRef } from 'react';
import type { HeadingProps } from './Heading.types';
import styles from './Heading.module.scss';

const styleMap: Record<string, string | undefined> = {
  h1: styles.mainTitle,
  h2: styles.title,
  h3: styles.subtitle,
  h4: styles.smallTitle,
};

const joinClasses = (...classes: Array<string | undefined | false>): string => {
  return classes.filter(Boolean).join(' ');
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ tag: Tag = 'h2', className, children, ...props }, ref) => {
    const tagKey = typeof Tag === 'string' ? Tag.toLowerCase() : '';
    const baseClass = styleMap[tagKey];
    const additionalClass = className
      ? styles[className as keyof typeof styles] || className
      : undefined;
    const headingClass = joinClasses(baseClass, additionalClass);

    return (
      <Tag
        ref={ref}
        className={headingClass}
        {...(tagKey === 'h1' && { 'data-testid': 'main-title' })}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';

export default Heading;
