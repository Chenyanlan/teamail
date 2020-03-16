import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {connect} from 'dva';
import moment from 'moment';
import { Card, Col, Form, List, Row, Select, Typography,Button,Divider,Radio  } from 'antd';
import square7 from '../../assets/square7.jpg';
import square8 from '../../assets/square8.jpg';
import square9 from '../../assets/square9.jpg';
import square10 from '../../assets/square10.jpg';
import styles from './mall.less';

const { Option } = Select;
const { Paragraph,Text } = Typography;
const FormItem = Form.Item;
const pageSize = 5;
const getKey = (id, index) => `${id}-${index}`;
const list2 = [
  { title: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', cover: square7, subDescription: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', money: Math.floor(Math.random() * 50) + 40,count:Math.floor(Math.random() * 50) + 40 },
  { title: '金牌卖家 特技碧螺春四川特级绿茶', cover: square8, subDescription: '金牌卖家 特技碧螺春四川特级绿茶川特级绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', cover: square9, subDescription: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装', cover: square10, subDescription: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', cover: square7, subDescription: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', money: Math.floor(Math.random() * 50) + 40,count:Math.floor(Math.random() * 50) + 40 },
  { title: '金牌卖家 特技碧螺春四川特级绿茶', cover: square8, subDescription: '金牌卖家 特技碧螺春四川特级绿茶川特级绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', cover: square9, subDescription: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装', cover: square10, subDescription: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', cover: square7, subDescription: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', money: Math.floor(Math.random() * 50) + 40,count:Math.floor(Math.random() * 50) + 40 },
  { title: '金牌卖家 特技碧螺春四川特级绿茶', cover: square8, subDescription: '金牌卖家 特技碧螺春四川特级绿茶川特级绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', cover: square9, subDescription: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装', cover: square10, subDescription: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
]


@Form.create()
@connect(({ listSearchArticles, loading }) => ({
  listSearchArticles,
  loading: loading.models.listSearchArticles,
}))
class Mall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: '全部',
      value2: '全部',
      value3: '全部',
    }
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'listSearchArticles/fetch2',
      payload: {
        count: 8,
      }
    })
  }

  onChange1 = e => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
      value2: '全部',
      value3: '全部',
    });
  };

  onChange2 = e => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value,
      value1: '全部',
      value3: '全部',
    });
  };

  onChange3 = e => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
      value1: '全部',
      value2: '全部',
    });
  };

  render() {

    const formItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 24,
        },
        md: {
          span: 12,
        },
      },
    };
    console.log(this.props);
    const {form ,listSearchArticles:{list},loading} = this.props;
    const { getFieldDecorator } = form;
    const cardList = list && (
      <List
        rowKey="id"
        loading={loading}
        grid={{
          gutter: 24,
          xl: 4,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1,
        }}
        dataSource={list2}
        // loadMore={
        // <div
        //   style={{
        //     textAlign: 'center',
        //     marginTop: 12,
        //     height: 32,
        //     lineHeight: '32px',
        //   }}
        // >
        //   <Button onClick={this.onLoadMore}>加载更多</Button>
        // </div>}
        renderItem={item=>(
          <List.Item>
            <Card className={styles.card} hoverable
             cover={
              <img alt={item.title} src={item.cover} />
              // <div className={styles.img}></div>
             }>
              <Card.Meta title={<a href="../mall/1">{item.title}</a>}
              description={
              <Paragraph className={styles.item} ellipsis={{rows:2}}>
                {item.subDescription}
              </Paragraph>}
               />
               <div className={styles.cardItemContent}>
                  <span className={styles.money}> <Text type="danger" strong>￥&nbsp;&nbsp;&nbsp;{item.money}</Text></span>
                      <span className={styles.count}> 月销&nbsp;&nbsp;{item.count}&nbsp;笔</span>
               </div>
            </Card>
          </List.Item>
        )}
      >

      </List>
    )

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
        <div>
          <span>分类：</span>
          <Radio.Group buttonStyle="solid" value={this.state.value1} onChange={this.onChange1}>
            <Radio.Button value="全部">全部</Radio.Button>
            <Radio.Button value={1}>绿茶</Radio.Button>
            <Radio.Button value={2}>红茶</Radio.Button>
            <Radio.Button value={3}>黑茶</Radio.Button>
            <Radio.Button value={4}>白茶</Radio.Button>
            <Radio.Button value={5}>黄茶</Radio.Button>
            <Radio.Button value={6}>乌龙茶</Radio.Button>
            <Radio.Button value={7}>花茶</Radio.Button>
            <Radio.Button value={8}>茶具</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <span>十大名茶：</span>
          <Radio.Group buttonStyle="solid" value={this.state.value2} onChange={this.onChange2}>
            <Radio.Button value="全部">全部</Radio.Button>
            <Radio.Button value="西湖龙井">西湖龙井</Radio.Button>
            <Radio.Button value="江苏碧螺春">江苏碧螺春</Radio.Button>
            <Radio.Button value="安徽毛峰">安徽毛峰</Radio.Button>
            <Radio.Button value="安徽瓜片">安徽瓜片</Radio.Button>
            <Radio.Button value="福建银针">福建银针</Radio.Button>
            <Radio.Button value="信阳毛尖">信阳毛尖</Radio.Button>
            <Radio.Button value="安徽祁门红">安徽祁门红</Radio.Button>
            <Radio.Button value="都匀毛尖">都匀毛尖</Radio.Button>
            <Radio.Button value="武夷岩茶">武夷岩茶</Radio.Button>
            <Radio.Button value="福建铁观音">福建铁观音</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <span>价格：</span>
          <Radio.Group buttonStyle="solid" value={this.state.value3} onChange={this.onChange3}>
            <Radio.Button value="全部">全部</Radio.Button>
            <Radio.Button value={1}>100元以下</Radio.Button>
            <Radio.Button value={2}>100~200元</Radio.Button>
            <Radio.Button value={3}>200~500元</Radio.Button>
            <Radio.Button value={4}>500元以上</Radio.Button>
          </Radio.Group>
        </div>
        </Card>
        <div className={styles.cardList}>{cardList}</div>
        <Divider>END</Divider>
      </PageHeaderWrapper>
    );
  }
}
export default Mall;
