import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <main className={styles.main}>
            <section className={styles.main__banner}>
               <h1>Mobiliario hecho para el bienestar y confort</h1>
               <Link href={'/Shop'}>Ver Muebles</Link>
            </section>
            <section className={styles.main__articles}>
               <div className={styles.articles__sect}>
                  <h3>Button, lo natural siempre resalta mejor.</h3>
                  <Link href={'/'}>Conoce la Línea</Link>
               </div>
               <div className={styles.articles__sect}>
                  <h3>Covo, comodidad y estilo en un solo producto.</h3>
                  <Link href={'/'}>Conoce la Línea</Link>
               </div>
            </section>
            <section className={styles.main__catalog}>
               <h2>Líneas diseñadas para perdurar</h2>
               <Link href={'/'}>Conoce nuestro catalogo</Link>
            </section>
            <section className={styles.main__projects}>
               <h2>Nuevos Proyectos</h2>
               <div className={styles.projects__cont}>
                  <div className={styles.projects__sect}>
                     <h3>Constructora Bayith</h3>
                     <Link href={'/'}>Conoce el proyecto</Link>
                  </div>
                  <div className={styles.projects__sect}>
                     <h3>Universidad Nacional</h3>
                     <Link href={'/'}>Conoce el proyecto</Link>
                  </div>
               </div>
               <Link href={'/'}>Mira nuestros Proyectos</Link>
            </section>
            <section className={styles.main__news}>
               <h2>¿Que hay de Nuevo?</h2>
               <div className={styles.news__cont}>
                  <article className={styles.news__sect}>
                     <figure className={styles.sect__img}>
                        <Image src="https://i.postimg.cc/sgQt50pH/Madera-mobiliario.jpg" alt="madera-mobiliario" layout="fill" />
                     </figure>
                     <h3>Madera en Mobiliario</h3>
                     <p>Conoce cuales son las tendencias en la madera para el mobiliario.</p>
                     <Link href={'/'}>Mira la nota</Link>
                  </article>
                  <article className={styles.news__sect}>
                     <figure className={styles.sect__img}>
                        <Image src="https://i.postimg.cc/FRdKt0QB/HO-BTT-Post01-1.png" alt="home-office" layout="fill" />
                     </figure>
                     <h3>Elementos del Home Office</h3>
                     <p>Conoce cuales son los elementos para el Home Office que debes tener.</p>
                     <Link href={'/'}>Mira la nota</Link>
                  </article>
               </div>
            </section>
         </main>
      </>
   );
}
