import { notification } from 'antd';
import { getFakeList, queryFakeList, queryArticleList, queryArticleListByAuthorId, queryArticleListByPlate, removeArticle, modifyArticle, getArticleById, getArticleByTime, getArticleByToday, getCommentsByArticleId, addComment, getStarByUserArticleId, addStar, changeStar, getStarByArticleId } from '../services/bbs';


const Model = {
    namespace: 'listSearchArticles',
    state: {
        list: [],
        result: {},
        articlesList: [],
        plateList: [],
        plateList1: [],
        plateList2: [],
        article: {},
        nearList: [],
        todayList: [],
        comments: {},
        starLists: {},
        star: {},
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            const response = yield call(queryArticleList, payload);
            yield put({
                type: 'queryList',
                payload: response,
            });
            console.log(response);
        },

        *fetch1({ payload }, { call, put }) {
            const response = yield call(queryArticleList, payload);
            yield put({
                type: 'queryList',
                payload: response,
            });
            console.log(response);
        },
        *fetch2({ payload }, { call, put }) {
            const response = yield call(queryArticleListByAuthorId, payload);
            yield put({
                type: 'queryList',
                payload: response,
            });
            console.log(response);
        },

        *plate({ payload }, { call, put }) {
            const response = yield call(queryArticleListByPlate, payload);
            yield put({
                type: 'queryPlate',
                payload: response,
            });
            console.log(response);
        },
        *plate1({ payload }, { call, put }) {
            const response = yield call(queryArticleListByPlate, payload);
            yield put({
                type: 'queryPlate1',
                payload: response,
            });
            console.log(response);
        },
        *plate2({ payload }, { call, put }) {
            const response = yield call(queryArticleListByPlate, payload);
            yield put({
                type: 'queryPlate2',
                payload: response,
            });
            console.log(response);
        },
        *appendFetch({ payload }, { call, put }) {
            const response = yield call(getFakeList,payload);
            yield put({
                type:'appendList',
                payload:Array.isArray(response) ? response :[],
            });
        },
        *deleteArticles({ payload }, { call, put }) {
            const response = yield call(removeArticle, payload);
            yield put({
                type: 'modifyResult',
                payload: response,
            })
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
            const response2 = yield call(queryArticleList, payload);
            yield put({
                type: 'queryList',
                payload: response2,
            })
            console.log(response2);
        },
        *getArticleById({ payload }, { call, put }) {
            const response = yield call(getArticleById, payload);
            yield put({
                type: 'getArticle',
                payload: response,
            })
            console.log(response);
        },
        *getArticleByTime({ payload }, { call, put }) {
            const response = yield call(getArticleByTime, payload);
            yield put({
                type: 'getArticleNear',
                payload: response,
            })
            console.log(response);
        },
        *getArticleByToday({ payload }, { call, put }) {
            const response = yield call(getArticleByToday, payload);
            yield put({
                type: 'getArticleToday',
                payload: response,
            })
            console.log(response);
        },
        *getCommentByArticleId({ payload }, { call, put }) {
            const response = yield call(getCommentsByArticleId, payload);
            yield put({
                type: 'getComments',
                payload: JSON.stringify(response) === '{}' ? {list:[],total:0} : response,
            })
            console.log(response);
        },
        *addComment({ payload },{ call, put }) {
            const response = yield call(addComment, payload);
            yield put({
                type: 'modifyResult',
                payload:response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '评论添加成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '评论添加失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const articleId = localStorage.getItem('articleId');
            const data = {
                commentArticleId: articleId,
            }
            const response2 = yield call(getCommentsByArticleId, data);
            yield put({
                type: 'getComments',
                payload: response2,
            })
            console.log(response2);
        },
        *getStars({ payload }, { call, put }) {
            const response = yield call(getStarByArticleId, payload);
            yield put({
                type: 'getStar',
                payload: response,
            })
            console.log(response);
        },
        *getStarByUserArticleId({ payload }, { call, put }) {
            const response = yield call(getStarByUserArticleId, payload);
            yield put({
                type: 'getStarById',
                payload: response,
            })
            console.log(response);
            console.log(payload);
            if (response.total > 0) {
                if (response.list[0].starIFYes === 0) {
                    const response2 = yield call(changeStar, payload);
                    yield put({
                        type: 'modifyResult',
                        payload: response2,
                    })
                    console.log(response2)
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
                            '该文章已收藏',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                    });
                }
                
            } else {
                const response2 = yield call(addStar, payload);
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
            const data = {
                starArticleId: payload.starArticleId,
            }
            const response3 = yield call(getStarByArticleId, data);
            yield put({
                type: 'getStar',
                payload: response3,
            })
            console.log(response3);
        },
    },
    reducers: {
        queryList(state, action) {
            return { ...state, articlesList: action.payload.list }
        },
        queryPlate(state, action) {
            return { ...state, plateList: action.payload.list }
        },
        queryPlate1(state, action) {
            return { ...state, plateList1: action.payload.list }
        },
        queryPlate2(state, action) {
            return { ...state, plateList2: action.payload.list }
        },
        appendList(state, action) {
            return { ...state, list: state.list.concat(action.payload) };
        },
        modifyResult(state, action) {
            return { ...state, result: action.payload }
        },
        getArticle(state, action) {
            return { ...state, article: action.payload.article }
        },
        getArticleNear(state, action) {
            return { ...state, nearList: action.payload.list }
        },
        getArticleToday(state, action) {
            return { ...state, todayList: action.payload.list }
        },
        getComments(state, action) {
            return { ...state, comments: action.payload }
        },
        getStar(state, action) {
            return { ...state, starLists: action.payload }
        },
        getStarById(state, action) {
            return { ...state, star: action.payload }
        },
    },
}
export default Model;
