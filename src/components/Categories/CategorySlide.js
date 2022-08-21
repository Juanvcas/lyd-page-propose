import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Shop/Categories/CategorySlide.module.css';

const category = {
   image: 'https://i.postimg.cc/sD9gRVts/HO-ESK-Post03.png',
   title: 'Escritorios',
   description: 'Nuestra líneas de escritorios para oficina y home office.',
   id: 1,
};

const CategorySlide = () => {
   return (
      <>
         <article className={styles.cat__cont}>
            <figure className={styles.cat__image}>
               <Image src={category.image} alt={category.title} width={1000} height={1000} layout={'responsive'} />
            </figure>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <Link href={'/shop'}>
               <a>View in store</a>
            </Link>
         </article>
      </>
   );
};

export default CategorySlide;
