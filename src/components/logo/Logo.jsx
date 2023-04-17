import styles from './logo.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

export const Logo = () => {
  const menu = useSelector((state) => state.menu.isMenu);
  const logoClasses = cn(styles.logo, {
    [styles.activeLogo]: menu,
    [styles.disActLogo]: !menu,
  });
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.logoAppear,
        appearActive: styles.logoAppearActive,
      }}
    >
      <div className={styles.logoWrap}>
        <a className={cn(logoClasses, styles.logoLink)} href="!#">
          LANDING
        </a>
      </div>
    </CSSTransition>
  );
};
