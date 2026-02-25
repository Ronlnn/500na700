import type React from 'react';
import styles from './NewsDetailedPage.module.scss';
import { useNews, useMediaQuery } from '../../hooks';
import { useParams } from 'react-router-dom';
import { Heading, Text } from '../../ui';
import Footer from '../../components/Footer/Footer';

const NewsDetailedPage: React.FC = () => {
  const { news, loading, error } = useNews();
  const isMobile = useMediaQuery('(max-width: 480px)');

  const { id } = useParams<{ id: string }>();
  const newsDetailed = news.find(item => item.id === id);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.newsDetailedPage}>
      <section className={styles.newsDetailedSection}>
        <img src={newsDetailed?.image} className={styles.newsImg} />
        <div className={styles.newsDetailedContainer}>
          <Heading tag={isMobile ? 'h2' : 'h1'} className={styles.newsTitle}>
            {newsDetailed?.title}
          </Heading>
          <Text tag={'p'} className={styles.newsDate}>
            {newsDetailed?.date}
          </Text>
          <Heading tag={'h3'} className={styles.newsDetailedTitle}>
            {newsDetailed?.detailedTitle}
          </Heading>
          <div className={styles.detailedDescription}>
            {newsDetailed?.detailedDescription.map((paragraph, index) => (
              <Text key={index} tag="p" className={styles.paragraph}>
                {paragraph}
              </Text>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsDetailedPage;
