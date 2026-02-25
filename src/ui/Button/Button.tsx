import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const joinClasses = (...classes: Array<string | undefined | false>): string => {
  return classes.filter(Boolean).join(' ');
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'light', disabled, ...props }, ref) => {
    const buttonClass = joinClasses(styles.button, styles[variant], className);

    return (
      <button ref={ref} className={buttonClass} disabled={disabled} {...props}>
        {children}
      </button>
    );
  },
);

export default Button;
