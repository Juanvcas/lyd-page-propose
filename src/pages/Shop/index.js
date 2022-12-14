import { useState, useEffect } from 'react';
import Link from 'next/link';
import ShopProduct from '@components/Products/ShopProduct';
import { BiSearch } from 'react-icons/bi';
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
                              <select title="ordenar por">
                                 <option value={'ordenar'}>ordenar</option>
                                 {/* {categories.map((cat) => {
                                    <option value={cat.category}>{cat.category}</option>;
                                 })} */}
                              </select>
                           </div>
                           <div className={styles['filters-opt']}>
                              <p>Categoria:</p>
                              <select title="categoria">
                                 <option value={'categoria'}>categoria</option>
                                 {/* {categories.map((cat) => {
                                    <option value={cat.category}>{cat.category}</option>;
                                 })} */}
                              </select>
                           </div>
                           <button className={styles['filters-butt']} type="submit">
                              Filtrar
                           </button>
                        </form>
                        <label className={styles['nav-search']}>
                           <input type={'text'} placeholder={'Buscar producto'} />
                           <span>
                              <BiSearch />
                           </span>
                        </label>
                     </nav>
                  </div>
                  <div className={styles.products__list}>
                     <ShopProduct />
                     <ShopProduct />
                     <ShopProduct />
                     <ShopProduct />
                     <ShopProduct />
                     <ShopProduct />
                  </div>
               </section>
            </section>
            <section className={styles.main__contact}>
               <h3>Te asesoramos en lo que necesites</h3>
               <p>Cuentanos como podemos ayudarte y encontraremos el mejor producto para ti</p>
               <Link href={'/Shop'}>
                  <a>Contactanos</a>
               </Link>
            </section>
         </main>
      </>
   );
};

export default Shop;
