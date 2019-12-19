import { queryFakeList,queryCurrent } from '../services/account';

const Model={
    namespace:'accountCenter',
    state:{
        currentUser:{},// 获取到的用户
        list:[],
    },
    effects:{
        *fetchCurrent(_,{call,put}){
            const response = yield call(queryCurrent);
            yield put({
                type:'saveCurrentUser',
                payload:response,
            });
        },
        *fetch({payload},{call,put}){
            const response = yield call(queryFakeList,payload);
            yield put({
                type:'queryList',
                payload:Array.isArray(response) ? response : [],
            });
        },
    },
    reducers:{
        saveCurrentUser(state,action){
            return {...state,currentUser:action.payload||{}};
        },
        queryList(state,action){
            return {...state,list:action.payload}
        }
    }

}
export default Model;