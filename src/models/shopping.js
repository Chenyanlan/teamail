import { notification } from 'antd';
import { getCartList, plusNum, minusNum, removeCart, getAllMoney, getDisplayPicture, getDetailPicture, getGoodsDetailById, getCartByIds, addCart, removePicture, addPicture, addStarGoods, getStarByUserGoodsId, changeStarGoods } from '../services/shopping';

const Model = {
    namespace: 'shopping',
    state: {
        cartList: [],
        result: {},
        allMoney: {},
        goodsDisplay: {},
        goodsDetail: {},
        goods: {},
        cart: {},
        starGoods: {},
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
        *getDisplayPicture({ payload }, { call, put }) {
            const response = yield call(getDisplayPicture, payload);
            yield put({
                type: 'queryGoodsDisplay',
                payload: response,
            })
            console.log(response)
        },
        *getDetailPicture({ payload }, { call, put }) {
            const response = yield call(getDetailPicture, payload);
            yield put({
                type: 'queryGoodsDetail',
                payload: response,
            })
            console.log(response)
        },
        *getGoods({ payload }, { call, put }) {
            const response = yield call(getGoodsDetailById, payload);
            yield put({
                type: 'queryGoods',
                payload: response,
            })
            console.log(response)
        },
        *getCartByIds({ payload }, { call, put }) {
            const response = yield call(getCartByIds, payload);
            yield put({
                type: 'queryCart',
                payload: response,
            })
            console.log(response);
        },
        *addCart({ payload }, { call, put }) {
            const response = yield call(getCartByIds, payload);
            yield put({
                type: 'queryCart',
                payload: response,
            })
            console.log(response);
            if (response.cart === null) {
                const response2 = yield call(addCart, payload);
                yield put({
                    type: 'modifyResult',
                    payload: response2,
                })
                console.log(response2)
                if (response2.success === true) {
                    notification.success({
                    message: '成功',
                    description:
                        '购物车添加成功',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                    });
                } else {
                    notification.error({
                        message: '失败',
                        description:
                        '购物车添加失败',
                        onClick: () => {
                        console.log('Notification Clicked!');
                        },
                    });
                }
            } else {
                const data = {
                    cartId: response.cart.cartId,
                }
                const response3 = yield call(plusNum, data);
                yield put({
                    type: 'modifyResult',
                    payload: response3,
                })
                console.log(response3);
                if (response3.success === true) {
                    notification.success({
                    message: '成功',
                    description:
                        '该商品已进入购物车，数量加1',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                    });
                } else {
                    notification.error({
                        message: '失败',
                        description:
                        '购物车添加失败',
                        onClick: () => {
                        console.log('Notification Clicked!');
                        },
                    });
                }
            }
        },
        *removePicture({ payload }, { call, put }) {
            const response = yield call(removePicture, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            const data = {
                pictureGoodsId: localStorage.getItem('goodsId'),
            }
            const response1 = yield call(getDisplayPicture, data);
            yield put({
                type: 'queryGoodsDisplay',
                payload: response1,
            })
            console.log(response1)
            const response3 = yield call(getDetailPicture, data);
            yield put({
                type: 'queryGoodsDetail',
                payload: response3,
            })
            console.log(response3)
        },
        *addGoodsPicture({ payload }, { call, put }) {
            const response = yield call(addPicture, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '图片添加成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '图片添加失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const data = {
                pictureGoodsId: localStorage.getItem('goodsId'),
            }
            const response1 = yield call(getDisplayPicture, data);
            yield put({
                type: 'queryGoodsDisplay',
                payload: response1,
            })
            console.log(response1)
            const response2 = yield call(getDetailPicture, data);
            yield put({
                type: 'queryGoodsDetail',
                payload: response2,
            })
            console.log(response2)
        },
        *addStarGoods({ payload }, { call, put }) {
            const response = yield call(getStarByUserGoodsId, payload);
            yield put({
                type: 'queryStarGoods',
                payload: response,
            })
            console.log(response);
            if (response.total>0) {
                if (response.list[0].starIfYes === 0) {
                    const response2 = yield call(changeStarGoods, payload);
                    yield put({
                        type: 'modifyResult',
                        payload: response2,
                    })
                    console.log(response2);
                    if (response2.success === true) {
                        notification.success({
                            message: '成功',
                            description:
                                '收藏成功',
                            onClick: () => {
                                console.log('Notification Clicked!');
                            },
                            });
                    } else {
                        notification.error({
                            message: '失败',
                            description:
                                '收藏失败',
                            onClick: () => {
                                console.log('Notification Clicked!');
                            },
                        });
                    }
                } else {
                    notification.warning({
                        message: '注意',
                        description:
                            '该商品已收藏',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                    });
                }
            } else {
                const response2 = yield call(addStarGoods, payload);
                yield put({
                    type: 'modifyResult',
                    payload: response2,
                })
                console.log(response2);
                if (response2.success === true) {
                    notification.success({
                        message: '成功',
                        description:
                            '收藏成功',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                        });
                } else {
                    notification.error({
                        message: '失败',
                        description:
                            '收藏失败',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                        });
                }
            }
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
        queryGoodsDisplay(state, action) {
            return { ...state, goodsDisplay: action.payload }
        },
        queryGoodsDetail(state, action) {
            return { ...state, goodsDetail: action.payload }
        },
        queryGoods(state, action) {
            return { ...state, goods: action.payload.goods }
        },
        queryCart(state, action) {
            return { ...state, cart: action.payload }
        },
        queryStarGoods(state, action) {
            return { ...state, starGoods: action.payload }
        },
    },
}
export default Model;
