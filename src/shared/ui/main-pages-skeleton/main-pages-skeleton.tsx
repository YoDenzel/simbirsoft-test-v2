import { Skeleton } from '@mui/material';
import styles from './main-pages-skeleton.module.css';

export function MainPagesSkeleton() {
  return (
    <div className={styles.skeleton_container}>
      <Skeleton
        variant="rectangular"
        width="30%"
        sx={{ height: '50px', margin: '16px' }}
      />
      <div className={styles.list_block_skeleton}>
        {Array.from(new Array(12)).map(() => (
          <Skeleton
            variant="rectangular"
            height="125px"
            width="100%"
            sx={{
              margin: '15px',
            }}
          />
        ))}
      </div>
    </div>
  );
}
