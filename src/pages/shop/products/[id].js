import Image from 'next/image';
import styles from '@styles/Shop/Products/ProductLayout.module.css';

const Product = () => {
   return (
      <>
         <main className={styles.main}>
            <section className={styles.main__banner}>
               <h1>Poltrona Musa</h1>
            </section>
            <section className={styles.main__product}>
               <div className={styles.product__cont}>
                  <figure className={styles.product__image}>
                     <Image src={'https://i.postimg.cc/dtnRhySq/Ofipartes-Musa-Version-Inza.png'} alt={'Poltrona Musa'} width={1000} height={1000} layout={'responsive'} />
                  </figure>
                  <article className={styles.product__desc}>
                     <h2>Poltrona Musa</h2>
                     <h3>Sillas Interlocutoras</h3>
                     <p>Poltrona elegante y sutil, su diseño suave y redondeado hace que se adapte a los espacios muy facilmente.</p>
                     <p>$850000</p>
                     <button>Añadir al Carrito</button>
                  </article>
               </div>
            </section>
         </main>
      </>
   );
};

export default Product;
