import type React from 'react';
import styles from './MainPage.module.scss';
import NewsSection from '../../components/NewsSection/NewsSection';

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <NewsSection />
    </div>
  );
};
export default MainPage;
