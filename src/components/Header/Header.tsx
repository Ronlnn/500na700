import React from 'react';
import styles from './Header.module.scss';

import { Button, Logo } from '../../ui';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.mainHeader}>
      <Link to={'/'}>
        <Logo className={styles.headerLogo} />
      </Link>
      <Button variant="light">Связаться с нами</Button>
    </header>
  );
};

export default Header;
