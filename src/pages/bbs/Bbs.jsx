import React, { Component } from 'react';
import { Button, Card, Col, Form, Icon, List, Row, Select, Tag,Typography ,Avatar } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import TagSelect from '../../components/TagSelect';
import ArticleListContent from '../../components/ArticleListContent';
import StandardFormRow from '../../components/StandardFormRow';
import picture from '../../assets/picture.png';
import touxiang from '../../assets/avatar7.jpg';
import styles from './bbs.less';

const { Title } = Typography;
const { Option } = Select;
const FormItem = Form.Item;
const pageSize = 5;

// @Form.create({
//   onValuesChange({ dispatch }) {
//     // 表单项变化时请求数据
//     // 模拟查询表单生效
//     dispatch({
//       type: 'listSearchArticles/fetch',
//       payload: {
//         count: 8,
//       },
//     });
//   },
// })
@Form.create()
@connect(({ listSearchArticles, loading }) => ({
  listSearchArticles,
  loading: loading.models.listSearchArticles,
}))
class Bbs extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listSearchArticles/fetch',
      payload: {
        count: 5,
      }
    })
  }

  setOwner = () => {
    const { form } = this.props;
    form.setFieldsValue({
      owner: ['wzj'],
    });
  };

  fetchMore = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'listSearchArticles/appendFetch',
      payload: {
        count: pageSize,
      },
    });
  };

  toDetail = () => {
    const key = 1;
    router.push(`/bbs/${key}`);
  }

  render() {
    console.log(this.props);
    const { form, listSearchArticles: { list }, loading } = this.props;
    const { getFieldDecorator } = form;
    const IconText = ({ type, text }) => (
      <span>
        <Icon
          type={type}
          style={{
            marginRight: 8,
          }}
        />
        {text}
      </span>
    );

    const listData = [];
    for (let i = 0; i < 3; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `茶咨询 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content:
          '近日，艾媒咨询发布的《2019-2021全球茶叶产业运行大数据与中国茶业创新发展趋势研究报告》(以下简称"报告")显示，2018年全球茶叶总产量为590.5万吨，其中，中国茶叶总产量为261.6万吨(44.7%)。',
      });
    }
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
    const loadMore = list.length > 0 && (
      <div
        style={{
          textAlign: 'center',
          marginTop: 16,
        }}
      >
        <Button
          onClick={this.fetchMore}
          style={{
            paddingLeft: 48,
            paddingRight: 48,
          }}
        >
          {loading ? (
            <span>
              <Icon type="loading" /> 加载中...
            </span>
          ) : (
              '加载更多'
            )}
        </Button>
      </div>
    );

    return (
      <>
        <div className={styles.background}>
          <Title>论坛</Title>
          <Title level={2}>了解中国茶的点点滴滴......</Title> 
        </div>
         {/* <Card bordered={false}>
          <Form layout="inline">
            <StandardFormRow
              title="标签"
              block
              style={{
                paddingBottom: 11,
              }}
            >
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
                    <TagSelect.Option value="cat8">传说</TagSelect.Option>
                    <TagSelect.Option value="cat9">小知识</TagSelect.Option>
                    <TagSelect.Option value="cat10">茶传说</TagSelect.Option>
                    <TagSelect.Option value="cat11">紫砂陶</TagSelect.Option>
                    <TagSelect.Option value="cat12">陶瓷</TagSelect.Option>
                  </TagSelect>,
                )}
              </FormItem>
            </StandardFormRow>
            <StandardFormRow title="其它选项" grid last>
              <Row gutter={16}>
                <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                  <FormItem {...formItemLayout} label="活跃用户">
                    {getFieldDecorator(
                      'user',
                      {},
                    )(
                      <Select
                        placeholder="不限"
                        style={{
                          maxWidth: 200,
                          width: '100%',
                        }}
                      >
                        <Option value="lisa">李三</Option>
                      </Select>,
                    )}
                  </FormItem>
                </Col>
                <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                  <FormItem {...formItemLayout} label="回复量">
                    {getFieldDecorator(
                      'rate',
                      {},
                    )(
                      <Select
                        placeholder="不限"
                        style={{
                          maxWidth: 200,
                          width: '100%',
                        }}
                      >
                        <Option value="good">优秀</Option>
                      </Select>,
                    )}
                  </FormItem>
                </Col>
              </Row>
            </StandardFormRow>
          </Form>
        </Card>  */}
        <Row gutter={24}>
          <Col xl={8} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <div className={styles.menu}>
              <a>茶·传说</a> <span className={styles.arrow}><a>></a></span>
            </div>
            <div className={styles.menu}>
              <a>茶·知识</a>  <span className={styles.arrow}><a>></a></span>
            </div>
            <div className={styles.menu}>
              <a>茶·故事</a> <span className={styles.arrow}><a>></a></span>
            </div>
            <Card
              style={{
                marginTop: 24,
              }}
              bordered={false}
              >
                <List
                  itemLayout="vertical"
                  size="middle"
                  header={
                    <Title level={4}>茶叶咨询</Title>
                  }
                  dataSource={listData}
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      // actions={[
                      //   <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                      //   <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                      //   <IconText type="message" text="2" key="list-vertical-message" />,
                      // ]}
                      extra={
                        <img
                          width={272}
                          alt="logo"
                          src={picture}
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={touxiang}/>}
                        title={<a href={item.href}>{item.title}</a>}
                        // description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
            </Card>
                {/* </Card> */}
          </Col>
          <Col xl={16} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title="茶文化"
              style={{
                marginTop: 24,
              }}
              bordered={false}
              bodyStyle={{
                padding: '8px 32px 32px 32px',
              }}
            >
              <List
                size="large"
                loading={list.length === 0 ? loading : false}
                rowKey="id"
                itemLayout="vertical"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <IconText key="star" type="star-o" text={item.star} />,
                      <IconText key="like" type="like-o" text={item.like} />,
                      <IconText type="message" key="message" text={item.message} />,
                    ]}
                    extra={<div className={styles.listItemExtra} />}
                  >
                    <List.Item.Meta
                      title={
                        <a className={styles.listItemMetaTitle} href={item.href}>
                          {item.title}
                        </a>
                      }
                      description={
                        <span>
                          <Tag>茶知识</Tag>
                          <Tag>茶文化</Tag>
                          <Tag>茶传说</Tag>
                        </span>
                      }
                    />
                    <ArticleListContent data={item} />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
     
        </Row>

      </>
    );
  }
}

export default Bbs;
