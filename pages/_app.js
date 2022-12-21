import "../styles/global.scss";
import Layout from "../components/layout";
import React, { useRef, useEffect, useState } from "react";
import ContactModal from "../components/contact/ContactModal";
import Topbar from "../components/navigation/Topbar";
function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div id="modal-root"></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
