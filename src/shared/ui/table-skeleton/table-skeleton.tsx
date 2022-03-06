import { Skeleton } from '@mui/material';
import styles from './table-skeleton.module.css';

export function TableSkeleton() {
  return (
    <div className={styles.skeleton_container}>
      <Skeleton
        variant="text"
        width="50%"
        sx={{
          marginBottom: '15px',
        }}
      />
      <div className={styles.filter_form_container}>
        <Skeleton
          variant="rectangular"
          width="25%"
          sx={{ marginRight: '15px', height: '45px', marginBottom: '15px' }}
        />
        <Skeleton variant="rectangular" width="25%" sx={{ height: '45px' }} />
      </div>
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{
          height: '100vh',
          marginTop: '25px',
        }}
      />
    </div>
  );
}
