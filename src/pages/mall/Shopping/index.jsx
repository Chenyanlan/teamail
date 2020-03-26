import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table, Card, Button, Typography, Statistic, Descriptions, Popconfirm, message } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import shopping1 from '../../../assets/shopping1.jpg';
import styles from './index.less';

const { Text } = Typography;
@connect(({ shopping }) => ({
    shopping,
  }))
class Shopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'shopping/getCartList',
            payload: {
                cartUserId: localStorage.getItem('userId'),
            },
        })
        dispatch({
            type: 'shopping/getAllMoney',
            payload: {
                cartUserId: localStorage.getItem('userId'),
            },
        })
    }

    numAdd = record => {
        console.log(record);
        const { dispatch } = this.props;
        dispatch({
            type: 'shopping/plusNum',
            payload: {
                cartId: record.cartId,
            },
        })
    }

    numDelete = record => {
        const { dispatch } = this.props;
        dispatch({
            type: 'shopping/minusNum',
            payload: {
                cartId: record.cartId,
            },
        })
    }

    toPaypal = () => {
        router.push('/mallpaypal');
    }

    getAllMoney = () => {
        const { shopping: { cartList } } = this.props;
        let money = 0;
        cartList.map(item => {
            money += item.cartNum * item.goodsPrice
        })
        console.log(money);
        return money;
    }

    confirm=(record, e) => {
        console.log(e);
        console.log(record);
        const { dispatch } = this.props;
        dispatch({
            type: 'shopping/removeCart',
            payload: {
                cartId: record.cartId,
            }
        })
      }
      
     cancel=(e) => {
        console.log(e);
        message.error('已取消。');
      }

    render() {
        const { goodsPrice, cartNum } = this.state;
        console.log(this.props);
        const { shopping: { cartList, allMoney, allMoney: { money } } } = this.props;
        const columns = [
            {
              title: '商品名称',
              dataIndex: 'goodsTitle',
              key: 'goodsTitle',
              render: text => (<a href="../../mall/1">{text}</a>),
            },
            {
              title: '单价',
              dataIndex: 'goodsPrice',
              key: 'goodsPrice',
              align: 'right',
            },
            {
              title: '数量（件）',
              dataIndex: 'cartNum',
              key: 'cartNum',
              align: 'center',
              render: (text, record) => (
                    <>
                        <Button type="link" onClick={this.numDelete.bind(this, record)}>-</Button>
                        <Text>{text}</Text>
                        <Button type="link" onClick={this.numAdd.bind(this, record)}>+</Button>
                    </>
              ),
            },
            {
              title: '金额',
              dataIndex: 'amount',
              key: 'amount',
              align: 'right',
              render: (text, record) => {
                  console.log(text, record);
                  return (
                  <span>{record.cartNum * record.goodsPrice}</span>
                  )
              },
            },
            {
                title: '操作',
                dataIndex: ' operation',
                key: 'operation',
                render: (text,record) => (
                    <Popconfirm
                    title="你确定删除这个商品吗"
                    onConfirm={this.confirm.bind(this, record)}
                    onCancel={this.cancel}
                    okText="是"
                    cancelText="否"
                >
                    <a href="#">删除</a>
                    </Popconfirm>
                ),
            },
          ];

        return (
            <PageHeaderWrapper>
                <Card bordered={false}>
                    <Table
                        dataSource={cartList}
                        columns={columns}
                        pagination={false}
                    />
                    <div className={styles.container}>
                        <Descriptions>
                            <Descriptions.Item label="已选商品">
                            <span><Statistic value={cartList.length} valueStyle={{ color: '#ff0036' }} suffix="件"/></span>
                            </Descriptions.Item>
                            <Descriptions.Item label="合计">   <Statistic value={JSON.stringify(allMoney) === '{}' ? 0 : money.length === 0 ? 0 : money[0].total} valueStyle={{ color: '#ff0036' }} prefix="¥" precision={2}/></Descriptions.Item>
                            <Descriptions.Item>
                            <Button onClick={this.toPaypal} icon="pay-circle" type="danger" className={styles.btn}>结算</Button>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </Card>
            </PageHeaderWrapper>
        )
    }
}
export default Shopping;
