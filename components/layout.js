import Head from 'next/head';
import Nav from './navigation/Navbar';
import FooterNavigation from './footer/FooterNavigation';
import FooterBottomBar from './footer/FooterBottomBar';
import Footer from './footer/Footer';


function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wenzhou Friendship Society</title>
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;