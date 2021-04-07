import React from 'react';
import { Col, Menu, Row, Input } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Sign from './Sign';
import UserProfile from './UserProfile';
import styled from 'styled-components';

const Global = styled.div`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col {
    padding: 10px !important;
  }
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((store) => store.user);

  return (
    <Global>
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
          {me ? <UserProfile /> : <Sign />}
        </Col>
        <Col xs={24} md={18} style={{ background: '#e5e5e5' }}>
          {children}
        </Col>
      </Row>
    </Global>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
