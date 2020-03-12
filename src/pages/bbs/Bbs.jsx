import React, { Component } from 'react';
import { Button, Card, Col, Form, Icon, List, Row, Select, Tag, Typography, Avatar, Divider,Menu } from 'antd';
import router from 'umi/router';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import ArticleListContent from '../../components/ArticleListContent';
import Articles from './Articles/Articles';
import touxiang from '../../assets/avatar7.jpg';
import styles from './bbs.less';

const { Title } = Typography;
const { SubMenu } = Menu;


@Form.create()
@connect(({ listSearchArticles, loading }) => ({
  listSearchArticles,
  loading: loading.models.listSearchArticles,
}))
class Bbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabKey: 'allArticles',
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'listSearchArticles/fetch1',
    })
    dispatch({
      type: 'listSearchArticles/plate',
      payload: {
          articlePlate: 0,
      },
    })
    dispatch({
      type: 'listSearchArticles/plate1',
      payload: {
          articlePlate: 1,
      },
    })
    dispatch({
      type: 'listSearchArticles/plate2',
      payload: {
          articlePlate: 2,
      },
    })
    dispatch({
      type: 'listSearchArticles/getArticleByTime',
    })
    dispatch({
      type: 'listSearchArticles/getArticleByToday',
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

  handleClick = (e) => {
    console.log('click', e);
  }

  onTabChange = key => {
    this.setState({
      tabKey: key,
    });
  };

  renderChildrenByTabKey = tabKey => {
    console.log(tabKey)
    const { form, listSearchArticles: { list, plateList, plateList1, plateList2, articlesList, nearList, todayList }, loading } = this.props;
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
    if (tabKey === 'allArticles') {
        return <Articles tabKey = {tabKey} list = {articlesList} />
    }

    if (tabKey === 'todayArticles') {
      return <Articles tabKey = {tabKey} list = {todayList} />
    }
    if (tabKey === 'nearArticles') {
      return <Articles tabKey = {tabKey} list = {nearList} />
    }
    if (tabKey === 'konwledge') {
      return <Articles tabKey = {tabKey} list = {plateList}/>
    }
    if (tabKey === 'cultrue') {
      return <Articles tabKey = {tabKey} list = {plateList1}/>
    }
    if (tabKey === 'legend') {
      return <Articles tabKey = {tabKey} list = {plateList2}/>
    }
    return null;
  };

  render() {
    console.log(this.props);
    const {tabKey} = this.state;
    const { form, listSearchArticles: { list }, loading } = this.props;
    

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
    // const loadMore = list.length > 0 && (
    //   <div
    //     style={{
    //       textAlign: 'center',
    //       marginTop: 16,
    //     }}
    //   >
    //     <Button
    //       onClick={this.fetchMore}
    //       style={{
    //         paddingLeft: 48,
    //         paddingRight: 48,
    //       }}
    //     >
    //       {loading ? (
    //         <span>
    //           <Icon type="loading" /> 加载中...
    //         </span>
    //       ) : (
    //           '加载更多'
    //         )}
    //     </Button>
    //   </div>
    // );

    const operationTablList = [
      {
          key: 'allArticles',
          tab: (
              <span>
                  所有文章
              </span>
          ),
      },
      {
          key: 'todayArticles',
          tab: (
              <span>
                  今日话题
              </span>
          ),
      },
      {
        key: 'nearArticles',
        tab: (
            <span>
                最近更新
            </span>
        ),
      },
      {
        key: 'konwledge',
        tab: (
            <span>
                茶 · 知识
            </span>
        ),
      },
      {
        key: 'cultrue',
        tab: (
            <span>
                茶 · 文化
            </span>
        ),
      },
      {
        key: 'legend',
        tab: (
            <span>
                茶 · 传说
            </span>
        ),
      },
    ]
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
        <Col xl={24} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card className={styles.tabsCard}
                bordered={false}
                tabList={operationTablList}
                activeTabKey={tabKey}
                onTabChange={this.onTabChange}
                >
                {this.renderChildrenByTabKey(tabKey)}
            </Card>
          </Col>
        </Row>
        <Divider>END</Divider>
      </PageHeaderWrapper>
    );
  }
}

export default Bbs;
