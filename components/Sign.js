import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  & Button {
    margin-bottom: 3px;
  }
`;

const Sign = () => {
  return (
    <Btns>
      <Button>
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </Button>
      <Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </Button>
    </Btns>
  );
};

export default Sign;
