import React, { Component } from 'react';

import { Button, Card, Col, Form, Icon, List, Row, Select, Tag } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import TagSelect from '../../components/TagSelect';
import ArticleListContent from '../../components/ArticleListContent';
import StandardFormRow from '../../components/StandardFormRow';
import styles from './bbs.less';

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
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Form layout="inline">
            <StandardFormRow
              title="所属类目"
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
        </Card>
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
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
                          <Tag>绿茶</Tag>
                          <Tag>茶文化</Tag>
                          <Tag>小知识</Tag>
                        </span>
                      }
                    />
                    <ArticleListContent data={item} />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          {/* <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card>

            </Card>
          </Col> */}
        </Row>

      </PageHeaderWrapper>
    );
  }
}

export default Bbs;
