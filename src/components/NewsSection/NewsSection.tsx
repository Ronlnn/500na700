import type React from 'react';
import styles from './NewsSection.module.scss';
import { Heading } from '../../ui';
import NewsCard from '../NewsCard/NewsCard';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useNews } from '../../hooks/useNews';

const NewsSection: React.FC = () => {
  const { news, loading, error } = useNews();
  const isMobile = useMediaQuery('(max-width: 480px)');

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
