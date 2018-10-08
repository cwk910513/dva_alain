import React from 'react';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import ruRU from 'antd-mobile/lib/locale-provider/ru_RU';
import { connect } from 'dva';
import { NavBar, Icon, Pagination, Picker, List, LocaleProvider, WhiteSpace } from 'antd-mobile';

const seasons = [
                    [
                        { label: '2013', value: '2013' },
                        { label: '2014', value: '2014' }
                    ],
                    [
                        { label: '春', value: '春' },
                        { label: '夏', value: '夏' } 
                    ]
                ];

const LocalContent = () => (
    <div>
        <Pagination total={5} current={1}/>
        <WhiteSpace/>
        <List style={{ backgroundColor: 'white' }}>
            <Picker data={ seasons } cascade={ false }>
                <List.Item arrow="horizontal">picker</List.Item>
            </Picker>
        </List>
    </div>
);

class languageComponent extends React.Component{
    constructor(props) {
        super(props);

        let self = this;
        self.state = {
            locale: 'English',
            seasons: [
                [
                    { label: '2013', value: '2013' },
                    { label: '2014', value: '2014' }
                ],
                [
                    { label: '春', value: '春' },
                    { label: '夏', value: '夏' } 
                ]
            ]
        };
    }

    // 返回上一级
    leftClick = () => {
        window.location.href = '/#/layout';
    }

    // 切换显示语言
    selectLanguage = (value) => {
        this.setState({
            locale: value[0],
        });
    }

    render () {
        let self = this;
        const { locale } = self.state;
        const languages = [
            { value: '中国', label: '中国', language: undefined },
            { value: 'English', label: 'English', language: enUS },
            { value: 'Русский', label: 'Русский', language: ruRU },
        ];
        const currentLocale = languages.find(item => item.value === locale).language;
        return (
            <div>
                <NavBar mode="light" icon={ <Icon type="left" /> } onLeftClick={ self.leftClick }>国际化</NavBar>
                <WhiteSpace/>

                <Picker data={ languages } onChange={ self.selectLanguage } cols={1} value={[locale]}>
                    <List.Item arrow="horizontal">选择语言</List.Item>
                </Picker>
                <WhiteSpace/>

                {/* 传入到LocalProvider中的内容只能是一个元素，或者说是一个元素包括多个元素的形式 */}
                <LocaleProvider locale={ currentLocale }>
                    <LocalContent />
                </LocaleProvider>
            </div>
        );
    }
}

export default connect()(languageComponent);
