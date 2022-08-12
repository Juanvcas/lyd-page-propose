import { useState, useEffect } from 'react';
import HeaderMenu from 'common/HeaderMenu';
import ShoppingCart from '@components/ShoppingCart';
import { BiMenu, BiCartAlt } from 'react-icons/bi';
import styles from '@styles/Header/Header.module.css';

const Header = () => {
   const [menuToggle, setMenuToggle] = useState(false);
   const [cartToggle, setCartToggle] = useState(false);
   useEffect(() => {
      console.log(window.innerWidth);
      window.innerHeight >= 652 ? setMenuToggle(true) : setMenuToggle(false);
      addEventListener('resize', () => {
         if (window.innerWidth >= 768) {
            setMenuToggle(true);
         } else if (window.innerWidth < 768) {
            setMenuToggle(false);
         }
      });
   }, []);
   return (
      <header className={styles.header}>
         <figure className={styles.header__logo}>
            <img src="https://i.postimg.cc/QxBddLwB/Logo-white.png" alt="lyd-logo" />
         </figure>
         <span className={styles['menu-span']} onClick={() => setMenuToggle(!menuToggle)}>
            <BiMenu />
         </span>
         {menuToggle && <HeaderMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />}
         <div className={styles.header__cart} onClick={() => setCartToggle(!cartToggle)}>
            <BiCartAlt />
         </div>
         {cartToggle && <ShoppingCart cartToggle={cartToggle} setCartToggle={setCartToggle} />}
      </header>
   );
};

export default Header;
