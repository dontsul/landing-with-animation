import { RiMenuFoldLine } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import styles from './menu.module.scss';
import cn from 'classnames';
import { BsSmartwatch } from 'react-icons/bs';
import { BsFillHandbagFill } from 'react-icons/bs';
import { GiRunningShoe } from 'react-icons/gi';
import { GiClothes } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { Logo } from '../logo/Logo';
import { handleMenu } from '../../features/menuSlice';
import { RoundedBtn } from './roundedBtn/RoundedBtn';

export const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.isMenu);
  const listClasses = cn(styles.menuList, {
    [styles.active]: menu,
  });

  return (
    <div className={styles.menu}>
      <Logo />
      <div className={styles.wrapMenuList}>
        <div className={styles.burgerMenu}>
          {!menu ? (
            <RiMenuFoldLine
              onClick={() => {
                dispatch(handleMenu(true));
              }}
              size={40}
            />
          ) : (
            <CgClose
              onClick={() => {
                dispatch(handleMenu(false));
              }}
              size={40}
              color="white"
            />
          )}
        </div>
        <ul className={listClasses}>
          <li>
            <a href="!#">
              {<GiClothes />}
              Clothes
            </a>
          </li>
          <li>
            <a href="!#"> {<GiRunningShoe />}Sneakers</a>
          </li>
          <li>
            <a href="!#"> {<BsFillHandbagFill />}Bags</a>
          </li>
          <li>
            <a href="!#"> {<BsSmartwatch />}Accessorize</a>
          </li>
        </ul>
      </div>
      <RoundedBtn />
    </div>
  );
};
