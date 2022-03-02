import styles from './league-name-row-element.module.css';

type TProps = {
  element: string | null | number;
};

export function LeagueNameRowElement({ element }: TProps) {
  return <p className={styles.container}>{element}</p>;
}
