import React from 'react';
import { IMaskInput } from 'react-imask';
import { useContactForm } from '../../hooks/useContactForm';
import { validateContactForm } from '../../utils/validateForm';
import styles from './ContactForm.module.scss';
import { Heading, InputField, Button, Caption, Checkbox } from '../../ui';
import { useMediaQuery } from '../../hooks';

const ContactForm: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const { values, errors, handleChange, setErrors, resetForm } = useContactForm(
    {
      name: '',
      email: '',
      phone: '',
    },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      alert('Данные отправлены! Смотри консоль');
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Heading tag={isMobile ? 'h3' : 'h2'} className={styles.formTitle}>
        Связаться с нами
      </Heading>
      <InputField
        value={values.name}
        placeholder="Имя"
        onChange={v => handleChange('name', v)}
      />
      {errors.name && <span className={styles.error}>{errors.name}</span>}
      <div>
        <IMaskInput
          mask="+{7} (000) 000-00-00"
          value={values.phone}
          onAccept={(v: string) => handleChange('phone', v)}
          placeholder="Телефон"
          className={styles.inputTel}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      <InputField
        value={values.email}
        placeholder="Email"
        onChange={v => handleChange('email', v)}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}
      <Checkbox>
        <Caption>Я согласен (-а) на обработку персональных данных</Caption>
      </Checkbox>
      <Button variant="dark" type="submit" className={styles.formButton}>
        Отправить
      </Button>
    </form>
  );
};

export default ContactForm;
