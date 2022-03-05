import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../league-element/league-element.module.css';

type TTeamElement = {
  leagueName: string;
  imgUrl: string;
  linkTo: string;
};

export function TeamElement({ imgUrl, leagueName, linkTo }: TTeamElement) {
  return (
    <div className={styles.container}>
      <Link to={linkTo} className={styles.link}>
        <Typography
          variant="h5"
          sx={{
            padding: '25px 25px 0px 25px',
          }}
          color="primary.dark"
        >
          {leagueName}
        </Typography>
        <img src={imgUrl} alt="Эмблема клуба" className={styles.club_emblem} />
      </Link>
    </div>
  );
}
