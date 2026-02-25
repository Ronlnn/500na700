import type React from 'react';
import styles from './NewsCard.module.scss';
import type { NewsCardProps } from './NewsSection.types';
import { Heading, Text } from '../../ui';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { Link } from 'react-router-dom';

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const isMobile = useMediaQuery('(max-width: 480px)');
  return (
    <article className={styles.card}>
      <Link to={`news/${item.id}`} className={styles.cardLink}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.cardImage}
          loading="lazy"
        />
        <div className={styles.cardContent}>
          <Heading tag={isMobile ? 'h3' : 'h2'} className={styles.cardTitle}>
            {item.title}
          </Heading>
          <Text tag={'p'} className={styles.cardDescription}>
            {item.description}
          </Text>
          <Text tag={'p'} className={styles.cardDate}>
            {item.date}
          </Text>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
