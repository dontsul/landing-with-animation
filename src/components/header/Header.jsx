import { Menu } from '../menu/Menu';
import { Banner } from '../banner/Banner';
import styles from './header.module.scss';
export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Banner />
    </header>
  );
};
