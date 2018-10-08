import React from 'react';
import { connect } from 'dva';
import { NavBar, Picker, List, Icon, InputItem, TextareaItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from '../homeComponent/form.less';

class formComponent extends React.Component{
    constructor(props) {
        super(props);
        let self = this;

        let yearArray = [], monthArray = [], dayArray = [];
        for(let year = 1950; year < 2019; year++) {
            yearArray.push({ value: year, label: year +'年' });
        }
        for(let month = 1; month <= 12; month++) {
            monthArray.push({ value: month, label: month +'月' });
        }
        for(let day = 1; day <= 31; day++) {
            dayArray.push({ value: day, label: day +'日' });
        }

        self.state = {
            dateArray: [ yearArray, monthArray, dayArray ],
            sexArray: [
                {value: 'man', label: '男'},
                {value: 'woman', label: '女'}
            ],
            addressArray: [
                {value: 'address-01', label: '北京市昌平区回龙观西大街众创空间303室'},
                {value: 'address-02', label: '北京市朝阳区西北河南路1号金泰大厦2703'}
            ],
            username: '',     // 用户名
            password: '',     // 密码
            telephone: '',    // 手机号码
            dateValue: '',    // 选中后的年月日
            sexValue: '',     // 选中的性别
            addressValue: '', // 选中的地址
            textareaValue: '',// 爱好
        };
    }

    // 返回上一级
    leftClick = () => {
        window.location.href = '/#/layout';
    }

    // 用户名点击事件
    userChangeFun = (e) => {
        let self = this;
        self.setState({ username: e });
    }

    // 密码点击事件
    pwdChangeFun = (e) => {
        let self = this;
        self.setState({ password: e });
    }

    // 手机号码点击事件
    phoneChangeFun = (e) => {
        let self = this;
        self.setState({ telephone: e });
    }

    // 选择年月日
    selectDateFun = (v) => {
        let self = this;
        self.setState({ dateValue: v });
    }

    // 选择性别
    selectSexFun = (v) => {
        let self = this;
        self.setState({ sexValue: v });
    }

    // 选择地址
    selectAddressFun = (v) => {
        let self = this;
        self.setState({ addressValue: v });
    }

    // 爱好事件
    textareaChangeFun = (e) => {
        let self = this;
        self.setState({ textareaValue: e });
    }

    // 点击button查看console信息
    buttonClickFun = () => {
        let self = this;

        console.log('表单数据');
        console.log('用户名：'+ self.state.username);
        console.log('密  码：'+ self.state.password);
        console.log('手  机：'+ self.state.telephone);
        console.log('年月日：'+ self.state.dateValue);
        console.log('性  别：'+ self.state.sexValue);
        console.log('地  址：'+ self.state.addressValue);
        console.log('爱  好：'+ self.state.textareaValue);
    }

    render () {
        let self = this;
        
        const { username, password, telephone, dateArray, dateValue, sexArray, sexValue, addressArray, addressValue, textareaValue } = self.state;
        return (
            <div className={ styles.container }>
                <NavBar mode="light" icon={ <Icon type="left" /> } onLeftClick={ self.leftClick }>表单</NavBar>
                <WhiteSpace />
                <List>
                    <InputItem clear placeholder="请输入用户名" ref={el => this.autoFocusInst = el} value={ username } onChange={ self.userChangeFun }>
                        <i className="iconfont icon-icon_zhanghao"></i>
                    </InputItem>
                    <InputItem clear placeholder="请输入密码" ref={el => this.autoFocusInst = el} type="password" value={ password } onChange={ self.pwdChangeFun }>
                        <i className="iconfont icon-guangbo"></i>
                    </InputItem>
                    <InputItem clear placeholder="请输入手机号码" ref={el => this.autoFocusInst = el} value={ telephone } onChange={ self.phoneChangeFun }>
                        <i className="iconfont icon-kefu"></i>
                    </InputItem>
                    <Picker
                        data={ dateArray }
                        title="请选择出生年月"
                        extra="请选择出生年月"
                        cascade={ false }
                        value={ dateValue }
                        onOk={ self.selectDateFun }
                    >
                        <List.Item arrow="horizontal">
                            <i className="iconfont icon-yunyingguanli"></i>
                        </List.Item>
                    </Picker>
                    <Picker
                        data={ sexArray }
                        cols={ 1 }
                        title="请选择性别"
                        extra="请选择性别"
                        value={ sexValue }
                        onOk={ self.selectSexFun }
                    >
                        <List.Item arrow="horizontal">
                            <i className="iconfont icon-xingzhuang-xingxing"></i>
                        </List.Item>
                    </Picker>
                    <Picker
                        data={ addressArray }
                        cols={ 1 }
                        title="请选择地址"
                        extra="请选择地址"
                        value={ addressValue }
                        onOk={ self.selectAddressFun }
                    >
                        <List.Item arrow="horizontal">
                            <i className="iconfont icon-gongnengdingyi"></i>
                        </List.Item>
                    </Picker>
                </List>
                <TextareaItem placeholder="请输入个人爱好..." rows={5} count={100} value={ textareaValue } onChange={ self.textareaChangeFun }/>

                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <Button type="primary" onClick={ self.buttonClickFun }>console查看数据</Button>
                </WingBlank>
            </div>
        );
    }
}

export default connect()(formComponent);
