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
        }
    }

}
export default Model;