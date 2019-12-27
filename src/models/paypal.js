import { fakeSubmitForm } from '../services/paypal';

const Model = {
  namespace: 'formStepForm',
  state: {
    current: 'info',
    step: {
      payAccount: '373807645@qq.com',
      receiverAccount: 'test@example.com',
      receiverName: 'yanlan chen',
      amount: '500',
    },
  },
  effects: {
    *submitStepForm({ payload }, { call, put }) {
      yield call(fakeSubmitForm, payload);
      yield put({
        type: 'saveStepFormData',
        payload,
      });
      yield put({
        type: 'saveCurrentStep',
        payload: 'result',
      });
    },
  },
  reducers: {
    saveCurrentStep(state, { payload }) {
      return { ...state, current: payload };
    },

    saveStepFormData(state, { payload }) {
      return { ...state, step: { ...state.step, ...payload } };
    },
  },
};
export default Model;
