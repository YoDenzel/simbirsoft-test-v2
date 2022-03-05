import { Pagination, TextField } from '@mui/material';
import {
  useGetData,
  useLocalStorage,
  usePagination,
} from '../../shared/custom-hooks';
import { TTeams } from '../../shared/types';
import { LeagueElement } from '../../shared/ui';
import styles from '../leagues-component/leagues-component.module.css';

export function TeamsComponent() {
  const { data } = useGetData({ QUERY_KEY: 'teams', url: 'teams/' });
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
  });
  const { currentPosts, pageCount, setCurrentPage } =
    usePagination<TTeams>(filteredData);

  console.log(data);
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
          <LeagueElement
            linkTo={`/teams/${item.id}`}
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
    </div>
  );
}
