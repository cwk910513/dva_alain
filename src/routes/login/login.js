import React from 'react';
import { connect } from 'dva';
import { Flex, List, InputItem, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import styles from '../login/login.less';

const Login = ({ dispatch, login }) => {
    // 忘记密码
    function forgetPassword() {
        Toast.info('默认密码：admin', 2);
    };

    // 注册账户
    function createUser() {
        Toast.offline('抱歉，暂无该功能！', 2);
    };

    // 设置用户名
    function setUsername(e) {
        dispatch({
            type: 'login/changeUsername',
            payload: e
        });
    };

    // 设置用户密码
    function setPassword(e) {
        dispatch({
            type: 'login/changePassword',
            payload: e
        });
    };

    // 登录
    function submitLogin() {
        if(!login.username || login.username !== 'admin') {
            Toast.offline('请输入正确的用户名！', 1);
            return false;
        } 
        if(!login.password || login.password !== 'admin') {
            Toast.offline('请输入正确的密码！', 1);
            return false;
        } 
        dispatch({
            type: 'login/getLoginInfo',
            payload: login
        });
    };

    return (
        <div className={ styles.container }>
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <Flex>
                <Flex.Item></Flex.Item>
                <Flex.Item>
                    <Flex>
                        <Flex.Item>
                            <img alt='logo' src="src/assets/images/logo.svg" style={{ width: '44px' }}/>
                        </Flex.Item>
                        <Flex.Item>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>ALAIN</span>
                        </Flex.Item>
                    </Flex>
                </Flex.Item>
                <Flex.Item></Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />

            <WingBlank size="lg">
                <List>
                    <InputItem placeholder="请输入账号（admin）" clear value={ login.username } onChange={ setUsername }>账号：</InputItem>
                </List>
            </WingBlank>
            <WhiteSpace size="md" />

            <WingBlank size="lg">
                <List>
                    <InputItem placeholder="请输入密码（admin）" type="password" clear value={ login.password } onChange={ setPassword }>密码：</InputItem>
                </List>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />

            <WingBlank size="lg">
                <Button type="primary" onClick={ submitLogin }>登录</Button>
            </WingBlank>
            <WhiteSpace size="lg" />

            <WingBlank size="lg">
                <Flex>
                    <Flex.Item>
                        <a style={{ color: '#1890ff' }} onClick={ forgetPassword }>忘记密码?</a>
                    </Flex.Item>
                    <Flex.Item>
                        <Flex justify='end'>
                            <a style={{ color: '#1890ff' }} onClick={ createUser }>注册账户</a>
                        </Flex>
                    </Flex.Item>
                </Flex>
            </WingBlank>

            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <Flex justify='center'>
                <Flex.Item></Flex.Item>
                <Flex.Item>
                    <Flex justify='center'>
                        <a style={{ color: '#BBB' }}>帮助 隐私 条款</a>
                    </Flex>
                </Flex.Item>
                <Flex.Item></Flex.Item>
            </Flex>

            <WhiteSpace size="lg" />
            <Flex justify='center'>
                <a style={{ color: '#BBB' }}>Copyright © 2018 CC 出品</a>
            </Flex>
        </div>
    );
};


function mapStateToProps({ login }) {
    return { login };
};

export default connect(mapStateToProps)(Login);
