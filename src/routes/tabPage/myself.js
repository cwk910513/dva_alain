import React from 'react';
import { connect } from 'dva';
import { WhiteSpace, Card, Flex, List } from 'antd-mobile';
import styles from '../tabPage/myself.less';

const Item = List.Item;

class TabMyself extends React.Component{

    settingClick = () => {
        console.log('1111111111111');
    }

    render () {
        let self = this;
        return (
            <div className={ styles.container }>
                <Card full className={ styles.personInfo }>
                    <Card.Body>
                        <Flex>
                            <Flex.Item>
                                <div className={ styles.portrait }></div>
                            </Flex.Item>
                            <Flex.Item className={ styles.message }>
                                <div className={ styles.username }>张三</div>
                                <WhiteSpace size="md"/>
                                <div>18812345678</div>
                            </Flex.Item>
                            <Flex.Item></Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                <i className="iconfont icon-xiyiji"></i>
                                <img src="src/assets/images/shop.png" alt="设置" style={{ width: '25px', height: '25px' }} onClick={ self.settingClick }/>
                                <WhiteSpace size="md"/>
                                <WhiteSpace size="md"/>
                            </Flex.Item>
                        </Flex>
                    </Card.Body>
                </Card>
                <WhiteSpace size="md"/>
                
                <List>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android"> 
                        <span className={ styles.listItem }> 保险账号 </span> 
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android"> 
                        <span className={ styles.listItem }> 福利账户 </span> 
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android"> 
                        <span className={ styles.listItem }> 账户管理 </span> 
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android"> 
                        <span className={ styles.listItem }> 我的订单 </span> 
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android"> 
                        <span className={ styles.listItem }> 我的卡包 </span> 
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android"> 
                        <span className={ styles.listItem }> 收货地址 </span> 
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android"> 
                        <span className={ styles.listItem }> 联系客服 </span> 
                    </Item>
                </List>
            </div>
        );
    }
}


export default connect()(TabMyself);
