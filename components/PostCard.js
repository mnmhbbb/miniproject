import React, { useCallback } from 'react';
import { Card, Skeleton, Avatar, Popover, Button } from 'antd';
import { EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_POST_REQUEST } from '../reducers/post';

const { Meta } = Card;

const PostCard = ({ post }) => {
  const { loadPostLoading, removePostLoading } = useSelector(
    (store) => store.post
  );
  const { me } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const onClickLike = useCallback(() => {
    if (!me) {
      return alert('로그인이 필요합니다!');
    }
  }, []);

  const onClickRemove = useCallback(() => {
    dispatch({ type: REMOVE_POST_REQUEST, data: post.id });
  }, []);

  return (
    <div>
      <Card
        style={{ marginBottom: '1rem' }}
        actions={[
          <HeartOutlined key="favorited" onClick={onClickLike} />,
          me?.id === post.user.id && (
            <Popover
              key="more"
              content={
                <Button.Group>
                  <Button
                    type="danger"
                    loading={removePostLoading}
                    onClick={onClickRemove}
                  >
                    삭제
                  </Button>
                </Button.Group>
              }
            >
              <EllipsisOutlined />
            </Popover>
          ),
        ]}
      >
        <Skeleton loading={loadPostLoading} avatar>
          <Meta
            avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
            title={post.user.nickname}
            description={post.content}
          />
        </Skeleton>
      </Card>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.object,
    content: PropTypes.string,
  }),
};
export default PostCard;
