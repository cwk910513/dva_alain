import React from 'react';
// 注解1：如果需要使用this.props.dispathch的话，必须引用这个文件
import { connect } from 'dva';   
// import { SearchBar, Carousel, Card, Grid, TabBar, WhiteSpace } from 'antd-mobile';

class TabHome extends React.Component{
    constructor(props) {
        super(props);
    };

    componentWillMount() {
        let self = this;
        self.props.dispatch({
            type: 'home/getHomeData'
        });
    };

    render () {
        // 注解2：查看网络请求出来的数据
        // this.props.data为mapStateToProps中的data
        console.log(this.props.homeData);
        return (
            <div>
                1111111111111
            </div>
        );
    }
}

// 注解3：见名思意，把state转换为props
// 此处的state，是src/models/home.js中通过yield put返回的数据
const mapStateToProps = (state) => {
    return {
        homeData: state.home
    };
};

export default connect(mapStateToProps)(TabHome);
