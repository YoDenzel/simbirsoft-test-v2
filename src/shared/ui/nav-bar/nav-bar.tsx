import { Typography } from '@mui/material';
import { NavLink } from '..';
import styles from './nav-bar.module.css';

export function NavBar() {
  const links = [
    <NavLink linkTo="" title="Турниры" />,
    <NavLink linkTo="" title="Команды" />,
  ];

  return (
    <div className={styles.container}>
      <Typography variant="h5" align="left" sx={{ padding: '15px' }}>
        Heading
      </Typography>
      {links.map(item => item)}
    </div>
  );
}
