import { wikiList, wikiDetail } from '../services/wiki';

const Model = {
    namespace: 'listWiki',
    state: {
        result: {},
        detailResult: {},
    },
    effects: {
        *wikiList({ payload }, { call, put }) {
            const response = yield call(wikiList, payload);
            console.log(response);
            yield put({
                type: 'queryList',
                payload: response,
            })
        },
        *wikiDetail({ payload }, { call, put }) {
            const response = yield call(wikiDetail, payload);
            yield put({
                type: 'queryDetail',
                payload: response,
            })
        },
    },
    reducers: {
        queryList(state, action) {
            return { ...state, result: action.payload }
        },
        queryDetail(state, action) {
            return { ...state, detailResult: action.payload }
        },
    },
}

export default Model;
