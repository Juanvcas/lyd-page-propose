import Link from 'next/link';
import styles from '@styles/Header.module.css';

const HeaderMenu = ({ menuToggle, setMenuToggle }) => {
   const toggleMenu = () => {
      setMenuToggle(!menuToggle);
   };
   return (
      <menu className={styles.header__menu}>
         <nav className={styles.menu__nav}>
            <span className={styles['nav-span']} onClick={() => toggleMenu()}></span>
            <Link href={'/'}>Productos</Link>
            <Link href={'/'}>Proyectos</Link>
            <Link href={'/'}>Blog</Link>
         </nav>
      </menu>
   );
};

export default HeaderMenu;
