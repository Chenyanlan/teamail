import { notification } from 'antd';
import { queryFakeList, queryCurrent, queryArticleListByAuthorId, modifyArticle, removeArticle, addArticle, getCommentByAuthorId, removeComment, getStarArticleByUserID, removeStar, getStarGoodsByUserId, removeStarGoods } from '../services/account';

const Model = {
    namespace: 'accountCenter',
    state: {
        currentUser: {}, // 获取到的用户
        list: [],
        result: {},
        comments: {},
        starList: [],
        starGoodsList: [],
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
        *getCommentByAuthorId({ payload }, { call, put }) {
            const response = yield call(getCommentByAuthorId, payload);
            yield put({
                type: 'getComments',
                payload: response,
            })
            console.log(response);
        },
        *removeComment({ payload }, { call, put }) {
            const response = yield call(removeComment, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                    message: '成功',
                    description:
                        '评论删除成功',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '评论删除失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const userId = localStorage.getItem('userId');
            const data = {
                commentAuthorId:userId,
            }
            const response2 = yield call(getCommentByAuthorId, data);
            yield put({
                type: 'getComments',
                payload: response2,
            })
            console.log(response);
        },
        *getStarArticleByUserID({ payload }, { call, put }) {
            const response = yield call(getStarArticleByUserID, payload);
            yield put({
                type: 'getStarList',
                payload: response,
            })
            console.log(response);
        },
        *removeStar({ payload }, { call, put }) {
            const response = yield call(removeStar, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                    message: '成功',
                    description:
                        '取消收藏成功',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '取消收藏失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const data = {
                starUserId: localStorage.getItem('userId'),
            }
            const response2 = yield call(getStarArticleByUserID, data);
            yield put({
                type: 'getStarList',
                payload: response2,
            })
            console.log(response2);
        },
        *getStarGoodsByUserId({ payload }, { call, put }) {
            const response = yield call(getStarGoodsByUserId, payload);
            yield put({
                type: 'getStarGoodsList',
                payload: response,
            })
            console.log(response);
        },
        *removeStarGoods({ payload }, { call, put }) {
            const response = yield call(removeStarGoods, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                    message: '成功',
                    description:
                        '取消收藏成功',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '取消收藏失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const data = {
                starUserId: localStorage.getItem('userId'),
            }
            const response2 = yield call(getStarGoodsByUserId, data);
            yield put({
                type: 'getStarGoodsList',
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
        getComments(state, action) {
            return { ...state, comments: action.payload }
        },
        getStarList(state, action) {
            return { ...state, starList: action.payload.list }
        },
        getStarGoodsList(state, action) {
            return { ...state, starGoodsList: action.payload.list }
        },

    },

}
export default Model;
