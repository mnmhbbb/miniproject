import React, { useCallback, useEffect } from 'react';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { UPDATE_POST_REQUEST } from '../reducers/post';

const PostEditForm = ({ onCancelUpdate }) => {
  const dispatch = useDispatch();
  const { updatePostLoading, updatePostDone } = useSelector((state) => state.post);
  const [editText, setEditText] = useInput('');

  useEffect(() => {
    if (updatePostDone) {
      onCancelUpdate();
    }
  }, [updatePostDone]);

  const onSubmitUpdate = useCallback(
    (editText) => () => {
      dispatch({ type: UPDATE_POST_REQUEST, data: { content: editText } });
    },
    [],
  );

  return (
    <>
      <Input.TextArea value={editText} onChange={setEditText} />
      <Button.Group style={{ float: 'right' }}>
        <Button loading={updatePostLoading} onClick={onSubmitUpdate(editText)}>
          수정
        </Button>
        <Button type="danger" onClick={onCancelUpdate}>
          취소
        </Button>
      </Button.Group>
    </>
  );
};

PostEditForm.propTypes = {
  onCancelUpdate: PropTypes.func,
};

export default PostEditForm;
