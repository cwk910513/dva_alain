import React from 'react';
import { connect } from 'dva';
import { Icon, Flex, WhiteSpace, Picker, Card, Stepper, Checkbox, Button } from 'antd-mobile';
import styles from '../tabPage/tab.less';

const CheckboxItem = Checkbox.CheckboxItem;

class TabOrder extends React.Component{
    constructor(props) {    
        super(props);

        let self = this;
        self.state = {
            switchIcon: 'down',
            cartStatus: false,   // 编辑：false   完成：true
            maxValue: 999,
            minValue: 1,
            defaultValue: 1,     // 商品默认数量
        }
    }

    // picker显隐方法
    visibleChange = (status) => {
        let self = this;
        self.setState({ switchIcon: status ? 'up' : 'down' });
    }

    // 隐藏picker时触发
    dismissPicker = () => {
        console.log('111111111111111');
    }

    // 数量加减
    stepChange = (defaultValue) => {
        let self = this;
        self.setState({ defaultValue });
    }

    // 编辑购物车信息
    editCartInfo = () => {
        let self = this;
        self.setState({ cartStatus: !self.state.cartStatus });
    }

    render () {
        let self = this;
        let hide = self.props.layout.selectedTab === 'order' ? 'block' : 'none';
        const { switchIcon, cartStatus, maxValue, minValue } = self.state;
        const testData = [
            { label: '北京市昌平区回龙观镇众创空间301室内', value: '111' },
            { label: '北京市朝阳区西呗河南1号金泰大厦2703室', value: '222' },
            { label: '河南省洛阳市瀍河区启明西路58号院', value: '333' }
        ];
        return (
            <div className={ styles.container }>
                <div className={ styles.cartTitle }>
                    <WhiteSpace size="md" />
                    <Flex>
                        <Flex.Item></Flex.Item>
                        <Flex.Item></Flex.Item>
                        <Flex.Item align="center" className={ styles.cartItem }>购物车</Flex.Item>
                        <Flex.Item className={ styles.itemBgColor }>
                            <Picker data={ testData } cols={ 1 } onVisibleChange={ self.visibleChange } onDismiss={ self.dismissPicker }>
                                <Icon type={ switchIcon } />
                            </Picker>
                        </Flex.Item>
                        <Flex.Item align="end" onClick={ self.editCartInfo }>{ cartStatus ? "完成" : "编辑" }&nbsp;&nbsp;&nbsp;</Flex.Item>
                    </Flex>
                    <WhiteSpace size="md" />
                </div>
                
                <WhiteSpace size="sm" />
                <div className={ styles.cartInfo }>
                    <Card full>
                        <Card.Header className={ styles.goodsTitle } title={ <CheckboxItem className={ styles.cardCheckbox }><span className={ styles.shopName }>京东自营</span></CheckboxItem> } />
                        <Card.Body className={ styles.cardBody }>
                            <CheckboxItem className={ styles.checkboxItem }>
                                <img src="src/assets/images/goods.jpg" alt="商品" className={ styles.goodsItem } />
                                <div className={ styles.goodsName }>
                                    菇滋菇滋 休闲零食
                                </div>
                                <WhiteSpace size="md" />
                                <div className={ styles.goodsInfo }>
                                    30G 单盒装
                                </div>
                                <WhiteSpace size="sm" />
                                <div className={ styles.goodsPrices }>
                                    <Flex>
                                        <Flex.Item>49.00</Flex.Item>
                                        <Flex.Item>
                                            <Stepper style={{ width: '100%', minWidth: '80px' }} showNumber step={ 1 } max={ maxValue } min={ minValue } value={ self.state.defaultValue } onChange={ self.stepChange } />
                                        </Flex.Item>
                                    </Flex>
                                </div>
                            </CheckboxItem> 
                        </Card.Body>
                        <Card.Body className={ styles.cardBody }>
                            <CheckboxItem className={ styles.checkboxItem }>
                                <img src="src/assets/images/goods.jpg" alt="商品" className={ styles.goodsItem } />
                                <div className={ styles.goodsName }>
                                    菇滋菇滋 休闲零食
                                </div>
                                <WhiteSpace size="md" />
                                <div className={ styles.goodsInfo }>
                                    30G 单盒装
                                </div>
                                <WhiteSpace size="sm" />
                                <div className={ styles.goodsPrices }>
                                    <Flex>
                                        <Flex.Item>49.00</Flex.Item>
                                        <Flex.Item>
                                            <Stepper style={{ width: '100%', minWidth: '80px' }} showNumber step={ 1 } max={ maxValue } min={ minValue } value={ self.state.defaultValue } onChange={ self.stepChange } />
                                        </Flex.Item>
                                    </Flex>
                                </div>
                            </CheckboxItem> 
                        </Card.Body>
                        <Card.Body className={ styles.cardBody }>
                            <CheckboxItem className={ styles.checkboxItem }>
                                <img src="src/assets/images/goods.jpg" alt="商品" className={ styles.goodsItem } />
                                <div className={ styles.goodsName }>
                                    菇滋菇滋 休闲零食
                                </div>
                                <WhiteSpace size="md" />
                                <div className={ styles.goodsInfo }>
                                    30G 单盒装
                                </div>
                                <WhiteSpace size="sm" />
                                <div className={ styles.goodsPrices }>
                                    <Flex>
                                        <Flex.Item>49.00</Flex.Item>
                                        <Flex.Item>
                                            <Stepper style={{ width: '100%', minWidth: '80px' }} showNumber step={ 1 } max={ maxValue } min={ minValue } value={ self.state.defaultValue } onChange={ self.stepChange } />
                                        </Flex.Item>
                                    </Flex>
                                </div>
                            </CheckboxItem> 
                        </Card.Body>
                        <Card.Body className={ styles.cardBody }>
                            <CheckboxItem className={ styles.checkboxItem }>
                                <img src="src/assets/images/goods.jpg" alt="商品" className={ styles.goodsItem } />
                                <div className={ styles.goodsName }>
                                    菇滋菇滋 休闲零食
                                </div>
                                <WhiteSpace size="md" />
                                <div className={ styles.goodsInfo }>
                                    30G 单盒装
                                </div>
                                <WhiteSpace size="sm" />
                                <div className={ styles.goodsPrices }>
                                    <Flex>
                                        <Flex.Item>49.00</Flex.Item>
                                        <Flex.Item>
                                            <Stepper style={{ width: '100%', minWidth: '80px' }} showNumber step={ 1 } max={ maxValue } min={ minValue } value={ self.state.defaultValue } onChange={ self.stepChange } />
                                        </Flex.Item>
                                    </Flex>
                                </div>
                            </CheckboxItem> 
                        </Card.Body>
                        <Card.Body className={ styles.cardBody }>
                            <CheckboxItem className={ styles.checkboxItem }>
                                <img src="src/assets/images/goods.jpg" alt="商品" className={ styles.goodsItem } />
                                <div className={ styles.goodsName }>
                                    菇滋菇滋 休闲零食
                                </div>
                                <WhiteSpace size="md" />
                                <div className={ styles.goodsInfo }>
                                    30G 单盒装
                                </div>
                                <WhiteSpace size="sm" />
                                <div className={ styles.goodsPrices }>
                                    <Flex>
                                        <Flex.Item>49.00</Flex.Item>
                                        <Flex.Item>
                                            <Stepper style={{ width: '100%', minWidth: '80px' }} showNumber step={ 1 } max={ maxValue } min={ minValue } value={ self.state.defaultValue } onChange={ self.stepChange } />
                                        </Flex.Item>
                                    </Flex>
                                </div>
                            </CheckboxItem> 
                        </Card.Body>
                    </Card>
                </div>

                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <div className={ styles.cartCount } style={{ display: hide }}>
                    <Flex>
                        <Flex.Item style={{ height: '40px', lineHeight: '40px', marginTop: '-8px' }}>
                            <CheckboxItem>
                                <span style={{ fontSize: '15px' }}>全选</span>
                            </CheckboxItem>
                        </Flex.Item>
                        <Flex.Item style={{ color: 'red', fontWeight: 'bold' }}>
                            合计：245.00
                        </Flex.Item>
                        <Flex.Item align="end">
                            <Button type="primary" size="small" style={{ borderRadius: '0px', height: '40px', lineHeight: '40px' }}>去结算(5)</Button>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(TabOrder);