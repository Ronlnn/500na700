import React from 'react';
import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled,
  children,
}) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={styles.checkbox} />
      {children && <span className={styles.label}>{children}</span>}
    </label>
  );
};

export default Checkbox;
