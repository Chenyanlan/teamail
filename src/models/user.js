import { queryCurrent, query as queryUsers, queryCurrentUser, queryUserList, modifyUser, removeUser } from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
    userList: [],
    result: {},
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent(_, { call, put }) {
      // const userId = localStorage.getItem('userId');
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
      console.log(response);
    },

    *fetchCurrentUser(_, { call, put }) {
      const userId = localStorage.getItem('userId');
      const data = { userId };
      const response = yield call(queryCurrentUser, data);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
      console.log(response);
    },

    *userLists(_, { call, put }) {
      const response = yield call(queryUserList);
      yield put({
        type: 'quertUserList',
        payload: response,
      });
    },
    *modifyUser({ payload }, { call, put }) {
      const response = yield call(modifyUser, payload);
      yield put({
        type: 'modifyResult',
        payload: response,
      });
      console.log(response);
    },
    *removeUser({ payload }, { call, put }) {
      const response = yield call(removeUser, payload);
      yield put({
        type: 'modifyResult',
        payload: response,
      });
      console.log(response);
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      console.log(action.payload)
      if (action.payload.success === false) {
        console.log("in");
        return { ...state, currentUser: { userName: '游客', userId: null, userAuthority: 'guest' } }
      }
      return { ...state, currentUser: action.payload.user };
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
        },
      };
    },

    quertUserList(state, action) {
      return { ...state, userList: action.payload.list }
    },
    modifyResult(state, action) {
      return { ...state, result: action.payload }
    },
  },
};
export default UserModel;
