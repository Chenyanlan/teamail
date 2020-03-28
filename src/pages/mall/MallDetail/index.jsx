import React, { Component, Fragment } from 'react'
import { Divider, Button, Card, Statistic, Carousel, Descriptions, Cascader, Icon, InputNumber, Tabs, List, Avatar, Tooltip, Empty, Typography, Row, Col } from 'antd';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import router from 'umi/router';
import { connect } from 'dva';
import ModifyPicture from '../../../components/FormComponents/ModifyPicture';
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

@connect(({ shopping }) => ({
    goodsDisplay: shopping.goodsDisplay,
    goodsDetail: shopping.goodsDetail,
    goods: shopping.goods,
    cart: shopping.cart,
  }))
class MallDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operationKey: 'tab1',
            tabActiveKey: 'detail',
            visible: false,
        };
    }

    componentDidMount() {
        console.log(this.props);
        const { dispatch, match: { params: { id } } } = this.props;
        localStorage.setItem('goodsId', id);
        console.log(id);
        dispatch({
            type: 'shopping/getDisplayPicture',
            payload: {
                pictureGoodsId: id,
            },
        })
        dispatch({
            type: 'shopping/getDetailPicture',
            payload: {
                pictureGoodsId: id,
            },
        })
        dispatch({
            type: 'shopping/getGoods',
            payload: {
                goodsId: id,
            },
        })
        dispatch({
            type: 'shopping/getCartByIds',
            payload: {
                cartGoodsId: id,
                cartUserId: localStorage.getItem('userId'),
            },
        })
    }

    toShoppingCart = () => {
        const userId = localStorage.getItem('userId');
        const { dispatch, match: { params: { id } } } = this.props;
        dispatch({
            type: 'shopping/addCart',
            payload: {
                cartGoodsId: id,
                cartUserId: userId,
            },
        })
        // router.push(`/mall/shopping/${userId}`);
    }

    addStarGoods = () => {
        const userId = localStorage.getItem('userId');
        const { dispatch, match: { params: { id } } } = this.props;
        dispatch({
            type: 'shopping/addStarGoods',
            payload: {
                starGoodsId: id,
                starUserId: userId,
            },
        })
    }


    modifyPicture = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
      };

      handleCreate = () => {
        this.setState({ visible: false });
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

    render() {
        console.log(this.props);
        const { goodsDisplay, goodsDisplay: { list, total }, goodsDetail, goods, match: { params: { id } } } = this.props;
        const authority = localStorage.getItem('antd-pro-authority');
        console.log(authority);
        const displayList = [
            { pictureId: 1, pictureDetail: malldetail1 },
            { pictureId: 2, pictureDetail: malldetail2 },
            { pictureId: 3, pictureDetail: malldetail3 },
        ]
        const detailList = [
            { pictureId: 4, pictureDetail: malldetail4 },
            { pictureId: 5, pictureDetail: malldetail5 },
            { pictureId: 6, pictureDetail: malldetail6 },
        ]
        const operations = authority === '["admin"]' ? <Button onClick={this.modifyPicture}>商品图片编辑</Button> : <></>;
        return (
            <>
                <PageHeaderWrapper
                    className={styles.pageHeader}
                >
                    <Row gutter={24}>
                        <Col xl={7} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                            <Carousel autoplay>
                                {
                                    // eslint-disable-next-line no-nested-ternary
                                    JSON.stringify(goodsDisplay) === '{}' ?
                                    displayList.map(item => {
                                        return (
                                            <div className={styles.mallpictrue}>
                                                <img alt="商品详情图片1" key={item.pictureId} src={item.pictureDetail} />
                                            </div>
                                        )
                                    })
                                    :
                                    total === 0 ?
                                    displayList.map(item => {
                                        return (
                                            <div className={styles.mallpictrue}>
                                                <img alt="商品详情图片1" key={item.pictureId} src={item.pictureDetail} />
                                            </div>
                                        )
                                    })
                                    :
                                    list.map(item => {
                                        return (
                                            <div className={styles.mallpictrue}>
                                                <img alt="商品详情图片1" key={item.pictureId} src={item.pictureDetail} />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </Col>
                        <Col xl={17} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                            <Card bordered={false}>
                                <Descriptions
                                    title={
                                        <>
                                            <Title level={3}>{goods.goodsTitle}</Title>
                                            <Text type="danger">{goods.goodsTitleSecond}</Text>
                                        </>
                                    }
                                    size="default"
                                >
                                    <Descriptions.Item span={3} label="价格">
                                        <Statistic value={goods.goodsPrice} valueStyle={{ color: '#ff0036' }} prefix="¥" />
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
                                <Descriptions size="default">
                                    <Descriptions.Item span={3} label="数量">
                                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />&nbsp;件&nbsp;&nbsp;&nbsp;
                                (库存{goods.goodsNum}件)
                                    </Descriptions.Item>
                                    <Descriptions.Item span={3}>
                                        <Button type="danger" className={styles.btn} size="large" >立即购买</Button>
                                        <Button onClick={this.toShoppingCart} type="danger" icon="shopping-cart" className={styles.btn2} size="large" >加入购物车</Button>
                                        <Button onClick={this.addStarGoods} type="primary" size="large" className={styles.btn3} >收藏商品</Button>
                                    </Descriptions.Item>
                                </Descriptions>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Card bordered={false}>
                            <Tabs defaultActiveKey="1"  tabBarExtraContent={operations}>
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
                                <Descriptions.Item label="价格段">{
                                    goods.goodsPricesegment === 1 ?
                                    '100元以下'
                                    :
                                    goods.goodsPricesegment === 2 ?
                                    '100~200元'
                                    :
                                    goods.goodsPricesegment === 3 ?
                                    '200~500元'
                                    :
                                    '500元以上'
                                }</Descriptions.Item>
                                        <Descriptions.Item label="茶种类">洞庭碧螺春</Descriptions.Item>
                                        <Descriptions.Item label="生长季节">春季</Descriptions.Item>
                                        <Descriptions.Item label="净含量">50g</Descriptions.Item>
                                        <Descriptions.Item label="生产日期">2019年12月26日至2020年4月26日</Descriptions.Item>
                                    </Descriptions>
                                    <Card bordered={false} title="详细信息">
                                        {
                                            // eslint-disable-next-line no-nested-ternary
                                            JSON.stringify(goodsDetail) === '{}' ?
                                            detailList.map(item=>{
                                                return (
                                                    <img alt="商品详情展示" src={item.pictureDetail} key={item.pictureId} />
                                                )
                                            })
                                            :
                                            goodsDetail.total === 0 ?
                                            detailList.map(item=>{
                                                return (
                                                    <img alt="商品详情展示" src={item.pictureDetail} key={item.pictureId} />
                                                )
                                            })
                                            :
                                            goodsDetail.list.map(item=> {
                                                return (
                                                    <img alt="商品详情展示" src={item.pictureDetail} key={item.pictureId} />
                                                )
                                            })
                                        }
                                    </Card>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Row>
                    <Divider>END</Divider>
                </PageHeaderWrapper>
                <ModifyPicture
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    id={id}
                />
            </>
        )
    }
}
export default MallDetail;
