import { Typography } from '@mui/material';
import styles from './league-name-row.module.css';

type TProps = {
  firstTeam: string;
  secondTeam: string;
  res: string | number | null;
  status: string;
  time: string;
  date: string;
};

export function LeagueNameRow({
  date,
  firstTeam,
  res,
  status,
  secondTeam,
  time,
}: TProps) {
  return (
    <div className={styles.container}>
      <Typography variant="body1" sx={{ padding: '15px' }}>
        {date} {time} {status} {firstTeam} {secondTeam} {res}
      </Typography>
    </div>
  );
}
