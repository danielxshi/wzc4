import Head from 'next/head';
import DesktopNav from './navigation/DesktopNavbar';
import FooterNavigation from './footer/FooterNavigation';
import FooterBottomBar from './footer/FooterBottomBar';
import Footer from './footer/Footer';
import MobileNav from './navigation/MobileMenu'


function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wenzhou Friendship Society</title>
      </Head>
      <DesktopNav />
      <MobileNav/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;