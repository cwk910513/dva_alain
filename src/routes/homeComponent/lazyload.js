import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import Lazyload from 'react-lazyload';
import styles from '../homeComponent/lazyload.less';

/**
 * 插件：https://github.com/jasonslyvia/react-lazyload
 * 参数：placeholder【等待时显示的组件】，debounce【延迟显示】，offset【预加载，如果为负数的话，则只有到指定的高度的时候，才显示内容】
 * 注意：1：加载placeholder的时候，需要给组件设置height和minHeight，不然无法显示
 *      2：页面剩余高度是580，每个组件是200，所以只能显示2个组件
 */

const PlaceholderComponent = () => (
    <div style={{ height: '200px', minHeight: '200px', border: '1px solid red', display: 'block' }}>
        <Icon type="loading" />
    </div>
);

class lazyloadComponent extends React.Component{
    constructor() {
        super();
        let self = this;

        self.state = {
            numArray: Array.apply(null, Array(20)).map((a, index) => {
                return {
                    id: index + 1,
                    once: [6, 7].indexOf(index) > -1,
                    img: ''
                };
            })
        };
    }


    // 返回上一级
    leftClick = () => {
        window.location.href = '/#/layout';
    }

    render () {
        let self = this;
        return (
            <div className={ styles.container }>
                <NavBar mode="light" icon={ <Icon type="left" /> } onLeftClick={ self.leftClick } className={ styles.navbar }>懒加载</NavBar>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="md"/>
                <div>
                    {
                        self.state.numArray.map( (value, index) => {
                            return (
                                <Lazyload once={ value.once } key={ index } height={ 200 } offset={ -200 } placeholder={ <PlaceholderComponent /> } debounce={ 100 }>
                                    <div className={ styles.cardItem } style={{ height: '200px' }}>
                                        <div>
                                            { index + 1 }
                                        </div>
                                    </div>
                                </Lazyload>
                            );
                        })
                    }
                    {/* <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" alt="1"/>
                        </div>
                    </Lazyload>
                    <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvyo52qj20u01hcqeq.jpg" alt="1"/>
                        </div>
                    </Lazyload>
                    <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxvz2cj6j20u01hck1o.jpg" alt="1"/>
                        </div>
                    </Lazyload>
                    <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvzfjv6j20u01hc496.jpg" alt="1"/>
                        </div>
                    </Lazyload>
                    <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw0e1mlj20u01hcgvs.jpg" alt="1"/>
                        </div>
                    </Lazyload>
                    <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww4.sinaimg.cn/mw690/62aad664jw1f2nxw0p95dj20u01hc7d8.jpg" alt="1"/>
                        </div>
                    </Lazyload>
                    <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxw134xqj20u01hcqjg.jpg" alt="1"/>
                        </div>
                    </Lazyload>
                    <Lazyload height={200} offset={ -200 }>
                        <div className={ styles.imgItem }>
                            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw1kcykj20u01hcn9p.jpg" alt="1"/>
                        </div>
                    </Lazyload> */}
                </div>
            </div>
        );
    }
}

export default connect()(lazyloadComponent);
