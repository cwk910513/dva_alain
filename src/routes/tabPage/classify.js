import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd-mobile';

class TabClassify extends React.Component{

    componentWillMount() {
        let self = this;
        self.props.dispatch({
            type: 'classify/getClassifyData'
        });
    };
    
    // 调用该方法的时候，默认就会返回tabs中的一个tabItem
    tabClickFun = (tabItem) => {
        console.log(tabItem);
    };

    render () {
        let self = this;
        console.log(self.props.tabArray);
        return (
            <div style={{ height: '100%' }}>
                <Tabs tabs={ self.props.tabArray } initalPage={'t2'} tabBarPosition="left" tabDirection="vertical" onTabClick={ self.tabClickFun }>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        111
                    </div>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        classifyData: state.classify.data,
        tabArray: state.classify.data ? state.classify.data.data.tabArray : []
    };
};


export default connect(mapStateToProps)(TabClassify);
