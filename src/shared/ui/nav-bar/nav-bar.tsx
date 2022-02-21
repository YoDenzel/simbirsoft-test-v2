import { Typography } from '@mui/material';
import { NavElement } from '..';
import styles from './nav-bar.module.css';

export function NavBar() {
  const links = [
    {
      linkTo: '/',
      title: 'Турниры',
    },
    {
      linkTo: '/',
      title: 'Команды',
    },
  ];

  return (
    <div className={styles.container}>
      <Typography variant="h5" sx={{ padding: '16px' }}>
        Heading
      </Typography>
      {links.map(item => (
        <NavElement linkTo={item.linkTo} title={item.title} key={item.title} />
      ))}
    </div>
  );
}
