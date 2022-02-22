import { useQuery } from 'react-query';
import { fetchLeaguesList } from '../../api';

const QUERY_KEY = 'leagues';

const STALE_TIME = 60000;

export const useGetLeaguesList = () => {
  const query = useQuery(QUERY_KEY, () => fetchLeaguesList(), {
    retry: 0,
    staleTime: STALE_TIME,
  });
  return query;
};
