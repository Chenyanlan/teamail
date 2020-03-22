import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import moment from 'moment';
import { connect } from 'dva';
import router from 'umi/router';
import { Carousel, Row, Col, Tabs, Icon, Card, List, Avatar, Typography, Menu, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import TagCloud from '../components/TagCloud'
import touxiang from '../assets/avatar2.jpg';
import touxiang2 from '../assets/avatar3.jpg';
import picture from '../assets/picture2.jfif';
import square1 from '../assets/square1.png';
import square2 from '../assets/square2.png';
import square3 from '../assets/square3.png';
import square4 from '../assets/square4.png';
import square5 from '../assets/square5.png';
import square6 from '../assets/square6.png';
import square7 from '../assets/square7.jpg';
import square8 from '../assets/square8.jpg';
import square9 from '../assets/square9.jpg';
import square10 from '../assets/square10.jpg';
import styles from './Welcome.less';

const listData = [];
for (let i = 0; i < 1; i++) {
  listData.push({
    href: 'http://ant.design',
    title: '茶行业革命',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      '拿茶行业的销售来说，一个人干就是夫妻店生意，一群人干是销售部，全国各地都有人利益抱团一起干，就是全国市场深度分销。',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const data3 = [
  {
    title: '绿茶、白茶、黄茶、青茶、红茶、黑茶这六大类茶类怎样区分？',
    description: '今天告诉你！其实是相同的一片叶子就可以做成六大茶类。'
  },
  {
    title: '11种“奇葩茶”，你听过哪种？',
    description: '茶叶有千万种，除了我们熟知的、常喝的，还有各种各样奇葩的制茶、饮茶方式不断被人们创造出来。今天就给各位介绍一些“奇葩茶叶”，看看有没有你尝过的呢？'
  },
  {
    title: '喝茉莉花茶的功效作用与禁忌有哪些',
    description: '茉莉花茶又叫茉莉香片，属于花茶，其茶香与茉莉花香交互融合，有“窨得茉莉无上味，列作人间第一香”的美誉。'
  },
  // {
  //   title: '以茶待客之道，需学会“察言观色”',
  //   description:'“以茶待客”历来是我国最普及、最具平民性的日常生活礼仪。'
  // },
];
const data4 = [
  {
    title: '1分钟，了解中国茶文化发展史',
    description: '中国制茶历史悠久，自发现野生茶树，到今天的泡茶文化，上千年的茶叶发展史。'
  },
  {
    title: '茶道·茶文化————茶三酒四',
    description: '茶三酒四，其表示的意思是品茶时，人不宜多，以二三人为宜。'
  },
  {
    title: '以茶之名，令人动心',
    description: '自古茶名一事，说来便有无尽风雅。'
  },
  {
    title: '以茶待客之道，需学会“察言观色”',
    description: '“以茶待客”历来是我国最普及、最具平民性的日常生活礼仪。'
  },
];
const { TabPane } = Tabs;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;
// 欢迎界面，用户登录主页面
const tags = [
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '花茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '茶具', value: Math.floor(Math.random() * 50) + 40 },
  { name: '紫砂陶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '竹制', value: Math.floor(Math.random() * 50) + 40 },
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '花茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '茶具', value: Math.floor(Math.random() * 50) + 40 },
  { name: '紫砂陶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '竹制', value: Math.floor(Math.random() * 50) + 40 },
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '花茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '茶具', value: Math.floor(Math.random() * 50) + 40 },
  { name: '紫砂陶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '竹制', value: Math.floor(Math.random() * 50) + 40 },
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '花茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '茶具', value: Math.floor(Math.random() * 50) + 40 },
  { name: '紫砂陶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '竹制', value: Math.floor(Math.random() * 50) + 40 },
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '花茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '茶具', value: Math.floor(Math.random() * 50) + 40 },
  { name: '紫砂陶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '竹制', value: Math.floor(Math.random() * 50) + 40 },
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '花茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '茶具', value: Math.floor(Math.random() * 50) + 40 },
  { name: '紫砂陶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '竹制', value: Math.floor(Math.random() * 50) + 40 },
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '花茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '茶具', value: Math.floor(Math.random() * 50) + 40 },
  { name: '紫砂陶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '竹制', value: Math.floor(Math.random() * 50) + 40 },
  { name: '绿茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '红茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '白茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黄茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '黑茶', value: Math.floor(Math.random() * 50) + 40 },
  { name: '青茶', value: Math.floor(Math.random() * 50) + 40 },
]
const list = [
  { title: '2019新茶上市', cover: square4, subDescription: '西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', count: Math.floor(Math.random() * 50) + 40 },
  { title: '大促销', cover: square3, subDescription: '西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', count: Math.floor(Math.random() * 50) + 40 },
  { title: '2019新茶上市', cover: square5, subDescription: '西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', count: Math.floor(Math.random() * 50) + 40 },
  { title: '今日热点', cover: square6, subDescription: '西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', count: Math.floor(Math.random() * 50) + 40 },
]
const list2 = [
  { title: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', cover: square7, subDescription: '三万昌 碧螺春2019新茶特级洞庭山正宗原产', money: Math.floor(Math.random() * 50) + 40,count:Math.floor(Math.random() * 50) + 40 },
  { title: '金牌卖家 特技碧螺春四川特级绿茶', cover: square8, subDescription: '金牌卖家 特技碧螺春四川特级绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶', cover: square9, subDescription: '2019新茶上市西湖牌特级碧螺春200g纪念纸包茶叶春茶,龙井绿茶',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
  { title: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装', cover: square10, subDescription: '买一送一铁观音 茶叶1725乌龙茶新茶铁观音浓香型礼盒装',money: Math.floor(Math.random() * 50) + 40, count: Math.floor(Math.random() * 50) + 40 },
]

@connect(({ welcome, mall, listSearchArticles }) => ({
  welcome,
  goodsList: mall.goodsList,
  nearList: listSearchArticles.nearList,
  article: listSearchArticles.article,
}))
class Welcome extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'welcome/getLunbos',
    })
    dispatch({
      type: 'mall/getGoodsList',
    })
    dispatch({
      type: 'listSearchArticles/getArticleByTime',
    })
    dispatch({
      type: 'listSearchArticles/getArticleById',
      payload: {
        articleId: 1,
      },
    })
  }

   handleClick= e => {
    console.log('click', e);
    const { key } = e;
    if (key === '1' || key ==='4' ||key === '7' || key ==='10' || key ==='13' ||key === '16' || key ==='19') {
      router.push('/wiki');
    } else if (key === '2' ||key === '5' || key ==='8' ||key === '11' ||key === '14' || key ==='17' ||key === '20') {
      router.push('/mall');
    } else {
      router.push('/article');
    }
  }

  render() {
    console.log(this.props);
    const { welcome: { lunbo }, goodsList, nearList, article } = this.props;
    console.log(goodsList);
    const goodlist = goodsList.slice(0, 4);
    const nearlist = nearList.slice(0, 4);
    console.log(article);
    const articles = [article];
    return (
      <GridContent>
    <React.Fragment>
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}
          style={{
            marginBottom: 24,
          }}
        >
          <Carousel autoplay>
            {
              lunbo.map(item => {
                return (
                  <div>
                    <img className={styles.lunbo} src={item.lunboDetail} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24} style={{
          marginBottom: 24,
        }}>
          <Card
            title="热门搜索"
            bordered={false}
            bodyStyle={{
              overflow: 'hidden',
            }}
          >
            <TagCloud data={tags || []} height={285} />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xl={6} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Menu onClick={this.handleClick} className={styles.menu} mode="vertical">
            <SubMenu
              key={1}
              title={
                <span>
                  <Icon type="smile" />
                  <span>绿茶</span>
                </span>
              }
            >
              <Menu.ItemGroup title="绿茶">
                <Menu.Item key="1">百科</Menu.Item>
                <Menu.Item key="2">商品</Menu.Item>
                <Menu.Item key="3">文章</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key={2}
              title={
                <span>
                  <Icon type="smile" />
                  <span>红茶</span>
                </span>
              }
            >
              <Menu.ItemGroup title="红茶">
                <Menu.Item key="4">百科</Menu.Item>
                <Menu.Item key="5">商品</Menu.Item>
                <Menu.Item key="6">文章</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key={4}
              title={
                <span>
                  <Icon type="smile" />
                  <span>白茶</span>
                </span>
              }
            >
              <Menu.ItemGroup title="白茶">
                <Menu.Item key="7">百科</Menu.Item>
                <Menu.Item key="8">商品</Menu.Item>
                <Menu.Item key="9">文章</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key={5}
              title={
                <span>
                  <Icon type="smile" />
                  <span>黄茶</span>
                </span>
              }
            >
              <Menu.ItemGroup title="黄茶">
                <Menu.Item key="10">百科</Menu.Item>
                <Menu.Item key="11">商品</Menu.Item>
                <Menu.Item key="12">文章</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key={3}
              title={
                <span>
                  <Icon type="smile" />
                  <span>黑茶</span>
                </span>
              }
            >
              <Menu.ItemGroup title="黑茶">
                <Menu.Item key="13">百科</Menu.Item>
                <Menu.Item key="14">商品</Menu.Item>
                <Menu.Item key="15">文章</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key={6}
              title={
                <span>
                  <Icon type="smile" />
                  <span>乌龙茶</span>
                </span>
              }
            >
              <Menu.ItemGroup title="乌龙茶">
                <Menu.Item key="16">百科</Menu.Item>
                <Menu.Item key="17">商品</Menu.Item>
                <Menu.Item key="18">文章</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key={7}
              title={
                <span>
                  <Icon type="smile" />
                  <span>花茶及其他</span>
                </span>
              }
            >
              <Menu.ItemGroup title="花茶及其他">
                <Menu.Item key="19">百科</Menu.Item>
                <Menu.Item key="20">商品</Menu.Item>
                <Menu.Item key="21">文章</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Col>
        <Col xl={6} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card bordered={false} title="今日好货">
            <Carousel autoplay>
              <div>
                <div className={styles.squareLunbo}><img alt="方形图片1" src={square1} /></div>
              </div>
              <div>
                <div className={styles.squareLunbo}><img alt="方形图片2" src={square2} /></div>
              </div>
              <div>
                <div className={styles.squareLunbo}><img alt="方形图片3" src={square6} /></div>
              </div>
            </Carousel>
          </Card>
        </Col>
        <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card bordered={false}>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab="今日话题"
                key="1"
              >
                <div className={styles.topic}>
            <Title level={4}>{article.articleTitle}</Title>
                  <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={articles}
                    renderItem={item => (
                      <List.Item
                        key={item.articleId}
                        actions={[
                          <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                          <IconText type="message" text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                          <img
                            width={272}
                            alt="logo"
                            src={picture}
                          />
                        }
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.userAvatar} />}
                          title={<a href={`./bbs/${item.articleId}`}>{item.articleTitle}</a>}
                          description={
                            <Paragraph ellipsis className={styles.description}>
                            {item.articleDetail}</Paragraph>
                          }
                        />

                      </List.Item>
                    )}
                  />
                </div>
              </TabPane>
              <TabPane
                tab="最近更新"
                key="2"
              >
                <div className={styles.infiniteScrollContainer}>
                  <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    useWindow={false}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={nearlist}
                      bordered={false}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={item.userAvatar} />}
                            title={<a href={`./bbs/${item.articleId}`}>{item.articleTitle}</a>}
                            description={<span className={styles.description}>{item.articleDetail}</span>}
                          />

                        </List.Item>
                      )}
                    />
                  </InfiniteScroll>
                </div>
              </TabPane>
              {/* <TabPane
                tab="茶叶知识"
                key="3"
              >
                <div className={styles.infiniteScrollContainer}>
                  <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    useWindow={false}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={data3}
                      bordered={false}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={touxiang2} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={<span>{item.description}</span>}
                          />

                        </List.Item>
                      )}
                    />
                  </InfiniteScroll>
                </div>
              </TabPane>
              <TabPane
                tab="茶叶文化"
                key="4"
              >
                <div className={styles.infiniteScrollContainer}>
                  <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    useWindow={false}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={data4}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={touxiang} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={<span>{item.description}</span>}
                          />

                        </List.Item>
                      )}
                    />
                  </InfiniteScroll>
                </div>
              </TabPane> */}
            </Tabs>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card bordered={false} title="每日好货">
            <List
              rowKey="id"
              grid={{
                gutter: 24,
                xl: 2,
                lg: 2,
                md: 2,
                sm: 1,
                xs: 1,
              }}
              dataSource={goodlist}
              renderItem={item => (
                <List.Item>
                  <Card
                    hoverable
                    cover={<img alt={item.goodsTitle} src={item.goodsPictureDisplay} />}
                  >
                    <Card.Meta
                      title={<a href={`./mall/${item.goodsId}`}>{item.goodsTitle}</a>}
                      description={
                        <Paragraph
                          ellipsis={{
                            rows: 2,
                          }}
                        >
                          {item.goodsTitle}
                        </Paragraph>
                      }
                    />
                    <div>
                      <span><Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" />&nbsp;&nbsp;&nbsp;{item.goodsHighpraise}人都说好</span>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card bordered={false} title="热卖单品">
            <List
              rowKey="id"
              grid={{
                gutter: 24,
                xl: 2,
                lg: 2,
                md: 2,
                sm: 1,
                xs: 1,
              }}
              dataSource={goodlist}
              renderItem={item => (
                <List.Item>
                  <Card
                    hoverable
                    cover={<img alt={item.goodsTitle} src={item.goodsPictureDisplay} />}
                  >
                    <Card.Meta
                      title={<a href={`./mall/${item.goodsId}`}>{item.goodsTitle}</a>}
                      description={
                        <Paragraph
                          ellipsis={{
                            rows: 2,
                          }}
                        >
                          {item.goodsTitle}
                        </Paragraph>
                      }
                    />
                    <div>
                      <span className={styles.money}> <Text type="danger" strong>￥&nbsp;&nbsp;&nbsp;{item.goodsPrice}</Text></span>
                      <span className={styles.count}> 月销&nbsp;&nbsp;{item.goodsCount}&nbsp;笔</span>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Divider>END</Divider>
    </React.Fragment>
  </GridContent>
    )
  }
}
export default Welcome;
