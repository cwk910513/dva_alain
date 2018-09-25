// import { routerRedux } from 'dva/router';
// import { getLoginApi } from '../services/login';

export default {
    namespace: 'home',
    
    state: {
        carouselArray: [
            { 'title': 'carousel-01', 'src': '/src/assets/images/carousel-01.png' },
            { 'title': 'carousel-02', 'src': '/src/assets/images/carousel-02.png' },
            { 'title': 'carousel-03', 'src': '/src/assets/images/carousel-03.png' }
        ],
        gridArray: [
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' },
            { 'icon': '/src/assets/images/people.png', 'text': '自定义' }
        ]
    },

    // 订阅数据源，需要根据dispatch相应的action
    subscriptions: {
        
    },

    // 从服务端获取数据，发起一个action给reducers
    effects: {
        
    },

    // 唯一能改变state的地方
    reducers: {
        // 改变state中的username（外部通过dispatch调用方法，此处赋值）
        'changeUsername'(state, { payload: name }) {
            let currentState = { username: name, password: state.password };
            return currentState;
        },
    },
};