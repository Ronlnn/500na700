import { forwardRef } from 'react';
import type { TextProps } from './Text.types';
import styles from './Text.module.scss';

const joinClasses = (...classes: Array<string | undefined | false>): string => {
  return classes.filter(Boolean).join(' ');
};

const Text = forwardRef<HTMLElement, TextProps>(
  ({ tag: Tag = 'p', className, children, ...props }, ref) => {
    const textClass = joinClasses(styles.text, className);

    return (
      <Tag ref={ref} className={textClass} {...props}>
        {children}
      </Tag>
    );
  },
);

export default Text;
