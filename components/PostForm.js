import { Form, Input, Button } from 'antd';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddpostRequestAction } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const { addPostDone, addPostLoading } = useSelector((store) => store.post);

  const [text, setText] = useState('');
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(AddpostRequestAction(text));
  }, [text]);

  return (
    <>
      <Form onFinish={onSubmit} style={{ marginBottom: '2.5rem' }}>
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          required
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <Button
          type="primary"
          loading={addPostLoading}
          style={{ float: 'right' }}
          htmlType="submit"
        >
          등록
        </Button>
      </Form>
    </>
  );
};

export default PostForm;
