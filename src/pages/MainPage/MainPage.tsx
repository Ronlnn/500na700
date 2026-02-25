import type React from 'react';
import Header from '../../components/Header/Header';
import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <Header></Header>{' '}
    </div>
  );
};
export default MainPage;
