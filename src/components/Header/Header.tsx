import React from 'react';
import styles from './Header.module.scss';

import { Button, Logo } from '../../ui';

const Header: React.FC = () => {
  return (
    <header className={styles.mainHeader}>
      <Logo className={styles.headerLogo} />
      <Button variant="light">Связаться с нами</Button>
    </header>
  );
};

export default Header;
