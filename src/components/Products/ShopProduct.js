import Link from 'next/link';
import Image from 'next/image';
import { BiMessageSquareAdd } from 'react-icons/bi';
import styles from '@styles/Shop/Products/ShopProduct.module.css';

const item = {
   image: 'https://i.postimg.cc/dtnRhySq/Ofipartes-Musa-Version-Inza.png',
   title: 'Poltrona Musa',
   category: 'Sillas Interlocutoras',
   price: 850000,
};

const ShopProduct = () => {
   return (
      <>
         <article className={styles.item__cont}>
            <Link href={'/Shop'}>
               <a className={styles.item__image}>
                  <Image src={item.image} layout="fill" />
               </a>
            </Link>
            <figure className={styles.item__add}>
               <BiMessageSquareAdd />
            </figure>
            <div className={styles.item__desc}>
               <h3>{item.title}</h3>
               <h4>{item.category}</h4>
               <p>{`$ ${item.price}`}</p>
            </div>
         </article>
      </>
   );
};

export default ShopProduct;
