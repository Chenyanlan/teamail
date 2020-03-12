import { queryFakeList,queryCurrent } from '../services/account';

const Model={
    namespace:'accountCenter',
    state:{
        currentUser:{},// 获取到的用户
        list:[],
    },
    effects:{
        *fetchCurrent({ payload }, { call, put }) {
            const response = yield call(queryCurrent, payload);
            yield put({
                type: 'saveCurrentUser',
                payload: response,
            });
            console.log(response);
        },
        *fetch({ payload }, { call, put }) {
            const response = yield call(queryFakeList, payload);
            yield put({
                type: 'queryList',
                payload: Array.isArray(response) ? response : [],
            });
        },
    },
    reducers:{
        saveCurrentUser(state, action) {
            console.log(action.payload);
            return { ...state, currentUser: action.payload.user || {} };
        },
        queryList(state, action) {
            return { ...state, list: action.payload }
        },
    },

}
export default Model;
