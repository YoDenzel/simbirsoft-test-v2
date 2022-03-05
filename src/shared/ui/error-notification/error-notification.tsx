import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import errorIcon from '../icons/error-icon.svg';
import styles from './error-notification.module.css';

type TProps = {
  linkTo: string;
  title: string;
};

export function ErrorNotification({ linkTo, title }: TProps) {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Ошибка</Typography>
      <img src={errorIcon} alt="Ошибка" className={styles.error_image} />
      <Typography
        variant="h5"
        sx={{
          width: '50%',
          paddingTop: '15px',
        }}
      >
        Подождите пару минут и перезагрузите страницу или нажмите{' '}
        <Link className={styles.link} to={linkTo}>
          сюда
        </Link>{' '}
        {title}
      </Typography>
    </div>
  );
}
