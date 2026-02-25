import type { InputFieldProps } from './InputField.types';
import styles from './InputField.module.scss';

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  error,
  onChange,
}) => (
  <div>
    <input
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      className={styles.input}
    />
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export default InputField;
