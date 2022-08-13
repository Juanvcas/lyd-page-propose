import Link from 'next/link';
import { BiX } from 'react-icons/bi';
import styles from '@styles/Header/Header.module.css';

const HeaderMenu = ({ menuToggle, setMenuToggle }) => {
   const toggleMenu = () => {
      setMenuToggle(!menuToggle);
   };
   return (
      <menu className={styles.header__menu}>
         <nav className={styles.menu__nav}>
            <span className={styles['nav-span']} onClick={() => toggleMenu()}>
               <BiX />
            </span>
            <Link href={'/Shop'}>Tienda</Link>
            <Link href={'/'}>Productos</Link>
            <Link href={'/'}>Proyectos</Link>
            <Link href={'/'}>Blog</Link>
         </nav>
      </menu>
   );
};

export default HeaderMenu;
