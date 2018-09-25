import { routerRedux } from 'dva/router';
// import { getLoginApi } from '../services/login';

export default {
    namespace: 'layout',
    
    state: {
        selectedTab: 'home',  // 下方tab默认选中
        tabArray: [
            { title: '首页', value: 'home' },
            { title: '分类', value: 'classify' },
            { title: '订单', value: 'order' },
            { title: '我的', value: 'myself' }
        ],                    // tab数组
    },

    // 订阅数据源，需要根据dispatch相应的action
    subscriptions: {
        
    },

    // 从服务端获取数据，发起一个action给reducers
    effects: {
        
    },

    // 唯一能改变state的地方
    reducers: {
        // 改变state（外部通过dispatch调用方法，此处赋值）
        'changeTabFun'(state, { payload: tab }) {
            console.log('model--tab');
            console.log(tab);
            let newState = { selectedTab: tab, tabArray: state.tabArray };
            routerRedux.push('/home');
            return newState;
        },
    },
};