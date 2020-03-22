import { notification } from 'antd';
import { getLunboPicture, removeLunboPicture, addLunboPicture } from '../services/welcome';

const Model = {
    namespace: 'welcome',
    state: {
        lunbo: [],
        result: {},
    },
    effects: {
        *getLunbos({ payload }, { call, put }) {
            const response = yield call(getLunboPicture, payload);
            yield put({
                type: 'queryLunbo',
                payload: response,
            })
            console.log(response);
        },
        *removeLunboPicture({ payload }, { call, put }) {
            const response = yield call(removeLunboPicture, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '轮播图删除成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '轮播图删除失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const response2 = yield call(getLunboPicture, payload);
            yield put({
                type: 'queryLunbo',
                payload: response2,
            })
            console.log(response2);
        },
        *addLunboPicture({ payload }, { call, put }) {
            const response = yield call(addLunboPicture, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response)
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '轮播图添加成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '轮播图添加失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const response2 = yield call(getLunboPicture, payload);
            yield put({
                type: 'queryLunbo',
                payload: response2,
            })
            console.log(response2)
        },
    },
    reducers: {
        queryLunbo(state, action) {
            return { ...state, lunbo: action.payload.list }
        },
        modifyResult(state, action) {
            return { ...state, result: action.payload }
        },
    },
}

export default Model;
