import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { useGetData, usePagination } from '../../shared/custom-hooks';
import { TScheduleLeagueMatches } from '../../shared/types';
import { DateFilterForm, LeagueNameRow } from '../../shared/ui';
import styles from './league-name-component.module.css';

export function LeagueNameComponent() {
  const [firstValue, setFirstValue] = useState<Date | null>(null);
  const [secondValue, setSecondValue] = useState<Date | null>(null);
  const { id } = useParams();
  const { data, isError } = useGetData(
    'league-name',
    `competitions/${id}/matches`,
  );
  console.log(data, isError, id);
  const { currentPosts, pageCount, setCurrentPage } = usePagination({
    filteredData: data?.matches,
  });

  return (
    <>
      <div className={styles.container}>
        <h1>Hello World!</h1>
        <DateFilterForm
          firstValue={firstValue}
          setFirstValue={setFirstValue}
          secondValue={secondValue}
          setSecondValue={setSecondValue}
        />
      </div>
      {!isError ? (
        <>
          <div className={styles.league_block}>
            {currentPosts?.map((item: TScheduleLeagueMatches) => (
              <LeagueNameRow
                key={item.id}
                date={item.utcDate}
                teams={`${item.homeTeam.name} - ${item.awayTeam.name}`}
                res={`${item.score.fullTime.homeTeam} - ${item.score.fullTime.awayTeam}`}
                status={item.status}
                time="123"
              />
            ))}
          </div>
          <Pagination
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px 0px',
            }}
            count={pageCount}
            onChange={(_, value) => setCurrentPage(value)}
            shape="rounded"
          />
        </>
      ) : (
        <div>Error</div>
      )}
    </>
  );
}
