import { useState, useEffect } from 'react';
import Link from 'next/link';
import ShopProduct from '@components/Products/ShopProduct';
import styles from '@styles/Shop/Shop.module.css';

const Shop = () => {
   const categories = [
      { category: 'Escriotiros ejecutivos y gerenciales' },
      { category: 'Escriotiros operativos' },
      { category: 'Trabajo colavorativo' },
      { category: 'Sillas' },
      { category: 'Soft Seating' },
      { category: 'Recepciones' },
      { category: 'Almacenamiento' },
      { category: 'Divisiones' },
      { category: 'Accesorios' },
      { category: 'Muebles especiales' },
   ];
   useEffect(() => {}, []);
   return (
      <>
         <main className={styles.main}>
            <section className={styles.main__banner}>
               <div className={styles.banner__slide}>
                  <h1>Aqui encuentras tu espacio perfecto</h1>
                  <h2>Tenemos un gran catalogo de productos que se adaptan a lo que necesitas</h2>
                  <Link href={'/Shop'}>
                     <a>Conoce nuestras Líneas</a>
                  </Link>
               </div>
            </section>
            <section className={styles.main__products}>
               <div className={styles.products__bsellers}>
                  <h2>Los mas ventidos</h2>
                  <div className={styles.bsellers__cont}>
                     <ShopProduct />
                     <ShopProduct />
                     <ShopProduct />
                     <ShopProduct />
                  </div>
               </div>
               <section className={styles.products__cont}>
                  <div className={styles.products__filter}>
                     <h2>Productos</h2>
                     <nav className={styles.filter__nav}>
                        <form className={styles['nav-filters']}>
                           <div className={styles['filters-opt']}>
                              <p>Ordenar por:</p>
                              <select>
                                 <option value={'ordenar'}>ordenar</option>
                                 {/* {categories.map((cat) => {
                                    <option value={cat.category}>{cat.category}</option>;
                                 })} */}
                              </select>
                           </div>
                           <div className={styles['filters-opt']}>
                              <p>Categoria:</p>
                              <select>
                                 <option value={'categoria'}>categoria</option>
                                 {/* {categories.map((cat) => {
                                    <option value={cat.category}>{cat.category}</option>;
                                 })} */}
                              </select>
                           </div>
                           <button type="submit">Filtrar</button>
                        </form>
                        <div className={styles['nav-search']}>
                           <input type={'text'} placeholder={'Buscar producto'} />
                        </div>
                     </nav>
                  </div>
                  <div className={styles.products__list}>
                     <ShopProduct />
                  </div>
               </section>
            </section>
         </main>
      </>
   );
};

export default Shop;
