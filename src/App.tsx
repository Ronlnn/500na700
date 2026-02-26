import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import NewsDetailedPage from './pages/NewsDetailedPage/NewsDetailedPage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news/:id" element={<NewsDetailedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
