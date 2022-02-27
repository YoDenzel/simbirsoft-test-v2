import { useEffect, useState } from 'react';
import { Pagination, TextField } from '@mui/material';
import { useGetData } from '../../shared/custom-hooks';
import styles from './leagues-component.module.css';
import { LeagueElement } from '../../shared/ui';
import { TCompetitionsList } from '../../shared/types';

export function LeaguesComponent() {
  const [search, setSearch] = useState(() => {
    const value = localStorage.getItem('search');
    return value || '';
  });
  const { data, isError } = useGetData('leagues', 'competitions/');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const PLACEHOLDER = 'Поиск';

  useEffect(() => {
    if (search.length > 0) {
      setCurrentPage(1);
    }
    localStorage.setItem('search', search);
  }, [search]);

  const filteredData = data?.competitions.filter((item: TCompetitionsList) => {
    if (
      item.name.toUpperCase().includes(search.toUpperCase().replace(/\s/g, ''))
    ) {
      return item;
    }
    return null;
  });
  const pageCount = Math.ceil((filteredData?.length || 0) / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData?.slice(indexOfFirstPost, indexOfLastPost);

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
        {currentPosts?.map((item: TCompetitionsList) => (
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
          onChange={(_, value) => setCurrentPage(value)}
          shape="rounded"
        />
      </div>
    </div>
  );
}
