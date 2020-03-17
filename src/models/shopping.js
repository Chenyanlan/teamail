import { notification } from 'antd';
import { getCartList, plusNum, minusNum, removeCart } from '../services/shopping';

const Model = {
    namespace: 'shopping',
    state: {
        cartList: [],
        result: {},
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
        },
    },
    reducers: {
        queryCarts(state, action) {
            return { ...state, cartList: action.payload.list }
        },
        modifyResult(state, action) {
            return { ...state, result: action.payload }
        },
    },
}
export default Model;
