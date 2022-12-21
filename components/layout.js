import Head from "next/head";
import DesktopNav from "./navigation/DesktopNavbar";
import FooterNavigation from "./footer/FooterNavigation";
import FooterBottomBar from "./footer/FooterBottomBar";
import Footer from "./footer/Footer";
import MobileNav from "./navigation/MobileNav";
import { useRouter } from "next/router";

export const renderSwitch = (params) => {
  const router = useRouter();
  if (router.pathname !== "/" ) {
    // console.log("renderSwitch func " + router.pathname);
    return (<DesktopNav></DesktopNav>)
  } else if (router.pathname == "/") {
    return (<></>);
  }
}
;

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Wenzhou Friendship Society</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {renderSwitch()}
      {/* <DesktopNav /> */}
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
