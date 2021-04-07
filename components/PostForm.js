import { Form, Input, Button } from 'antd';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddpostRequestAction } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, addPostDone } = useSelector((store) => store.post);
  const imageInput = useRef();

  const [text, setText] = useState('');
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onClickImg = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(() => {
    dispatch(AddpostRequestAction(text));
  }, [text]);

  const onClickRemove = useCallback(() => {}, []);

  return (
    <>
      <Form onFinish={onSubmit}>
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          required
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImg}>이미지 첨부</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          등록
        </Button>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button onClick={onClickRemove}>제거</Button>
            </div>
          </div>
        ))}
      </Form>
    </>
  );
};

export default PostForm;
