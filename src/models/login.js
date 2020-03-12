import { routerRedux } from 'dva/router';
import { stringify } from 'querystring';
import { fakeAccountLogin, AccountLogin } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(AccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully
      console.log(response);
      if (response.status === 'ok') {
        console.log('success');
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        console.log(redirect);
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          console.log(redirectUrlParams);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            console.log(redirect);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }

        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *logout(_, { put }) {
      const { redirect } = getPageQuery(); // redirect

      if (window.location.pathname !== '/user/login' && !redirect) {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          }),
        );
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      console.log(payload);
      if (payload.success === false) {
        setAuthority('guest');
        return { ...state, status: 'error', type: 'account' };
      }
        setAuthority(payload.list[0].userAuthority, payload.list[0].userName,payload.list[0].userId);
        return { ...state, status: payload.status, type: payload.type };
      // setAuthority(payload.currentAuthority);
    },
  },
};
export default Model;
