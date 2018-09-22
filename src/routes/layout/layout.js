import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import styles from '../layout/layout.less';

const Layout = ({ dispatch, layout }) => {

    // 点击跳转到指定的tab页面
    function renderContent(tab) {
        // console.log('66666666666666666666');
        console.log(tab);
    }

    return (
        <div className={ styles.container }>
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" tabBarPosition="bottom">
                <TabBar.Item
                    title="首页"
                    key="home"
                    icon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} /> }
                    selectedIcon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} /> }
                    // onPress={ changeTab('home') }
                    onPress={ () => {
                        dispatch({
                            type: 'layout/changeTabFun',
                            payload: 'home'
                        })
                    } }
                    selected={ layout.selectedTab === 'home' }
                    data-seed="logId"
                >
                    { renderContent('home') }
                    home
                </TabBar.Item>
                <TabBar.Item
                    title="分类"
                    key="classify"
                    icon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} /> }
                    selectedIcon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} /> }
                    // onPress={ changeTab('classify') }
                    onPress={ () => {
                        dispatch({
                            type: 'layout/changeTabFun',
                            payload: 'classify'
                        })
                    } }
                    selected={ layout.selectedTab === 'classify' }     
                    data-seed="logId"
                >
                    { renderContent('classify') }
                    classify
                </TabBar.Item>
                <TabBar.Item
                    title="订单"
                    key="order"
                    icon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} /> }
                    selectedIcon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} /> }
                    // onPress={ changeTab('order') }
                    onPress={ () => {
                        dispatch({
                            type: 'layout/changeTabFun',
                            payload: 'order'
                        })
                    } }
                    selected={ layout.selectedTab === 'order' }   
                    data-seed="logId"
                >
                    { renderContent('order') }
                    order
                </TabBar.Item>
                <TabBar.Item
                    title="我的"
                    key="myself"
                    icon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} /> }
                    selectedIcon={ <div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} /> }
                    // onPress={ changeTab('myself') }
                    onPress={ () => {
                        dispatch({
                            type: 'layout/changeTabFun',
                            payload: 'myself'
                        })
                    } }
                    selected={ layout.selectedTab === 'myself' }   
                    data-seed="logId"
                >
                    { renderContent('myself') }
                    myself
                </TabBar.Item>
            </TabBar>
        </div>
    );
};


function mapStateToProps({ layout }) {
    return { layout };
};

export default connect(mapStateToProps)(Layout);
