import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {connect} from 'dva';
import moment from 'moment';
import { Card, Col, Form, List, Row, Select, Typography } from 'antd';
import  StandardFormRow from '../../components/StandardFormRow';
import TagSelect from '../../components/TagSelect';
import AvatarList from '../../components/AvatarList';
import styles from './mall.less';

const { Option } = Select;
const { Paragraph } = Typography;
const FormItem = Form.Item;
const pageSize = 5;
const getKey = (id, index) => `${id}-${index}`;

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
        dataSource={list}
        renderItem={item=>(
          <List.Item>
            <Card className={styles.card} hoverable
             cover={
              <img alt={item.title} src={item.cover} />
              // <div className={styles.img}></div>
             }>
              <Card.Meta title={<a>{item.title}</a>}
              description={
              <Paragraph className={styles.item} ellipsis={{rows:2}}>
                {item.subDescription}
              </Paragraph>}
               />
               <div className={styles.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <div className={styles.avatarList}>
                  <AvatarList size="small">
                      {item.members.map((member, i) => (
                        <AvatarList.Item
                          key={getKey(item.id, i)}
                          src={member.avatar}
                          tips={member.name}
                        />
                      ))}
                    </AvatarList>
                    <span>...点击过</span>
                </div>
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
      </PageHeaderWrapper>
    );
  }
}
export default Mall;
