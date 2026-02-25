import type { FormData } from '../types/formData';

export const validateContactForm = (values: FormData) => {
  const errors: Record<string, string> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) errors.name = 'Введите имя';
  if (!values.email.trim()) errors.email = 'Введите email';
  else if (!emailRegex.test(values.email)) errors.email = 'Некорректный email';
  if (!values.phone.trim() || values.phone.includes('_'))
    errors.phone = 'Введите корректный телефон';

  return errors;
};
