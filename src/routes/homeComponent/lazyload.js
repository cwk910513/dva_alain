import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import styles from '../homeComponent/lazyload.less';

class lazyloadComponent extends React.Component{

    // 返回上一级
    leftClick = () => {
        window.location.href = '/#/layout';
    }

    render () {
        let self = this;
        
        return (
            <div className={ styles.container }>
                <NavBar mode="light" icon={ <Icon type="left" /> } onLeftClick={ self.leftClick }>懒加载</NavBar>
                <WhiteSpace/>
            </div>
        );
    }
}

export default connect()(lazyloadComponent);
