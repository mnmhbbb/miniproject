import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  });

  return (
    <>
      <Card>
        <Card.Meta
          avatar={<Avatar>{user.nickname}</Avatar>}
          title={user.nickname}
        />
        <Button onClick={onLogout}>로그아웃</Button>
      </Card>
    </>
  );
};

export default UserProfile;
