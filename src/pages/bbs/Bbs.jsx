import React, { Component } from 'react';
import { Button, Card, Col, Form, Icon, List, Row, Select, Tag, Typography, Avatar, Divider,Menu } from 'antd';
import router from 'umi/router';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import ArticleListContent from '../../components/ArticleListContent';
import picture from '../../assets/picture.png';
import touxiang from '../../assets/avatar7.jpg';
import styles from './bbs.less';

const { Title } = Typography;
const { SubMenu } = Menu;
function handleClick(e) {
  console.log('click', e);
}

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
        count: 5,
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
      <PageHeaderWrapper className={styles.pageHeader}>
        <Row gutter={24}>
          <Col xl={24} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <div className={styles.background}>
              <Title>茶 · 论坛</Title>
              <Title level={2}>了解中国茶的点点滴滴......</Title>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={7} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Menu onClick={handleClick} style={{ width: 256,float:'right' }} mode="vertical">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>今日话题</span>
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>最近更新</span>
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>茶 · 知识</span>
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>茶 · 文化</span>
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>茶 · 传说</span>
                  </span>
                }
              >
              </SubMenu>
            </Menu>
          </Col>
          <Col xl={17} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card
              title="茶 · 文化"
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
                        <a className={styles.listItemMetaTitle} href="../bbs/1">
                          {item.title}
                        </a>
                      }
                      description={
                        <span>
                          <Tag color="#87d068">绿茶</Tag>
                          <Tag color="#f50">今日话题</Tag>
                          <Tag color="#2db7f5">最近更新</Tag>
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
        <Divider>END</Divider>
      </PageHeaderWrapper>
    );
  }
}

export default Bbs;
