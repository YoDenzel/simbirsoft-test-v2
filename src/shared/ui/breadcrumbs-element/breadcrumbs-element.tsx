import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import styles from './breadcrumbs-element.module.css';

type TProps = {
  breadcrumbsArr: Array<{
    title: string;
    linkTo: string;
  }>;
};

export function BreadcrumbsElement({ breadcrumbsArr }: TProps) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ marginBottom: '15px', marginTop: '5px' }}
    >
      {breadcrumbsArr.map(item => (
        <Link
          to={item.linkTo}
          className={styles.breadcrumbs_link}
          key={item.title}
        >
          {item.title}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
