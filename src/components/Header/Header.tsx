import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Button, Logo } from '../../ui';
import { Link } from 'react-router-dom';
import ContactModal from '../ContactModal/ContactModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.mainHeader}>
      <Link to={'/'}>
        <Logo variant="primary" className={styles.headerLogo} />
      </Link>
      <Button variant="light" onClick={() => setIsOpen(true)}>
        Связаться с нами
      </Button>
      {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;
