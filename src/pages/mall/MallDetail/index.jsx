import React, { Component, Fragment } from 'react'
import { Divider, Button, Card, Statistic, Carousel, Descriptions, Cascader, Icon, InputNumber, Tabs, List, Avatar, Tooltip, Empty, Typography, Row, Col } from 'antd';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import styles from './index.less';
import malldetail1 from '../../../assets/malldetail1.jpg';
import malldetail2 from '../../../assets/malldetail2.jpg';
import malldetail3 from '../../../assets/malldetail3.jpg';
import malldetail4 from '../../../assets/malldetail4.jpg';
import malldetail5 from '../../../assets/malldetail5.jpg';
import malldetail6 from '../../../assets/malldetail6.jpg';
import avatar from '../../../assets/avatar4.jpg';
const { Text, Title } = Typography;
const { TabPane } = Tabs;
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
            },
        ],
    },
];
function onChange(value) {
    console.log(value);
}
const extra = (
    <div className={styles.moreInfo}>
        <Statistic title="状态" value="待审批" />
        <Statistic title="订单金额" value={568.08} prefix="¥" />
    </div>
);
const data = [
    {
        title: '很满意',
    },
    {
        title: '还可以',
    },
    {
        title: '凑活喝',
    },
    {
        title: '一般吧',
    },
    {
        title: '很满意',
    },
    {
        title: '还可以',
    },
    {
        title: '凑活喝',
    },
    {
        title: '一般吧',
    },
];
class MallDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operationKey: 'tab1',
            tabActiveKey: 'detail',
        };
    }

    render() {

        return (
            <PageHeaderWrapper
                className={styles.pageHeader}
            >
                <Row gutter={24}>
                    <Col xl={7} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                        <Carousel autoplay>
                            <div className={styles.mallpictrue}>
                                <img alt="商品详情图片1" src={malldetail1} />
                            </div>
                            <div className={styles.mallpictrue}>
                                <img alt="商品详情图片2" src={malldetail2} />
                            </div>
                            <div className={styles.mallpictrue}>
                                <img alt="商品详情图片3" src={malldetail3} />
                            </div>
                        </Carousel>
                    </Col>
                    <Col xl={17} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                        <Card bordered={false}>
                            <Descriptions
                                title={
                                    <>
                                        <Title level={3}>三万昌 碧螺春2019新茶特级洞庭山正宗原产明前茶叶特二级绿茶50g</Title>
                                        <Text type="danger">中华老字号 苏州洞庭碧螺春原产地直发</Text>
                                    </>
                                }
                                size='default'
                            >
                                <Descriptions.Item span={3} label="价格">
                                    <Statistic value={568.08} valueStyle={{ color: '#ff0036' }} prefix="¥" />
                                </Descriptions.Item>
                                <Descriptions.Item span={3} label="优惠"><Text type="danger">年终促销，全场8折！！！</Text></Descriptions.Item>
                                <Descriptions.Item span={3} label="配送">
                                    浙江杭州至&nbsp;&nbsp;
                                    <Cascader
                                        defaultValue={['zhejiang', 'hangzhou']}
                                        options={options}
                                        onChange={onChange}
                                    />
                                    &nbsp;&nbsp;付款后48小时内发货
                                </Descriptions.Item>
                            </Descriptions>
                            <Divider />
                            <Descriptions size='default'>
                                <Descriptions.Item span={3} label="数量">
                                    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />&nbsp;件&nbsp;&nbsp;&nbsp;
                                    (库存777件)
                                </Descriptions.Item>
                                <Descriptions.Item span={3}>
                                    <Button type="danger" className={styles.btn} size="large" >立即购买</Button>
                                    <Button type="danger" icon="shopping-cart" className={styles.btn2} size="large" >加入购物车</Button>
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Card bordered={false}>
                        <Tabs defaultActiveKey="1">
                            <TabPane
                                tab={<span><Icon type="appstore" />商品详情</span>}
                                key="1"
                            >
                                <Descriptions title="产品参数">
                                    <Descriptions.Item label="生产许可证编号">SCXXXXXXXXXXXXXX</Descriptions.Item>
                                    <Descriptions.Item label="厂名">XXXX有限公司</Descriptions.Item>
                                    <Descriptions.Item label="厂址">江苏省苏州市.....</Descriptions.Item>
                                    <Descriptions.Item label="厂家联系方式">0512-55555555</Descriptions.Item>
                                    <Descriptions.Item label="保质期">540天</Descriptions.Item>
                                    <Descriptions.Item label="品牌">三万昌</Descriptions.Item>
                                    <Descriptions.Item label="系列">碧螺春139</Descriptions.Item>
                                    <Descriptions.Item label="产地">中国大陆</Descriptions.Item>
                                    <Descriptions.Item label="省份">江苏省</Descriptions.Item>
                                    <Descriptions.Item label="城市">苏州市</Descriptions.Item>
                                    <Descriptions.Item label="包装方式">散装</Descriptions.Item>
                                    <Descriptions.Item label="是否进口">国产</Descriptions.Item>
                                    <Descriptions.Item label="价格段">100-199元</Descriptions.Item>
                                    <Descriptions.Item label="茶种类">洞庭碧螺春</Descriptions.Item>
                                    <Descriptions.Item label="生长季节">春季</Descriptions.Item>
                                    <Descriptions.Item label="净含量">50g</Descriptions.Item>
                                    <Descriptions.Item label="生产日期">2019年12月26日至2020年4月26日</Descriptions.Item>
                                </Descriptions>
                                <Card bordered={false} title="详细信息">
                                    <img alt="商品详情展示" src={malldetail4} />
                                    <img alt="商品详情展示" src={malldetail5} />
                                    <img alt="商品详情展示" src={malldetail6} />
                                </Card>
                            </TabPane>
                            <TabPane
                                tab={<span><Icon type="ordered-list" />累计评价</span>}
                                key="2"
                            >
                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src={avatar} />}
                                                title={<a href="https://ant.design">{item.title}</a>}
                                                description="茶形，干茶外观好看，泡开叶底较碎，大约一芽二叶，不整齐。汤色的话看个人技术，开水温度低还是不错的，连续喝了三天，我喝茶属于重口，茶叶放的多，香气第一泡一般，第二泡基本无，喝不出优点，不会再买这一款。"
                                            />
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                        </Tabs>
                    </Card>
                </Row>
                <Divider>END</Divider>
            </PageHeaderWrapper>
        )
    }
}
export default MallDetail;
