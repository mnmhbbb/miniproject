import React, { useState } from 'react';
import { Col, Menu, Row, Input } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Sign from './Sign';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>홈</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <Sign />}
        </Col>
        <Col xs={24} md={18} style={{ background: '#e5e5e5' }}>
          {children}
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
