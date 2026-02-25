import type React from 'react';
import styles from './NewsSection.module.scss';
import { Heading } from '../../ui';
import type { NewsItemData } from './NewsSection.types';
import { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { useMediaQuery } from '../../utils/useMediaQuery';

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const response = await fetch('/src/data/newsData.json');
        if (!response.ok) {
          throw new Error('Ошибка загрузки');
        }
        const data: NewsItemData[] = await response.json();
        setNews(data);
      } catch (err) {
        setError('Не удалось загрузить новости');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  if (loading) return <div className={styles.loading}>Загрузка</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  return (
    <section className={styles.newsSection}>
      <Heading tag={isMobile ? 'h2' : 'h1'} className={styles.newsTitle}>
        Новости
      </Heading>
      <div className={styles.newsGrid}>
        {news.map(item => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
