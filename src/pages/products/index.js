import CategorySlide from '@components/Categories/CategorySlide';
import styles from '@styles/Shop/Categories/ProductsPage.module.css';

const Products = () => {
   return (
      <>
         <main className={styles.main}>
            <section className={styles.main__banner}>
               <h1>Descubre todos los productos que ofrecemos</h1>
               <h2>Todos nuestros productos son de calidad, pensados en la comodidad, bienestar y estilo</h2>
            </section>
            <section className={styles.main__categories}>
               <h2>Encuentra entre todos nuestros productos lo que necesitas para amueblar tu espacio de trabajo.</h2>
               <div className={styles.categories__cont}>
                  <CategorySlide />
                  <CategorySlide />
                  <CategorySlide />
                  <CategorySlide />
                  <CategorySlide />
                  <CategorySlide />
               </div>
            </section>
         </main>
      </>
   );
};

export default Products;
