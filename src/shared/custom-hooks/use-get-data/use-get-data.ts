import { format } from 'date-fns';
import { useQuery } from 'react-query';
import { fetchData } from '../../api';

const STALE_TIME = 0;

type TProps = {
  QUERY_KEY: string;
  url: string;
  firstValue?: Date | null;
  secondValue?: Date | null;
};

export const useGetData = ({
  QUERY_KEY,
  url,
  firstValue,
  secondValue,
}: TProps) => {
  let firstFormatedValue = null;
  let secondFormatedValue = null;
  let filteredUrl = url;
  if (firstValue && secondValue && firstValue < secondValue) {
    firstFormatedValue = format(firstValue, 'yyyy-MM-dd');
    secondFormatedValue = format(secondValue, 'yyyy-MM-dd');
    filteredUrl += `?dateFrom=${firstFormatedValue}&dateTo=${secondFormatedValue}`;
    console.log(filteredUrl);
  }
  const query = useQuery(
    [QUERY_KEY, filteredUrl],
    () => fetchData(filteredUrl),
    {
      retry: 0,
      staleTime: STALE_TIME,
    },
  );
  return query;
};
