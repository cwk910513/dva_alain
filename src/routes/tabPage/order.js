import React from 'react';
import { connect } from 'dva';
import { Icon, Flex, WhiteSpace } from 'antd-mobile';
import styles from '../tabPage/tab.less';

class TabOrder extends React.Component{

    switchIcon = () => {
        console.log('sssssssss');
    }

    render () {
        let self = this;
        return (
            <div style={{ backgroundColor: 'white' }}>
                <WhiteSpace size="md" />
                <Flex>
                    <Flex.Item></Flex.Item>
                    <Flex.Item></Flex.Item>
                    <Flex.Item align="center" style={{ fontSize: '18px', color: '#33A3F4' }}>购物车</Flex.Item>
                    <Flex.Item className={ styles.itemBgColor }>
                        <Icon type="down" style={{ display: 'none' }} onClick={ self.switchIcon }/>
                    </Flex.Item>
                    <Flex.Item align="end">编辑&nbsp;&nbsp;&nbsp;</Flex.Item>
                </Flex>

                <WhiteSpace size="lg" />
            </div>
        );
    }
}


export default connect()(TabOrder);
