import { useState } from 'react';

import type { FormData, FormErrors } from '../types/formData';

export const useContactForm = (initialValues: FormData) => {
  const [values, setValues] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, setErrors, handleChange, resetForm };
};
