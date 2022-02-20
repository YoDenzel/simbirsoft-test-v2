import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './nav-element.module.css';

type TNavLink = {
  linkTo: string;
  title: string;
};

export function NavElement({ linkTo, title }: TNavLink) {
  return (
    <NavLink
      to={linkTo}
      className={isActive => (isActive ? styles.active_link : styles.link)}
    >
      <Button
        variant="text"
        size="large"
        sx={{
          fontSize: '0.7rem',
          marginTop: '5px',
        }}
      >
        {title}
      </Button>
    </NavLink>
  );
}
