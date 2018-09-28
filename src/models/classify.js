// import { routerRedux } from 'dva/router';
import { getClassifyDataApi } from '../services/classify';

export default {
    namespace: 'classify',
    
    state: {
        data: ''
    },

    // 订阅数据源，需要根据dispatch相应的action
    subscriptions: {
        
    },

    // 从服务端获取数据，发起一个action给reducers
    effects: {
        *getClassifyData({ payload }, { call, put }) {
            // 注解4：定义service中定义好的请求接口
            const result = yield call(getClassifyDataApi);

            yield put({
                type: 'getData',
                payload: {
                    eData: result.data
                }
            })
        }
    },

    // 唯一能改变state的地方
    reducers: {
        // 改变state中的值（外部通过dispatch调用方法，此处赋值）
        'getData'(state, { payload: { eData } }) {
            // 注解5：第一个data是state的，第二个eData是payload的
            return { ...state, data: eData };
        },
    },
};