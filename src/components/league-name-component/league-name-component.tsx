import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DatePicker } from '@mui/lab';
import { Pagination, TextField } from '@mui/material';
import { useGetData, usePagination } from '../../shared/custom-hooks';
import { TScheduleLeagueMatches } from '../../shared/types';
import { LeagueNameRow } from '../../shared/ui';
import styles from './league-name-component.module.css';

export function LeagueNameComponent() {
  const [firstValue, setFirstValue] = useState<Date | null>(null);
  const [secondValue, setSecondValue] = useState<Date | null>(null);
  const { id } = useParams();
  const { data, isError } = useGetData(
    'league-name',
    `competitions/${id}/matches`,
  );
  const { currentPosts, pageCount, setCurrentPage } = usePagination({
    filteredData: data.matches,
  });
  console.log(data.matches, isError);
  return (
    <div className={styles.container}>
      <h1>Hello World!</h1>
      <form className={styles.filterForm}>
        <DatePicker
          value={firstValue}
          onChange={newValue => {
            setFirstValue(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
        <DatePicker
          value={secondValue}
          onChange={newValue => {
            setSecondValue(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </form>
      <div>
        {currentPosts.map((item: TScheduleLeagueMatches) => (
          <LeagueNameRow
            key={item.id}
            date={item.utcDate}
            firstTeam={item.homeTeam.name}
            secondTeam={item.awayTeam.name}
            res={`${item.score.fullTime.homeTeam} ${item.score.fullTime.awayTeam}`}
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
    </div>
  );
}
