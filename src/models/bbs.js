import { notification } from 'antd';
import { getFakeList, queryFakeList, queryArticleList, queryArticleListByAuthorId, queryArticleListByPlate, removeArticle, modifyArticle, getArticleById, getArticleByTime, getArticleByToday } from '../services/bbs';


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

        *appendFetch({payload},{call,put}) {
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
    },
}
export default Model;
