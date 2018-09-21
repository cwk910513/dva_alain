import React from 'react';
import { connect } from 'dva';
import { SearchBar, Carousel, Card, Grid, TabBar, WhiteSpace } from 'antd-mobile';
import styles from '../home/home.less';

const Home = ({ dispatch, home }) => {
    return (
        <div className={ styles.container }>
            <SearchBar placeholder="Search"/>
            <Carousel autoplay={ false } infinite>
                {
                    home.carouselArray.map( (item, key) => (
                        <img src={ item.src } alt={ item.title } key={ key }/>
                    ))
                }
            </Carousel>

            <WhiteSpace size="lg" />
            <Card full>
                <Card.Header title="全部分类" />
                <Card.Body style={{ padding: '0px' }}>
                    <Grid data={ home.gridArray } columnNum="5" square={ true } hasLine={ false } />
                </Card.Body>
            </Card>

            <WhiteSpace size="lg" />
            <Card full>
                <Card.Header title="全部分类" />
                <Card.Body style={{ padding: '0px' }}>
                    <Grid data={ home.gridArray } columnNum="5" square={ true } hasLine={ false } />
                </Card.Body>
            </Card>

            <WhiteSpace size="lg" />
            <Card full>
                <Card.Header title="全部分类" />
                <Card.Body style={{ padding: '0px' }}>
                    <Grid data={ home.gridArray } columnNum="5" square={ true } hasLine={ false } />
                </Card.Body>
            </Card>

            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={ true }
                tabBarPosition="bottom">
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


function mapStateToProps({ home }) {
    return { home };
};

export default connect(mapStateToProps)(Home);
