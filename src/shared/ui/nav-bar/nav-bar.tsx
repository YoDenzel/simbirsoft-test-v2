import { NavElement } from '..';
import styles from './nav-bar.module.css';
import footballFieldIcon from '../icons/football-field-icon.svg';

export function NavBar() {
  const links = [
    {
      linkTo: '/',
      title: 'Лиги',
    },
    {
      linkTo: '/teams',
      title: 'Команды',
    },
  ];

  return (
    <div className={styles.container}>
      <img
        src={footballFieldIcon}
        alt="Футбольное поле"
        className={styles.football_icon}
      />
      {links.map(item => (
        <NavElement linkTo={item.linkTo} title={item.title} key={item.title} />
      ))}
    </div>
  );
}
