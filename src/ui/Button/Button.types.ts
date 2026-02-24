import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'light' | 'dark';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}
