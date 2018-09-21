import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import styles from '../layout/layout.less';

const Layout = ({ dispatch, layout }) => {
    return (
        <div className={ styles.container }>
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" tabBarPosition="bottom">
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />}
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />}
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />}
                    badge={1}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />}
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />}
                    badge={1}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />}
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />}
                    badge={1}
                    data-seed="logId"
                >
                </TabBar.Item>
            
            </TabBar>
        </div>
    );
};


function mapStateToProps({ layout }) {
    return { layout };
};

export default connect(mapStateToProps)(Layout);
