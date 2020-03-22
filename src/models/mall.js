import { notification } from 'antd';
import { getGoodsList, getGoodsListByTitle, getGoodsListByClassify, getGoodsListByPricesegment, removeGoods, modifyGoods, addGoods } from '../services/mall';

const Model = {
    namespace: 'mall',
    state: {
        goodsList: [],
        result: {},
    },
    effects: {
        *getGoodsList({ payload }, { call, put }) {
            const response = yield call(getGoodsList, payload);
            yield put({
                type: 'queryGoodsList',
                payload: response,
            })
            console.log(response);
        },
        *getGoodsListByTitle({ payload }, { call, put }) {
            const response = yield call(getGoodsListByTitle, payload);
            yield put({
                type: 'queryGoodsList',
                payload: response,
            })
            console.log(response);
        },
        *getGoodsListByClassify({ payload }, { call, put }) {
            const response = yield call(getGoodsListByClassify, payload);
            yield put({
                type: 'queryGoodsList',
                payload: response,
            })
            console.log(response);
        },
        *getGoodsListByPricesegment({ payload }, { call, put }) {
            const response = yield call(getGoodsListByPricesegment, payload);
            yield put({
                type: 'queryGoodsList',
                payload: response,
            })
            console.log(response);
        },
        *removeGoods({ payload }, { call, put }) {
            const response = yield call(removeGoods, payload);
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
            const response2 = yield call(getGoodsList, payload);
            yield put({
                type: 'queryGoodsList',
                payload: response2,
            })
            console.log(response2)
        },
        *modifyGoods({ payload }, { call, put }) {
            const response = yield call(modifyGoods, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '商品修改成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '商品修改失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const response2 = yield call(getGoodsList, payload);
            yield put({
                type: 'queryGoodsList',
                payload: response2,
            })
            console.log(response2)
        },
        *addGoods({ payload }, { call, put }) {
            const response = yield call(addGoods, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '商品添加成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '商品添加失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const response2 = yield call(getGoodsList, payload);
            yield put({
                type: 'queryGoodsList',
                payload: response2,
            })
            console.log(response2)
        },
    },
    reducers: {
        queryGoodsList(state, action) {
            return { ...state, goodsList: action.payload.list }
        },
        modifyResult(state, action) {
            return { ...state, result: action.payload }
        },
    },

}
export default Model;
