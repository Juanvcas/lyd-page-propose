import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useHeaderStyles } from '@hooks/useHeaderStyles';
import HeaderMenu from 'common/HeaderMenu';
import ShoppingCart from '@components/ShoppingCart';
import { BiMenu, BiCartAlt } from 'react-icons/bi';
import styles from '@styles/Header/Header.module.css';

const Header = () => {
   const [menuToggle, setMenuToggle] = useState(false);
   const [cartToggle, setCartToggle] = useState(false);
   const router = useRouter();
   const headerStyles = useHeaderStyles();
   useEffect(() => {
      const width = window.innerWidth;
      width >= 768 ? setMenuToggle(true) : setMenuToggle(false);
      router.events.on('routeChangeComplete', () => {
         window.innerWidth < 768 ? setMenuToggle(false) : null;
      });
      addEventListener('resize', () => {
         if (window.innerWidth >= 768) {
            setMenuToggle(true);
         } else if (window.innerWidth < 768) {
            setMenuToggle(false);
         }
      });
   }, []);
   return (
      <>
         <header className={styles.header} id={'header'}>
            <Link href={'/'}>
               <a className={styles.header__logo}>
                  <img id="header-logo" src="https://i.postimg.cc/QxBddLwB/Logo-white.png" alt="lyd-logo" />
               </a>
            </Link>
            <span className={styles['menu-span']} onClick={() => setMenuToggle(!menuToggle)}>
               <BiMenu />
            </span>
            {menuToggle && <HeaderMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />}
            <div className={styles.header__cart} id="header-cart" onClick={() => setCartToggle(!cartToggle)}>
               <BiCartAlt />
            </div>
            {cartToggle && <ShoppingCart cartToggle={cartToggle} setCartToggle={setCartToggle} />}
         </header>
      </>
   );
};

export default Header;
