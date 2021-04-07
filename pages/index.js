import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector((store) => store.user);
  const { mainPosts, morePosts, loadPostsLoading } = useSelector(
    (store) => store.post
  );
  const dispatch = useDispatch();

  // 기본적으로 불러올 데이터
  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  // 인피니트스크롤링
  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 100
      ) {
        if (morePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1].id,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, morePosts, loadPostsLoading]);

  return (
    <Layout>
      <h1>홈</h1>
      {me && <PostForm />}
      {mainPosts.map((v) => (
        <PostCard key={v.id} post={v} />
      ))}
    </Layout>
  );
};

export default Home;
