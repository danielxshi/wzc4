import '../styles/global.scss';
import Layout from '../components/layout';
import React, { useRef, useEffect, useState } from 'react';



function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
