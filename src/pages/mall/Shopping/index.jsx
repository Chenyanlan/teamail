import React, { Component } from 'react'
import {  PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table,Card, Button,Typography, Row,Col,Statistic,Descriptions } from 'antd';
import router from 'umi/router';
import shopping1 from '../../../assets/shopping1.jpg';
import styles from './index.less';

const {Text} = Typography;
class Shopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price:99,
            num:2,

        }
    }

    numAdd =() => {
        const {num} = this.state;
        const newNum = num + 1;
        this.setState({
            num:newNum,
        })
    }

    numDelete =() => {
        const {num} = this.state;
        if (num === 1) {
            this.setState({
                num: 1,
            })
        } else {
            const newNum = num - 1;
            this.setState({
                num: newNum,
            })
        }
    }

    toPaypal = () =>{
        router.push('/mallpaypal');
    }

    render() {
        const {price,num} = this.state;
        const dataSource = [
            {
                name: '三万昌 炒青绿茶2019新茶苏州洞庭碧螺春茶散装东山西山茶叶125g',
                cover:shopping1,
                price,
                num,
                amount:price*num,
            },
        ]
        const columns = [
            {
              title: '商品名称',
              dataIndex: 'name',
              key: 'name',
              render:text => (<a href="../../mall/1">{text}</a>),
            },
            {
              title: '单价',
              dataIndex: 'price',
              key: 'price',
              align: 'right',
            },
            {
              title: '数量（件）',
              dataIndex: 'num',
              key: 'num',
              align: 'center',
              render:text=>(
                    <>
                        <Button type="link" onClick={this.numDelete}>-</Button>
                        <Text>{text}</Text>
                        <Button type="link" onClick={this.numAdd}>+</Button>
                    </>
              )
            },
            {
              title: '金额',
              dataIndex: 'amount',
              key: 'amount',
              align: 'right',
            },
            {
                title:'操作',
                dataIndex:'operation',
                key:'operation',
                render:()=>(
                    <a href="#">删除</a>
                )
            }
          ];
        
        return (
            <PageHeaderWrapper>
                <Card bordered={false}>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                    />
                    <div className={styles.container}>
                        <Descriptions>
                            <Descriptions.Item label="已选商品">
                            <span><Statistic value={dataSource.length} valueStyle={{ color: '#ff0036' }}   suffix="件"/></span>
                            </Descriptions.Item>
                            <Descriptions.Item label="合计（不含运费）">   <Statistic value={price*num} valueStyle={{ color: '#ff0036' }} prefix="¥" /></Descriptions.Item>
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
