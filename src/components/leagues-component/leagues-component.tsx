import { Pagination, TextField } from '@mui/material';
import {
  useGetData,
  useLocalStorage,
  usePagination,
} from '../../shared/custom-hooks';
import styles from './leagues-component.module.css';
import {
  ErrorNotification,
  LeagueElement,
  MainPagesSkeleton,
} from '../../shared/ui';
import { TCompetitionsData, TCompetitionsList } from '../../shared/types';

export function LeaguesComponent() {
  const [search, setSearch] = useLocalStorage({
    defaultValue: '',
    key: 'search',
  });
  const { data, isError, isLoading } = useGetData<TCompetitionsData>({
    QUERY_KEY: 'leagues',
    url: 'competitions/',
  });

  const PLACEHOLDER = 'Поиск';

  const filteredData = data?.competitions.filter((item: TCompetitionsList) => {
    if (
      item.name
        .toUpperCase()
        .includes(search.toUpperCase().replace(/\s/g, '')) ||
      item.area.name
        .toUpperCase()
        .includes(search.toUpperCase().replace(/\s/g, ''))
    ) {
      return item;
    }
    return null;
  }) as TCompetitionsList[];
  const { currentPosts, pageCount, setCurrentPage } =
    usePagination<TCompetitionsList>(filteredData);

  if (isError) {
    return <ErrorNotification linkTo="/" title="" />;
  } else if (isLoading) {
    return <MainPagesSkeleton />;
  } else
    return (
      <div className={styles.container}>
        <TextField
          id="outlined-basic"
          placeholder={PLACEHOLDER}
          variant="outlined"
          value={search}
          size="medium"
          onChange={event => setSearch(event.target.value)}
          sx={{
            margin: '20px 16px',
          }}
        />
        <div className={styles.list_block}>
          {currentPosts?.map((item: TCompetitionsList) => (
            <LeagueElement
              linkTo={`leagues/${item.id}`}
              key={item.id}
              countryName={item.area.name}
              leagueName={item.name}
            />
          ))}
        </div>
        <div className={styles.pagination_block}>
          <Pagination
            count={pageCount}
            onChange={(_, value) => setCurrentPage(value)}
            shape="rounded"
          />
        </div>
        )
      </div>
    );
}
