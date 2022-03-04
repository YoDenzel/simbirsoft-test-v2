import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import {
  useGetData,
  useGetMatchResult,
  usePagination,
  useStatus,
  useTimeFormat,
} from '../../shared/custom-hooks';
import {
  BreadcrumbsElement,
  DateFilterForm,
  LeagueNameRow,
} from '../../shared/ui';
import styles from '../league-name-component/league-name-component.module.css';
import { TMappedDataTeams, TTeamName } from '../../shared/types';

export function TeamNameComponent() {
  const [firstValue, setFirstValue] = useState<Date | null>(null);
  const [secondValue, setSecondValue] = useState<Date | null>(null);
  const { id } = useParams();
  const { data, isError } = useGetData({
    QUERY_KEY: 'team',
    url: `teams/${id}/matches/`,
    firstValue,
    secondValue,
  });

  const mappedData = data?.matches.map((item: TTeamName) => ({
    id: item.id,
    date: useTimeFormat({
      time: item.utcDate,
      dateFormat: 'dd-MM-yyyy HH-mm',
    }).slice(0, 10),
    teams: `${item.homeTeam.name} - ${item.awayTeam.name}`,
    res: useGetMatchResult(item.score),
    status: useStatus(item.status),
    time: useTimeFormat({
      time: item.utcDate,
      dateFormat: 'dd-MM-yyyy HH-mm',
    }).slice(10),
  })) as TMappedDataTeams[];

  const { currentPosts, pageCount, setCurrentPage } = usePagination(
    mappedData,
  );

  const breadcrumbsArr = [
    {
      title: 'Команды',
      linkTo: '/teams',
    },
    {
      title: 'Название команды',
      linkTo: `/teams/${id}`,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <BreadcrumbsElement breadcrumbsArr={breadcrumbsArr} />
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
