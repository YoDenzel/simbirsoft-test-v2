import { Typography } from '@mui/material';
import { LeagueNameRowElement } from '..';
import styles from './league-name-row.module.css';

type TProps = {
  teams: string;
  res: string | number | null;
  status: string;
  time: string;
  date: string;
};

export function LeagueNameRow({ date, res, status, teams, time }: TProps) {
  const arr = [date, time, status, teams, res];
  return (
    <div className={styles.container}>
      {arr.map(item => (
        <Typography
          variant="body1"
          sx={{
            padding: '5px',
            flex: '15',
            display: 'flex',
            justifyContent: 'center',
          }}
          component="div"
          key={item}
        >
          <LeagueNameRowElement element={item} />
        </Typography>
      ))}
    </div>
  );
}
