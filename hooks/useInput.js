import { useCallback, useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.vlaue);
  }, []);
  return [value, handler];
};
