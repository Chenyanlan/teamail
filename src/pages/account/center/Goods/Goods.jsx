import React, { Component } from 'react'
import { connect } from 'dva';
import { Card, Col, Form, List, Popconfirm, message, Typography,Button,Divider,Radio  } from 'antd';
import styles from './Goods.less';

const { Paragraph, Text } = Typography;

@connect(({ accountCenter }) => ({
    starGoodsList: accountCenter.starGoodsList,
}))
class Goods extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'accountCenter/getStarGoodsByUserId',
            payload: {
                starUserId: localStorage.getItem('userId'),
            },
        })
    }

     confirm=(item, e)=> {
        console.log(item);
        const { dispatch } = this.props;
        dispatch({
            type: 'accountCenter/removeStarGoods',
            payload: {
                starUserId: localStorage.getItem('userId'),
                starGoodsId: item.starGoodsId,
            },
        })
      }
      
       cancel=(e)=> {
        console.log(e);
        message.error('已取消');
      }

    render() {
        console.log(this.props);
        const { starGoodsList } = this.props;
        return (
            <div>
                <List
        rowKey="id"
        grid={{
          gutter: 24,
          xl: 3,
          lg: 2,
          md: 2,
          sm: 2,
          xs: 1,
        }}
        dataSource={starGoodsList}
        renderItem={item => (
          <List.Item>
            <Card className={styles.card} hoverable
             cover={
              <img alt={item.goodsTitle} src={item.goodsPictureDisplay} />
              // <div className={styles.img}></div>
             }>
              <Card.Meta title={<a href={`../mall/${item.starGoodsId}`}>{item.goodsTitle}</a>}
              description={
              <Paragraph className={styles.item} ellipsis={{ rows:2 }}>
                {item.goodsTitle}
              </Paragraph>}
               />
               <div className={styles.cardItemContent}>
                  <span className={styles.money}> <Text type="danger" strong>￥&nbsp;&nbsp;&nbsp;{item.goodsPrice}</Text></span>
                      <span className={styles.count}><Popconfirm
                            title="是否确定取消收藏该商品?"
                            onConfirm={this.confirm.bind(this, item)}
                            onCancel={this.cancel}
                            okText="是"
                            cancelText="否"
                        >
                            <a href="#">取消收藏</a>
                        </Popconfirm>
                    </span>
               </div>
            </Card>
          </List.Item>
        )}
      >

      </List>
            </div>
        )
    }
}

export default Goods;
