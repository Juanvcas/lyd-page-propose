import Link from 'next/link';
import styles from '@styles/Home.module.css';

export default function Home() {
   return (
      <>
         <main className={styles.main}>
            <section className={styles.main__banner}>
               <h1>Mobiliario hecho para el bienestar y confort</h1>
               <Link href={'/'}>Ver Muebles</Link>
            </section>
            <section className={styles.main__articles}>
               <article className={styles.articles__prod}>
                  <h3>Button, lo natural siempre resalta mejor.</h3>
                  <Link href={'/'}>Conoce la Línea</Link>
               </article>
               <article className={styles.articles__prod}>
                  <h3>Covo, comodidad y estilo en un solo producto.</h3>
                  <Link href={'/'}>Conoce la Línea</Link>
               </article>
            </section>
            <section className={styles.main__categories}>
               <h2>Líneas diseñadas para perdurar</h2>
               <p>Conoce nuestro amplio catalogo de productos</p>
               <div className={styles.categories__slider}>
                  <Link href={'/'}>
                     <p>Sillas</p>
                  </Link>
                  <Link href={'/'}>
                     <p>Escritorios</p>
                  </Link>
                  <Link href={'/'}>
                     <p>Almacenamientos</p>
                  </Link>
                  <Link href={'/'}>
                     <p>Accesorios</p>
                  </Link>
               </div>
            </section>
         </main>
      </>
   );
}
