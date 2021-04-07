import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { Form, Input, Checkbox, Button } from 'antd';
import { useRouter } from 'next/router';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';
import styled from 'styled-components';

const SignUpStyle = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & Input {
    width: 100%;
  }
`;

const SignupPage = () => {
  const { signUpDone } = useSelector((store) => store.user);
  const [nickname, onChangeNickname] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordConfirm, onChangePasswordConfirm] = useInput('');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (signUpDone) {
      alert('회원가입이 완료되었습니다!');
      router.push('/login');
    }
  });

  const onFinish = useCallback(() => {
    dispatch({ type: SIGN_UP_REQUEST });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>회원가입 | MINI LAND</title>
      </Head>
      <SignUpStyle>
        <Link href="/">
          <a>
            <h1>
              <AiOutlineHome />
            </h1>
          </a>
        </Link>
        <h1>회원가입</h1>
        <Form name="register" scrollToFirstError onFinish={onFinish}>
          <Form.Item
            name="nickname"
            label="닉네임"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: '닉네임을 입력하세요!',
                whitespace: true,
              },
            ]}
          >
            <Input value={nickname} onChange={onChangeNickname} />
          </Form.Item>

          <Form.Item
            name="email"
            label="이메일"
            rules={[
              {
                type: 'email',
                message: '올바른 이메일을 입력하세요!',
              },
              {
                required: true,
                message: '이메일을 입력하세요!',
              },
            ]}
          >
            <Input value={email} onChange={onChangeEmail} />
          </Form.Item>

          <Form.Item
            name="password"
            label="비밀번호"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력하세요!',
              },
            ]}
            hasFeedback
          >
            <Input.Password value={password} onChange={onChangePassword} />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="비밀번호 확인"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '비밀번호를 입력하세요!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('비밀번호가 일치하지 않습니다.')
                  );
                },
              }),
            ]}
          >
            <Input.Password
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('동의하셔야 합니다.')),
              },
            ]}
          >
            <Checkbox>회원가입에 동의합니다.</Checkbox>
          </Form.Item>
          <Form.Item style={{ float: 'right' }}>
            <Button type="primary" htmlType="submit">
              가입
            </Button>
          </Form.Item>
        </Form>
      </SignUpStyle>
    </>
  );
};

export default SignupPage;
