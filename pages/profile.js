import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Empty } from 'antd';

const Profile = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>프로필 | MINI LAND</title>
    </Head>
    <Layout>
      <div style={{ height: '90vh' }}>
        <h1>프로필</h1>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
    </Layout>
  </>
);

export default Profile;
