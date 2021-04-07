import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((store) => store.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction);
  });

  return (
    <>
      <Card>
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        />
        <Button onClick={onLogout} loading={logOutLoading}>
          로그아웃
        </Button>
      </Card>
    </>
  );
};

export default UserProfile;
