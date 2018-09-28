import React from 'react';
// 注解1：如果需要使用this.props.dispathch的话，必须引用这个文件
import { connect } from 'dva';   
import { SearchBar, Carousel, Card, Grid, WhiteSpace } from 'antd-mobile';

class TabHome extends React.Component{
    constructor(props) {
        super(props);
        let self = this;
        self.props.dispatch({
            type: 'home/getHomeData'
        });
    };

    render () {
        // 注解2：查看网络请求出来的数据
        // this.props.data为mapStateToProps中的data
        let self = this;
        return (
            <div>
                <SearchBar placeholder="Search"/>
                <Carousel autoplay={ false } infinite>
                    {
                        self.props.carouselArray.map( (item, key) => (
                            <img src={ item.src } alt={ item.title } key={ key }/>
                        ))
                    }
                </Carousel>

                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header title={ self.props.levelOne.title } />
                    <Card.Body style={{ padding: '0px' }}>
                        <Grid data={ self.props.levelOne.data } columnNum="4" square={ true } hasLine={ false } />
                    </Card.Body>
                </Card>

                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header title={ self.props.levelTwo.title } />
                    <Card.Body style={{ padding: '0px' }}>
                        <Grid data={ self.props.levelTwo.data } columnNum="4" square={ true } hasLine={ false } />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

// 注解3：见名思意，把state转换为props
// 此处的state，是src/models/home.js中通过yield put返回的数据
const mapStateToProps = (state) => {
    return {
        homeData: state.home.data,
        carouselArray: state.home.data ? state.home.data.data.carouselArray : [],
        levelOne: state.home.data ? state.home.data.data.levelOne : [],
        levelTwo: state.home.data ? state.home.data.data.levelTwo : [],
    };
};

export default connect(mapStateToProps)(TabHome);
