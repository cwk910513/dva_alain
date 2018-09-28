import React from 'react';
import { connect } from 'dva';
import { Tabs, Grid } from 'antd-mobile';

class TabClassify extends React.Component{
    constructor(props) {
        super(props)
        let self = this;
        self.props.dispatch({
            type: 'classify/getClassifyData'
        });
        // 默认初始化的时候加载一次，通过payload判断加载的内容
        self.props.dispatch({
            type: 'classify/getDetailsByClassifyName',
            payload: 0
        });
    };
    
    // 调用该方法的时候，默认就会返回tabs中的一个tabItem
    tabClickFun = (tabItem, index) => {
        let self = this;
        console.log(tabItem);

        self.props.dispatch({
            type: 'classify/getDetailsByClassifyName',
            payload: index
        });
    };

    render () {
        let self = this;
        return (
            <div style={{ height: '100%' }}>
                <Tabs tabs={ self.props.tabArray } initalPage={'t2'} tabBarPosition="left" tabDirection="vertical" onTabClick={ self.tabClickFun }>
                    <Grid data={ self.props.detailsData } activeStyle={false} />
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        classifyData: state.classify.data,
        tabArray: state.classify.data ? state.classify.data.data.tabArray : [],
        detailsData: state.classify.detailsArray ? state.classify.detailsArray.data : []
    };
};


export default connect(mapStateToProps)(TabClassify);
