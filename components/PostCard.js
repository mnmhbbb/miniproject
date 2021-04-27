import React, { useCallback, useState } from 'react';
import { Card, Skeleton, Avatar, Popover, Button } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import PostEditForm from './PostEditForm';

const { Meta } = Card;

const PostCard = ({ post }) => {
  const { loadPostLoading, removePostLoading } = useSelector((store) => store.post);
  const { me } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const onToggleLike = useCallback(() => {
    if (!me) {
      return alert('로그인이 필요합니다!');
    }
    setLiked((prev) => !prev);
  }, [me]);

  const onClickRemove = useCallback(() => {
    dispatch({ type: REMOVE_POST_REQUEST, data: post.id });
  }, []);

  const onClickUpdate = useCallback(() => {
    setEditMode(true);
  }, []);

  const onCancelUpdate = useCallback(() => {
    setEditMode(false);
  }, []);

  return (
    <div>
      <Card
        style={{ marginBottom: '1rem' }}
        actions={[
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          me?.id === post.user.id && (
            <Popover
              key="more"
              content={
                <Button.Group>
                  <Button onClick={onClickUpdate}>수정</Button>
                  <Button type="danger" loading={removePostLoading} onClick={onClickRemove}>
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
        {editMode ? (
          <Meta
            avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
            title={post.user.nickname}
            description={<PostEditForm onCancelUpdate={onCancelUpdate} />}
          />
        ) : (
          <Skeleton loading={loadPostLoading} avatar>
            <Meta
              avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
              title={post.user.nickname}
              description={post.content}
            />
          </Skeleton>
        )}
      </Card>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.object,
    content: PropTypes.string,
  }),
};
export default PostCard;
