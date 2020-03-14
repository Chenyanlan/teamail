import { notification } from 'antd';
import { wikiDetailById, modifywikiDetailById } from '../services/admin';
import { wikiDetail, wikiIndexList, wikiDetailList, removeWikiDetail, addWikiDetail } from '@/services/wiki';

const Model = {
    namespace: 'wikiAdmin',
    state: {
       result: {},
       success: {},
       wikiIndex: {},
       wikiDetail: {},
    },
    effects: {
        *wikiAdminById({ payload }, { call, put }) {
            const response = yield call(wikiDetailById, payload);
            yield put({
                type: 'queryListById',
                payload: response,
            })
        },
        *modifyWikiAdminById({ payload }, { call, put }) {
            const response = yield call(modifywikiDetailById, payload);
            console.log(payload);
            yield put({
                type: 'modifyQueryListById',
                payload: response,
            });
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '百科详情修改成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '百科详情修改失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const data = {
                wikiId:localStorage.getItem('adminWikiId'),
            }
            const response2 = yield call(wikiDetailList, data);
            yield put({
                type: 'getWikiDetails',
                payload: response2,
            })
            console.log(response2)
        },
        *getWikiIndex({ payload }, { call, put }) {
            const response = yield call(wikiIndexList, payload);
            yield put({
                type: 'getWikiIndexs',
                payload: response,
            })
            console.log(response)
        },
        *getWikiDetail({ payload }, { call, put }) {
            const response = yield call(wikiDetailList, payload);
            yield put({
                type: 'getWikiDetails',
                payload: response,
            })
            console.log(response)
        },
        *removeWikiDetail({ payload }, { call, put }) {
            const response = yield call(removeWikiDetail, payload);
            yield put({
                type: 'queryListById',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '百科详情删除成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '百科详情删除失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            const data = {
                wikiId:localStorage.getItem('adminWikiId'),
            }
            const response2 = yield call(wikiDetailList, data);
            yield put({
                type: 'getWikiDetails',
                payload: response2,
            })
            console.log(response2)
        },
        *resetWikiDetail({payload}, {call, put}) {
            const response = yield call(wikiDetailList, payload);
            yield put({
                type: 'resetWikiDetails',
                payload: response,
            })
            console.log(response)
        },
        *addWikiDetail({ payload }, { call, put}) {
            const response = yield call(addWikiDetail, payload);
            yield put({
                type: 'queryListById',
                payload: response,
            })
            console.log(response);
            if (response.success === true) {
                notification.success({
                message: '成功',
                description:
                    '百科详情添加成功',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
            } else {
                notification.error({
                    message: '失败',
                    description:
                    '百科详情添加失败',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
        },
    },
    reducers: {
        queryListById(state, action) {
            return { ...state, result: action.payload }
        },
        modifyQueryListById(state, action) {
            return { ...state, success: action.payload }
        },
        getWikiIndexs(state, action) {
            return { ...state, wikiIndex: action.payload }
        },
        getWikiDetails(state, action) {
            return { ...state, wikiDetail: action.payload }
        },
        resetWikiDetails(state, action) {
            return { ...state, wikiDetail: {} }
        },
    },
}

export default Model;