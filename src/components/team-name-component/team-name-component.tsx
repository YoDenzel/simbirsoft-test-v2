import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import { useGetData } from '../../shared/custom-hooks';
import { DateFilterForm } from '../../shared/ui';
import styles from '../league-name-component/league-name-component.module.css';

export function TeamNameComponent() {
  const [firstValue, setFirstValue] = useState<Date | null>(null);
  const [secondValue, setSecondValue] = useState<Date | null>(null);
  const { id } = useParams();
  const { data, isError } = useGetData({
    QUERY_KEY: 'team',
    url: `teams/${id}/matches/`,
  });

  console.log(data);
  return (
    <>
      <div className={styles.container}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: '15px', marginTop: '5px' }}
        >
          <Link className={styles.breadcrumbs_link} to="/">
            Лиги
          </Link>
          <Link className={styles.breadcrumbs_link} to={`/leagues/${id}`}>
            Название лиги
          </Link>
        </Breadcrumbs>
        <DateFilterForm
          firstValue={firstValue}
          setFirstValue={setFirstValue}
          secondValue={secondValue}
          setSecondValue={setSecondValue}
        />
      </div>
      {!isError ? (
        <>
          <div className={styles.league_block}></div>
          {/* <Pagination
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px 0px',
            }}
            count={pageCount}
            onChange={(_, value) => setCurrentPage(value)}
            shape="rounded"
          /> */}
        </>
      ) : (
        <div>Error</div>
      )}
    </>
  );
}
