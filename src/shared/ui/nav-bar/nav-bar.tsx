import { Typography } from '@mui/material';
import styles from './nav-bar.module.css';

export function NavBar() {
  return (
    <div className={styles.container}>
      <Typography variant="h1">h1. Heading</Typography>
    </div>
  );
}
