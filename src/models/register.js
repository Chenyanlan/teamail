import { AccountRegister } from '../services/register';

const Model = {
    namespace: 'register',
    state: {
        result: {},
    },
    effects: {
        *register({ payload }, { call, put }) {
            const response = yield call(AccountRegister,payload);
            yield put({
                type: 'queryResult',
                payload: response,
            })
            console.log(response);
        }
    },
    reducers: {
        queryResult(state, action) {
            return { ...state, result: action.payload }
        },
    },
}

export default Model;
