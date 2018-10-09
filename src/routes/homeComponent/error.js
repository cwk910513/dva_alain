import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, WhiteSpace, WingBlank, SegmentedControl, Card, Button } from 'antd-mobile';
import styles from '../homeComponent/error.less';

class lazyloadComponent extends React.Component{
    constructor(props) {
        super(props);
        let self = this;

        self.state = {
            tabTitleArray: ['403', '404', '500'],
            currentIndex: 1,
        };
    }

    // 返回上一级
    leftClick = () => {
        window.location.href = '/#/layout';
    }

    // tab切换
    tabTitleChangeFun = (e) => {
        let self = this;
        self.setState({ currentIndex: e.nativeEvent.selectedSegmentIndex });
    }

    // 返回首页
    backHomeFun = () => {
        window.location.href = '/#/layout';
    }

    render () {
        let self = this;
        const { tabTitleArray, currentIndex } = self.state;
        let errorSvgUrl = '', errorCode='', errorText = '';
        switch(currentIndex) {
            case 0:
                errorSvgUrl = "src/assets/images/403.svg";
                errorCode = 403;
                errorText = "抱歉，你无权访问该页面";
                break;
            case 1:
                errorSvgUrl = "src/assets/images/404.svg";
                errorCode = 404;
                errorText = "抱歉，你访问的页面不存在";
                break;
            case 2:
                errorSvgUrl = "src/assets/images/500.svg";
                errorCode = 500;
                errorText = "抱歉，服务器出错了";
                break;
            default: return null;
        }
        return (
            <div className={ styles.container }>
                <NavBar mode="light" icon={ <Icon type="left" /> } onLeftClick={ self.leftClick } className={ styles.navbar }>错误页面</NavBar>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="md"/>
                <SegmentedControl selectedIndex={ currentIndex } values={ tabTitleArray } onChange={ self.tabTitleChangeFun }/>
                <WhiteSpace size="md"/>
                <Card full>
                    <Card.Body>
                        <div className={ styles.errorContent }>
                            <img src={ errorSvgUrl } alt={ errorCode }/>
                            <div className={ styles.errorTitle }>{ errorCode }</div>
                            <div className={ styles.errorText }>{ errorText }</div>
                            <div>
                                <WingBlank>
                                    <Button type="primary" inline size="small" onClick={ self.backHomeFun }>返回首页</Button>
                                </WingBlank>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default connect()(lazyloadComponent);
