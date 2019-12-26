import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {connect} from 'dva';
import moment from 'moment';
import { Card, Col, Form, List, Row, Select, Typography,Button,Divider } from 'antd';
import  StandardFormRow from '../../components/StandardFormRow';
import TagSelect from '../../components/TagSelect';
import AvatarList from '../../components/AvatarList';
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

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch({
      type: 'listSearchArticles/fetch2',
      payload: {
        count: 8,
      }
    })
  }

  

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
        loadMore={
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>加载更多</Button>
        </div>}
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
          <Form layout="inline">
            <StandardFormRow title="分类" block style={{paddingBottom:11}}>
                <FormItem>
                  {getFieldDecorator('category')(
                    <TagSelect expandable>
                      <TagSelect.Option value="cat1">绿茶</TagSelect.Option>
                      <TagSelect.Option value="cat2">红茶</TagSelect.Option>
                      <TagSelect.Option value="cat3">黑茶</TagSelect.Option>
                      <TagSelect.Option value="cat4">白茶</TagSelect.Option>
                      <TagSelect.Option value="cat5">黄茶</TagSelect.Option>
                      <TagSelect.Option value="cat6">乌龙茶</TagSelect.Option>
                      <TagSelect.Option value="cat7">花茶</TagSelect.Option>
                      <TagSelect.Option value="cat8">茶宠</TagSelect.Option>
                      <TagSelect.Option value="cat9">龙井</TagSelect.Option>
                      <TagSelect.Option value="cat10">茶具</TagSelect.Option>
                      <TagSelect.Option value="cat11">紫砂陶</TagSelect.Option>
                      <TagSelect.Option value="cat12">陶瓷</TagSelect.Option>
                    </TagSelect>,
                  )}
                </FormItem>
            </StandardFormRow>
            <StandardFormRow title="十大名茶" block style={{paddingBottom:11}}>
                <FormItem>
                  {getFieldDecorator('famousTea')(
                    <TagSelect expandable>
                      <TagSelect.Option value="cat1">西湖龙井</TagSelect.Option>
                      <TagSelect.Option value="cat2">江苏碧螺春</TagSelect.Option>
                      <TagSelect.Option value="cat3">安徽毛峰</TagSelect.Option>
                      <TagSelect.Option value="cat4">安徽瓜片</TagSelect.Option>
                      <TagSelect.Option value="cat5">福建银针</TagSelect.Option>
                      <TagSelect.Option value="cat6">信阳毛尖</TagSelect.Option>
                      <TagSelect.Option value="cat7">安徽祁门红</TagSelect.Option>
                      <TagSelect.Option value="cat8">都匀毛尖</TagSelect.Option>
                      <TagSelect.Option value="cat9">武夷岩茶</TagSelect.Option>
                      <TagSelect.Option value="cat10">福建铁观音</TagSelect.Option>
                    </TagSelect>,
                  )}
                </FormItem>
            </StandardFormRow>
            <StandardFormRow title="价格" block style={{paddingBottom:11}}>
                <FormItem>
                  {getFieldDecorator('filter')(
                    <TagSelect expandable>
                      <TagSelect.Option value="cat1">100元以下</TagSelect.Option>
                      <TagSelect.Option value="cat2">100~200元</TagSelect.Option>
                      <TagSelect.Option value="cat3">200~300元</TagSelect.Option>
                      <TagSelect.Option value="cat4">300~400元</TagSelect.Option>
                      <TagSelect.Option value="cat5">400~500元</TagSelect.Option>
                      <TagSelect.Option value="cat6">500~1000元</TagSelect.Option>
                      <TagSelect.Option value="cat7">1000元以上</TagSelect.Option>
                    </TagSelect>,
                  )}
                </FormItem>
            </StandardFormRow>
            <StandardFormRow title="产地" block style={{paddingBottom:11}}>
                <FormItem>
                  {getFieldDecorator('place')(
                    <TagSelect expandable>
                      <TagSelect.Option value="cat1">杭州</TagSelect.Option>
                      <TagSelect.Option value="cat2">安徽</TagSelect.Option>
                      <TagSelect.Option value="cat3">祁门</TagSelect.Option>
                      <TagSelect.Option value="cat4">江苏</TagSelect.Option>
                      <TagSelect.Option value="cat5">福建</TagSelect.Option>
                      <TagSelect.Option value="cat6">武夷山</TagSelect.Option>
                    </TagSelect>,
                  )}
                </FormItem>
            </StandardFormRow>
          </Form>
        </Card>
        <div className={styles.cardList}>{cardList}</div>
        <Divider>END</Divider>
      </PageHeaderWrapper>
    );
  }
}
export default Mall;
