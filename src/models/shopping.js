import { notification } from 'antd';
import { getCartList, plusNum, minusNum, removeCart, getAllMoney } from '../services/shopping';

const Model = {
    namespace: 'shopping',
    state: {
        cartList: [],
        result: {},
        allMoney: {},
    },
    effects: {
        *getCartList({ payload }, { call, put }) {
            const response = yield call(getCartList, payload);
            yield put({
                type: 'queryCarts',
                payload: response,
            })
            console.log(response)
        },
        *plusNum({ payload }, { call, put }) {
            const response = yield call(plusNum, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '数量增加成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '数量增加失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const data = {
                cartUserId: localStorage.getItem('userId'),
            }
            const response2 = yield call(getCartList, data);
            yield put({
                type: 'queryCarts',
                payload: response2,
            })
            console.log(response2);
            const response3 = yield call(getAllMoney, data);
            yield put({
                type: 'modifyAllMoney',
                payload: response3,
            })
        },
        *minusNum({ payload }, { call, put }) {
            const response = yield call(minusNum, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            const data = {
                cartUserId: localStorage.getItem('userId'),
            }
            const response2 = yield call(getCartList, data);
            yield put({
                type: 'queryCarts',
                payload: response2,
            })
            console.log(response2);
            const response3 = yield call(getAllMoney, data);
            yield put({
                type: 'modifyAllMoney',
                payload: response3,
            })
        },
        *removeCart({ payload }, { call, put }) {
            const response = yield call(removeCart, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '商品删除成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '商品删除失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const data = {
                cartUserId: localStorage.getItem('userId'),
            }
            const response2 = yield call(getCartList, data);
            yield put({
                type: 'queryCarts',
                payload: response2,
            })
            console.log(response2);
            const response3 = yield call(getAllMoney, data);
            yield put({
                type: 'modifyAllMoney',
                payload: response3,
            })
        },
        *getAllMoney({ payload }, { call, put }) {
            const response = yield call(getAllMoney, payload);
            yield put({
                type: 'modifyAllMoney',
                payload: response,
            })
            console.log(response);
        },
    },
    reducers: {
        queryCarts(state, action) {
            return { ...state, cartList: action.payload.list }
        },
        modifyResult(state, action) {
            return { ...state, result: action.payload }
        },
        modifyAllMoney(state, action) {
            return { ...state, allMoney: action.payload }
        },
    },
}
export default Model;
