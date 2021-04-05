import React, { useCallback } from 'react';
import Head from 'next/head';
import AppLayout from '../components/Layout';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import useInput from '../hooks/useInput';

const LoginPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password);
    },
    [email, password]
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>로그인 | MINI LAND</title>
      </Head>
      <AppLayout>
        <h1>로그인</h1>
        <Form
          name="normal_login"
          onSubmit={onSubmit}
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '이메일을 입력하세요!',
              },
            ]}
          >
            <Input
              type="email"
              value={email}
              onChange={onChangeEmail}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="이메일"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력하세요!',
              },
            ]}
          >
            <Input
              type="password"
              value={password}
              onChange={onChangePassword}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>로그인 유지</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              비밀번호를 잊어버리셨나요?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              로그인
            </Button>
            처음이신가요?
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
};

export default LoginPage;
