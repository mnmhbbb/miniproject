// 유저 정보 더미데이터
const dummyUser = {
  id: 1,
  nickname: '앙꼬',
  Posts: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  user: null,
};

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = {
  type: 'LOG_OUT',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
