import { notification } from 'antd';
import { queryFakeList, queryCurrent, queryArticleListByAuthorId, modifyArticle, removeArticle, addArticle } from '../services/account';

const Model = {
    namespace: 'accountCenter',
    state: {
        currentUser: {}, // 获取到的用户
        list: [],
        result: {},
    },
    effects: {
        *fetchCurrent({ payload }, { call, put }) {
            const response = yield call(queryCurrent, payload);
            yield put({
                type: 'saveCurrentUser',
                payload: response,
            });
            console.log(response);
        },
        *fetch({ payload }, { call, put }) {
            const response = yield call(queryArticleListByAuthorId, payload);
            yield put({
                type: 'queryList',
                payload: response,
            });
            console.log(response);
        },
        *modifyArticle({ payload }, { call, put }) {
            const response = yield call(modifyArticle, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                    message: '成功',
                    description:
                        '文章修改成功',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '文章修改失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const userId = localStorage.getItem('userId');
            const data = {
                articleAuthorId: userId,
            }
            const response2 = yield call(queryArticleListByAuthorId, data);
            yield put({
                type: 'queryList',
                payload: response2,
            })
            console.log(response2);
        },
        *removeArticle({ payload }, { call, put }) {
            const response = yield call(removeArticle, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                    message: '成功',
                    description:
                        '文章删除成功',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '文章删除失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const userId = localStorage.getItem('userId');
            const data = {
                articleAuthorId: userId,
            }
            const response2 = yield call(queryArticleListByAuthorId, data);
            yield put({
                type: 'queryList',
                payload: response2,
            })
            console.log(response2);
        },
        *addArticle({ payload }, { call, put }) {
            const response = yield call(addArticle, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                    message: '成功',
                    description:
                        '文章添加成功',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '文章添加失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const userId = localStorage.getItem('userId');
            const data = {
                articleAuthorId: userId,
            }
            const response2 = yield call(queryArticleListByAuthorId, data);
            yield put({
                type: 'queryList',
                payload: response2,
            })
            console.log(response2);
        },
    },
    reducers: {
        saveCurrentUser(state, action) {
            console.log(action.payload);
            return { ...state, currentUser: action.payload.user || {} };
        },
        queryList(state, action) {
            return { ...state, list: action.payload.list }
        },
        modifyResult(state, action) {
            return { ...state, result: action.payload }
        },
    },

}
export default Model;
