import styles from './App.module.scss';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className={styles.appContainer}>
      <MainPage />
    </div>
  );
}

export default App;
