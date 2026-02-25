import type React from 'react';
import styles from './Footer.module.scss';
import { Heading, Logo } from '../../ui';
import { useMediaQuery } from '../../hooks';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 480px)');
  return (
    <footer className={styles.footer}>
      <Logo variant="secondary" className={styles.footerLogo} />
      <Heading tag={isMobile ? 'h3' : 'h2'} className={styles.footerTitle}>
        Креативное агентство 500na700
      </Heading>
    </footer>
  );
};

export default Footer;
