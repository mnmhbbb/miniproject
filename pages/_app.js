import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>MINI LAND</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
