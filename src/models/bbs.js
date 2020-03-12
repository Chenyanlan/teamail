import { getFakeList,queryFakeList,testList } from '../services/bbs';

const Model = {
    namespace:'listSearchArticles',
    state:{
        list:[],
        result:{}
    },
    effects:{
        *fetch({payload},{call,put}) {
            const response = yield call(getFakeList,payload);
            yield put({
                type:'queryList',
                payload:Array.isArray(response.list) ? response.list : []
            });
        },

        *fetch2({payload},{call,put}) {
            const response = yield call(queryFakeList,payload);
            yield put({
                type:'queryList',
                payload:Array.isArray(response) ? response : []
            });
        },

        *appendFetch({payload},{call,put}) {
            const response = yield call(getFakeList,payload);
            yield put({
                type:'appendList',
                payload:Array.isArray(response) ? response :[],
            });
        },

        // *testList({payload},{call,put}){
        //     const response = yield call(testList,payload);
        //     console.log(response);
        //     yield put({
        //         type:'queryList',
        //         payload:response,
        //     })
        // }
    },
    reducers:{
        queryList(state,action){
            return {...state,list:action.payload}
        },
        appendList(state,action){
            return {...state,list:state.list.concat(action.payload)};
        },
       
    }
}
export default Model;
