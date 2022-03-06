import { Pagination, TextField } from '@mui/material';
import {
  useGetData,
  useLocalStorage,
  usePagination,
} from '../../shared/custom-hooks';
import { TTeams, TTeamsData } from '../../shared/types';
import {
  ErrorNotification,
  MainPagesSkeleton,
  TeamElement,
} from '../../shared/ui';
import styles from '../leagues-component/leagues-component.module.css';

export function TeamsComponent() {
  const { data, isError, isLoading } = useGetData<TTeamsData>({
    QUERY_KEY: 'teams',
    url: 'teams/',
  });
  const [search, setSearch] = useLocalStorage({
    defaultValue: '',
    key: 'teams-search',
  });
  const PLACEHOLDER = 'Поиск';
  const filteredData = data?.teams.filter((item: TTeams) => {
    if (
      item.name.toUpperCase().includes(search.toUpperCase().replace(/\s/g, ''))
    ) {
      return item;
    }
    return null;
  }) as TTeams[];
  const { currentPosts, pageCount, setCurrentPage } =
    usePagination<TTeams>(filteredData);
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
          {currentPosts?.map((item: TTeams) => (
            <TeamElement
              linkTo={`/teams/${item.id}`}
              key={item.id}
              imgUrl={item.crestUrl}
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
      </div>
    );
}
