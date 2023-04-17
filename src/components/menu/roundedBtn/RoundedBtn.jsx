import { CSSTransition } from 'react-transition-group';
import styles from './roundedBtn.module.scss';
export const RoundedBtn = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={2000}
      classNames={{
        appear: styles.btnWrapAppear,
        appearActive: styles.btnWrapAppearActive,
      }}
    >
      <div className={styles.btnWrap}>
        <a href="!#">BUY</a>
      </div>
    </CSSTransition>
  );
};
