import { routerRedux } from 'dva/router';
import { getLoginApi } from '../services/login';

export default {
    namespace: 'login',
    
    state: {
        username: '',
        password: ''
    },

    // 订阅数据源，需要根据dispatch相应的action
    subscriptions: {

    },

    // 从服务端获取数据，发起一个action给reducers
    effects: {
        *getLoginInfo({ payload }, { call, put }) {
            const { data } = yield call(getLoginApi);
            if(data.code === 200) {
                yield put({ type: 'getLogin' });
                // 登录页面跳转到home页面
                yield put(routerRedux.push('/home'));
            }
        },
    },

    // 唯一能改变state的地方
    reducers: {
        // 改变state中的username（外部通过dispatch调用方法，此处赋值）
        'changeUsername'(state, { payload: name }) {
            let currentState = { username: name, password: state.password };
            return currentState;
        },
        // 改变state中的password
        'changePassword'(state, { payload: pwd }) {
            let currentState = { username: state.username, password: pwd };
            return currentState;
        },
        'getLogin'(state, action) {
            return {...state, ...action};
        }
    },
};