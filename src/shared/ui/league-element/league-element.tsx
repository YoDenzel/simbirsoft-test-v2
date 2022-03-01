import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './league-element.module.css';

type TLeagueElement = {
  leagueName: string;
  countryName: string;
  linkTo: string;
};

export function LeagueElement({
  countryName,
  leagueName,
  linkTo,
}: TLeagueElement) {
  return (
    <div className={styles.container}>
      <Link to={linkTo} className={styles.link}>
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
      </Link>
    </div>
  );
}
