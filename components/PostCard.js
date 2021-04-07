import React, { useState, useCallback } from 'react';
import { Card, Skeleton, Avatar, List, Comment, Popover, Button } from 'antd';
import {
  CommentOutlined,
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const { Meta } = Card;
const test = `떨려오는 별빛 반짝이는데
넌 어디를 보고 있는지
금방이라도 사라질 것 같은데
불을 켜줘 심장이 깜깜해
오늘도 기분은 시무룩해
너의 마음 안에 있는 내 모습은
내 맘 같지 않아
어느 틈에 놓쳐버린 걸까
좋아하는 만큼 별은 떠오르고
여전히 나는 어쩔 줄 모르고
안개 속에 갇힌
그 말투 속에 담긴
도무지 알 수 없는
니가 생각나는 밤
떨려오는 별빛 반짝이는데
넌 어디를 보고 있는`;

const PostCard = ({ post }) => {
  const { loadPostLoading, id } = useSelector((store) => store.post);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onClickLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다!');
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, []);
  const onClickUnlike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다!');
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  // 댓글 보기
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div>
      <Card
        actions={[
          <CommentOutlined key="commnet" onClick={onToggleComment} />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="favorited"
              onClick={onClickUnlike}
            />
          ) : (
            <HeartOutlined key="favorited" onClick={onClickLike} />
          ),
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.user.id === id ? (
                  <>
                    {!post.RetweetId && (
                      <Button onClick={onClickUpdate}>수정</Button>
                    )}
                    <Button
                      type="danger"
                      loading={removePostLoading}
                      onClick={onRemovePost}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
          ,
        ]}
      >
        <Skeleton loading={loadPostLoading} avatar active>
          <Meta
            avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
            title={post.user.nickname}
            description={post.content}
          />
        </Skeleton>
      </Card>
      {commentFormOpened && (
        <List
          header={`${post.comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={post.comments}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.user.nickname}
                avatar={
                  <Link href={`/user/${item.user.id}`} prefetch={false}>
                    <a>
                      <Avatar>{item.user.nickname[0]}</Avatar>
                    </a>
                  </Link>
                }
                content={item.content}
              />
            </li>
          )}
        />
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    // id: PropTypes.number,
    // user: PropTypes.number,
    content: PropTypes.string,
    // comments: PropTypes.arrayOf(PropTypes.any),
    // images: PropTypes.arrayOf(PropTypes.any),
  }),
};
export default PostCard;
