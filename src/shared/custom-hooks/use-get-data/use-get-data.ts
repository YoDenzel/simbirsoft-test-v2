import { useQuery } from 'react-query';
import { fetchData } from '../../api';

const STALE_TIME = 60000;

export const useGetData = (QUERY_KEY: string, url: string) => {
  const query = useQuery(QUERY_KEY, () => fetchData(url), {
    retry: 0,
    staleTime: STALE_TIME,
  });
  return query;
};
