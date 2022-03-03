import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { Breadcrumbs, Pagination } from '@mui/material';
import { useGetData, usePagination } from '../../shared/custom-hooks';
import {
  TMappedDataTeams,
  TScheduleLeagueMatches,
  TScore,
} from '../../shared/types';
import { DateFilterForm, LeagueNameRow } from '../../shared/ui';
import styles from './league-name-component.module.css';

export function LeagueNameComponent() {
  const [firstValue, setFirstValue] = useState<Date | null>(null);
  const [secondValue, setSecondValue] = useState<Date | null>(null);
  const { id } = useParams();
  const { data, isError } = useGetData(
    'league-name',
    `competitions/${id}/matches?dateFrom=2022-01-01&dateTo=2022-01-01`,
  );

  const statusFilter = (status: string) => {
    if (status === 'SCHEDULED') return 'Запланирован';
    else if (status === 'LIVE') return 'В прямом эфире';
    else if (status === 'IN_PLAY') return 'В игре';
    else if (status === 'PAUSED') return 'Пауза';
    else if (status === 'FINISHED') return 'Завершен';
    else if (status === 'POSTPONED') return 'Отложен';
    else if (status === 'SUSPENDED') return 'Приостановлен';
    return 'Отменен';
  };

  const formatedTime = (time: string) => {
    const parsedTime = parseISO(time);
    return format(parsedTime, 'dd-MM-yyyy HH-mm');
  };

  const matchResult = (item: TScore) => {
    if (item.fullTime.awayTeam === null)
      return 'Еще не сыгран или результат отстутствует';
    const fullTime = `${item.fullTime.homeTeam}:${item.fullTime.awayTeam}`;
    const extraTime =
      item.extraTime.homeTeam === null
        ? ''
        : `(${item.extraTime.homeTeam}:${item.extraTime.awayTeam})`;
    const penalty =
      item.penalties.homeTeam === null
        ? ''
        : `(${item.penalties.homeTeam}:${item.penalties.awayTeam})`;
    return `${fullTime} ${extraTime} ${penalty}`;
  };

  const mappedData = data?.matches.map((item: TScheduleLeagueMatches) => ({
    id: item.id,
    date: formatedTime(item.utcDate).slice(0, 10),
    teams: `${item.homeTeam.name} - ${item.awayTeam.name}`,
    res: matchResult(item.score),
    status: statusFilter(item.status),
    time: formatedTime(item.utcDate).slice(10),
  })) as TMappedDataTeams[];

  // const filteredCurrentPosts = mappedData?.filter((item: TMappedDataTeams) => {
  //   if (firstValue && secondValue && firstValue < secondValue) {
  //     console.log(item.date);
  //     if (
  //       new Date(
  //         Number(item.date.slice(6)),
  //         Number(item.date.slice(3, 5)),
  //         Number(item.date.slice(0, 2)),
  //       ) > firstValue
  //     ) {
  //       return item;
  //     }
  //   }
  //   return null;
  // });

  const { currentPosts, pageCount, setCurrentPage } = usePagination({
    filteredData: mappedData,
  });

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
          <div className={styles.league_block}>
            {currentPosts?.map((item: TMappedDataTeams) => (
              <LeagueNameRow
                key={item.id}
                date={item.date}
                teams={item.teams}
                res={item.res}
                status={item.status}
                time={item.time}
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
