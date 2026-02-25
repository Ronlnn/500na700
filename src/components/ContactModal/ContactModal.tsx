import React from 'react';
import styles from './ContactModal.module.scss';
import type { ContactModalProps } from './ContactModal.types';
import ContactForm from '../ContactForm/ContactForm';

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}></button>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
