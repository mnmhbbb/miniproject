import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>프로필 | MINI LAND</title>
      </Head>
      <Layout>
        <h1>프로필</h1>
      </Layout>
    </>
  );
};

export default Profile;
