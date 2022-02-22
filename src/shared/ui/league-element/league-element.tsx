import { Typography } from '@mui/material';
import styles from './league-element.module.css';

type TLeagueElement = {
  leagueName: string;
  countryName: string;
};

export function LeagueElement({ countryName, leagueName }: TLeagueElement) {
  return (
    <div className={styles.container}>
      <Typography variant="h4">{leagueName}</Typography>
      <Typography variant="subtitle1">{countryName}</Typography>
    </div>
  );
}
