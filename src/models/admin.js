import { wikiDetailById, modifywikiDetailById } from '../services/admin';
import { wikiDetail } from '@/services/wiki';

const Model = {
    namespace: 'wikiAdmin',
    state: {
       result: {},
       success:{},
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
            // const response2 = yield call(wikiDetailById, payload.detailId);
            // yield put({
            //     type: 'queryListById',
            //     payload: response,
            // })
            // console.log(response2);
        },
    },
    reducers: {
        queryListById(state, action) {
            return { ...state, result: action.payload }
        },
        modifyQueryListById(state, action) {
            return { ...state, success: action.payload }
        },
    },
}

export default Model;