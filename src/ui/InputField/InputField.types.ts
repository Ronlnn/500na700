export interface InputFieldProps {
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
  className?: string;
}
