import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './nav-link.module.css';

type TNavLink = {
  linkTo: string;
  title: string;
};

export function NavLink({ linkTo, title }: TNavLink) {
  return (
    <Link to={linkTo} className={styles.link}>
      <Button
        variant="outlined"
        size="medium"
        sx={{
          marginRight: '15px',
          fontSize: '0.7rem',
        }}
      >
        {title}
      </Button>
    </Link>
  );
}
