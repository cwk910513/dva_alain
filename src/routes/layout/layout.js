import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import styles from '../layout/layout.less';
import TabHome from '../tabPage/home';
import TabClassify from '../tabPage/classify';
import TabOrder from '../tabPage/order';
import TabMyself from '../tabPage/myself';

const Layout = ({ dispatch, layout }) => {

    // 点击加载指定的tab页面
    function renderContent(tabValue) {
        return (
            <div style={{ backgroundColor: '#eee', height: '100%' }}>
                {( 
                    () => {
                        switch(tabValue){
                            case "home": 
                                return <TabHome></TabHome>;
                            case "classify":
                                return <TabClassify></TabClassify>; 
                            case "order":
                                return <TabOrder></TabOrder>; 
                            case "myself":
                                return <TabMyself></TabMyself>;
                            default: return null;
                        }
                    }
                ) ()}
            </div>
        );
    }

    return (
        <div className={ styles.container }>
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" tabBarPosition="bottom">
            {
                layout.tabArray.map( (tab, key) => (
                    <TabBar.Item title={ tab.title } key={ key } 
                        selectedIcon={ <div className={ styles.sltHomeIconStyle } /> }
                        icon={ <div className={ styles.unSltHomeIconStyle } /> }
                        onPress={ () => {
                            dispatch({
                                type: 'layout/changeTabFun',
                                payload: tab.value
                            })
                        } }
                        selected={ layout.selectedTab === tab.value }
                    >   
                        { renderContent(tab.value) }
                    </TabBar.Item>
                ) )
            }
            </TabBar>
        </div>
    );
};


function mapStateToProps({ layout }) {
    return { layout };
};

export default connect(mapStateToProps)(Layout);
