import Link from 'next/link';
import styles from '@styles/Footer/Footer.module.css';

const Footer = () => {
   return (
      <>
         <footer className={styles.footer}>
            <div className={styles.footer__cont}>
               <section className={styles.footer__contact}>
                  <p>Información:</p>
                  <Link href={'/'}>Contacto</Link>
                  <Link href={'/'}>Sobre Lineas y Diseños</Link>
                  <Link href={'/'}>Politicas</Link>
                  <Link href={'/'}>Oficinas</Link>
               </section>
               <section className={styles.footer__social}>
                  <p>Siguenos:</p>
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">Pinterest</a>
                  <a href="#">Youtube</a>
               </section>
               <section className={styles.footer__mail}>
                  <p>¡Mantente al tanto de las novedades!</p>
                  <Link href={'/'}>Inscribete al Boletin</Link>
               </section>
            </div>
            <section className={styles.dev}>
               <p>
                  <strong>
                     Develop by: <a href="#">Juan Vasquez</a>
                  </strong>
               </p>
            </section>
         </footer>
      </>
   );
};

export default Footer;
