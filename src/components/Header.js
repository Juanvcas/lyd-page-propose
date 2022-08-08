import { useState, useEffect } from 'react';
import HeaderMenu from 'common/HeaderMenu';
import styles from '@styles/Header.module.css';

const Header = () => {
   const [menuToggle, setMenuToggle] = useState(false);
   const toggleMenu = () => {
      setMenuToggle(!menuToggle);
   };
   useEffect(() => {
      addEventListener('resize', () => {
         if (window.innerWidth >= 768) {
            setMenuToggle(true);
         } else if (window.innerWidth < 768) {
            setMenuToggle(false);
         }
      });
      addEventListener('load', () => {
         window.innerHeight >= 768 ? setMenuToggle(true) : setMenuToggle(false);
      });
   }, []);
   return (
      <header className={styles.header}>
         <figure className={styles.header__logo}>
            <img src="https://i.postimg.cc/QxBddLwB/Logo-white.png" alt="lyd-logo" />
         </figure>
         <span className={styles['menu-span']} onClick={() => toggleMenu()}></span>
         {menuToggle && <HeaderMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />}
      </header>
   );
};

export default Header;
