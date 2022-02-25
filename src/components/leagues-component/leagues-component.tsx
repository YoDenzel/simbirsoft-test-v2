import { useState } from 'react';
import { Pagination, TextField } from '@mui/material';
import { useGetLeaguesList } from '../../shared/custom-hooks';
import styles from './leagues-component.module.css';
import { LeagueElement } from '../../shared/ui';

export function LeaguesComponent() {
  const [search, setSearch] = useState('');
  const { data, isError } = useGetLeaguesList();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const PLACEHOLDER = 'Поиск';

  const pageCount = Math.ceil((data?.count || 0) / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.competitions.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  console.log(data, isError);

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
        {currentPosts?.map(item => (
          <LeagueElement
            key={item.id}
            countryName={item.area.name}
            leagueName={item.name}
          />
        ))}
      </div>
      <div className={styles.pagination_block}>
        <Pagination
          count={pageCount}
          onChange={(event, value) => setCurrentPage(value)}
          shape="rounded"
        />
      </div>
    </div>
  );
}
