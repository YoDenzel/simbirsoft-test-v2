import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import errorIcon from '../icons/error-icon.svg';
import styles from './error-notification.module.css';

type TProps = {
  linkTo: string;
};

export function ErrorNotification({ linkTo }: TProps) {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Ошибка</Typography>
      <img src={errorIcon} alt="" className={styles.error_image} />
      <Typography
        variant="h5"
        sx={{
          width: '50%',
          paddingTop: '15px',
        }}
      >
        Подождите пару минут или нажмите{' '}
        <Link className={styles.link} to={linkTo}>
          сюда
        </Link>{' '}
        и выберите другой элемент
      </Typography>
    </div>
  );
}
