import { useEffect, useState } from 'react';
import type { NewsItemData } from '../types/newsData';

const useNews = () => {
  const [news, setNews] = useState<NewsItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = await fetch(
          `${import.meta.env.BASE_URL}data/newsData.json`,
        );
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

  return { news, loading, error };
};
export default useNews;
