import { queryCity, queryCurrent, queryProvince, query as queryUsers, queryCurrentUser, uploadImg, modifyCurrentUser } from '../services/accountsetting';

const Model = {
    namespace: 'accountSettings',
    state: {
        currentUser: {},
        province: [],
        city: [],
        isLoading: false,
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
            const response = yield call(queryCurrent);
            yield put({
                type: 'saveCurrentUser',
                payload: response,
            });
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
        *fetchProvince(_, { call, put }) {
            yield put({
              type: 'changeLoading',
              payload: true,
            });
            const response = yield call(queryProvince);
            yield put({
              type: 'setProvince',
              payload: response,
            });
          },
      
        *fetchCity({ payload }, { call, put }) {
            const response = yield call(queryCity, payload);
            yield put({
                type: 'setCity',
                payload: response,
            });
        },
        *fetchUploadImg({ payload }, { call, put }) {
            const response = yield call(uploadImg, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
        },
        *modifyUser({ payload },{ call, put }) {
            const response = yield call(modifyCurrentUser,payload);
            yield put({
                type: 'modifyResult',
                payload:response,
            })
            console.log(response);
        },
    },
    reducers: {
        saveCurrentUser(state, action) {
            return { ...state, currentUser: action.payload.user || {} };
        },
    
        changeNotifyCount(state = {}, action) {
            return {
                ...state,
                currentUser: {
                ...state.currentUser,
                notifyCount: action.payload.totalCount,
                unreadCount: action.payload.unreadCount,
                },
            };
        },
    
        setProvince(state, action) {
            return { ...state, province: action.payload };
        },
    
        setCity(state, action) {
            return { ...state, city: action.payload };
        },
    
        changeLoading(state, action) {
            return { ...state, isLoading: action.payload };
        },

        modifyResult(state, action) {
            return { ...state, result: action.payload };
        },
    },
}
export default Model;
