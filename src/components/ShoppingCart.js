import Image from 'next/image';
import { BiX, BiXCircle } from 'react-icons/bi';
import styles from '@styles/Header/ShopCart.module.css';

const ShoppingCart = ({ cartToggle, setCartToggle }) => {
   return (
      <>
         <aside className={styles.shopcart__cont}>
            <span className={styles.shopcart__close} onClick={() => setCartToggle(!cartToggle)}>
               <BiX />
            </span>
            <h2>Carrito de compras</h2>
            <section className={styles['shopcart__items-cont']}>
               <article className={styles.item}>
                  <figure className={styles.item__img}>
                     <Image src="https://i.postimg.cc/dtnRhySq/Ofipartes-Musa-Version-Inza.png" alt="Poltrona Musa" layout="fill" />
                  </figure>
                  <div className={styles.item__desc}>
                     <p>Poltrona Musa</p>
                     <p>Sillas Interlocutoras</p>
                  </div>
                  <div className={styles.item__price}>
                     <p>$850000</p>
                     <label>
                        <span>Num.</span>
                        <input type="number" defaultValue={1}></input>
                     </label>
                  </div>
                  <span className={styles.item__delete}>
                     <BiXCircle />
                  </span>
               </article>
            </section>
            <section className={styles.shopcart__chk}>
               <div className={styles.shopcart__total}>
                  <p>Total</p>
                  <p>$850000</p>
               </div>
               <button className={styles['shopcart__chk-butt']}>Ir a pagar</button>
            </section>
         </aside>
      </>
   );
};

export default ShoppingCart;
