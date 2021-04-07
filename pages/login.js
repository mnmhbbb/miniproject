import React, { useCallback } from 'react';
import Head from 'next/head';
import { AiOutlineHome } from 'react-icons/ai';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import useInput from '../hooks/useInput';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onFinish = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
    router.push('/');
  }, [email, password]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>로그인 | MINI LAND</title>
      </Head>
      <Link href="/">
        <a>
          <h1>
            <AiOutlineHome />
          </h1>
        </a>
      </Link>
      <h1>로그인</h1>
      <Form
        name="normal_login"
        onFinish={onFinish}
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
    </>
  );
};

export default LoginPage;
