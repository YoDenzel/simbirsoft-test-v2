import { Typography } from '@mui/material';
import styles from './league-element.module.css';

type TLeagueElement = {
  leagueName: string;
  countryName: string;
};

export function LeagueElement({ countryName, leagueName }: TLeagueElement) {
  return (
    <div className={styles.container}>
      <Typography
        variant="h5"
        sx={{
          padding: '25px 25px 0px 25px',
        }}
      >
        {leagueName}
      </Typography>
      <Typography
        sx={{
          paddingBottom: '25px',
        }}
        variant="subtitle1"
      >
        {countryName}
      </Typography>
    </div>
  );
}
