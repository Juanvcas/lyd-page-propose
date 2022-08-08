import MainLayout from '@layout/MainLayout';
import '@styles/globals.css';

function LyD({ Component, pageProps }) {
   return (
      <>
         <MainLayout>
            <Component {...pageProps} />
         </MainLayout>
      </>
   );
}

export default LyD;
