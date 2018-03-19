
import { getData } from '../services/data';
import { message } from 'antd';
export default {

  namespace: 'data',

  state: {
    datas: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch'})
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(getData)
      if(data){
        // console.log(data)
        yield put({ type: 'save' , payload: { datas: data, }});
      }else{
        message.error('数据出错啦')
      }
    },
  },

  reducers: {
    save(state, action) {
      // console.log(action)
      return { ...state, ...action.payload };
    },
  },

};
