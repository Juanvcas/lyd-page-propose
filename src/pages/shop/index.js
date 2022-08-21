import { useState, useEffect } from 'react';
import Link from 'next/link';
import ShopProduct from '@components/Products/ShopProduct';
import CategorySlide from '@components/Categories/CategorySlide';
import { BiSearch } from 'react-icons/bi';
import styles from '@styles/Shop/Shop.module.css';

const categories = [
   'Escriotiros ejecutivos y gerenciales',
   'Escriotiros operativos',
   'Trabajo colavorativo',
   'Sillas',
   'Soft Seating',
   'Recepciones',
   'Almacenamiento',
   'Divisiones',
   'Accesorios',
   'Muebles especiales',
];

const Shop = () => {
   return (
      <>
         <main className={styles.main}>
            <section className={styles.main__banner}>
               <div className={styles.banner__slide}>
                  <h1>Aqui encuentras tu espacio perfecto</h1>
                  <h2>Tenemos un gran catalogo de productos que se adaptan a lo que necesitas</h2>
                  <Link href={'/products'}>
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
                                 {/* <option value={'ordenar'}>ordenar</option> */}
                                 {categories.map((cat) => (
                                    <option value={cat}>{cat}</option>
                                 ))}
                              </select>
                           </div>
                           <div className={styles['filters-opt']}>
                              <p>Categoria:</p>
                              <select title="categoria">
                                 {/* <option value={'categoria'}>categoria</option> */}
                                 {categories.map((cat) => (
                                    <option value={cat}>{cat}</option>
                                 ))}
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
               <div className={styles.products__categories}>
                  <h2>Nuestras principaes categorias</h2>
                  <div className={styles.categories__cont}>
                     <CategorySlide />
                     <CategorySlide />
                     <CategorySlide />
                     <CategorySlide />
                  </div>
               </div>
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
