import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Carousel, Row, Col, Tabs, Icon, Card, List, Avatar, Typography, Menu,Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import touxiang from '../assets/avatar2.jpg';
import touxiang2 from '../assets/avatar3.jpg';
import picture from '../assets/picture2.jfif';
import styles from './Welcome.less';

const listData = [];
for (let i = 0; i < 1; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `茶行业革命`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      '拿茶行业的销售来说，一个人干就是夫妻店生意，一群人干是销售部，全国各地都有人利益抱团一起干，就是全国市场深度分销。',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
function handleClick(e) {
  console.log('click', e);
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const data2 = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Man charged over missing wedding girl.',
];
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
const { Title } = Typography;
const { SubMenu } = Menu;
// 欢迎界面，用户登录主页面
export default () => (
  <PageHeaderWrapper>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Menu onClick={handleClick} className={styles.menu} mode="vertical">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>绿茶</span>
              </span>
            }
          >
            <Menu.ItemGroup title="绿茶">
              <Menu.Item key="1">百科</Menu.Item>
              <Menu.Item key="2">文化</Menu.Item>
              <Menu.Item key="3">知识</Menu.Item>
              <Menu.Item key="4">商品</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>红茶</span>
              </span>
            }
          >
            <Menu.ItemGroup title="红茶">
              <Menu.Item key="5">百科</Menu.Item>
              <Menu.Item key="6">文化</Menu.Item>
              <Menu.Item key="7">知识</Menu.Item>
              <Menu.Item key="8">商品</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="setting" />
                <span>白茶</span>
              </span>
            }
          >
            <Menu.ItemGroup title="白茶">
              <Menu.Item key="9">百科</Menu.Item>
              <Menu.Item key="10">文化</Menu.Item>
              <Menu.Item key="11">知识</Menu.Item>
              <Menu.Item key="12">商品</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>黄茶</span>
              </span>
            }
          >
            <Menu.ItemGroup title="黄茶">
              <Menu.Item key="13">百科</Menu.Item>
              <Menu.Item key="14">文化</Menu.Item>
              <Menu.Item key="15">知识</Menu.Item>
              <Menu.Item key="16">商品</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="setting" />
                <span>黑茶</span>
              </span>
            }
          >
            <Menu.ItemGroup title="黑茶">
              <Menu.Item key="17">百科</Menu.Item>
              <Menu.Item key="18">文化</Menu.Item>
              <Menu.Item key="19">知识</Menu.Item>
              <Menu.Item key="20">商品</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <Icon type="setting" />
                <span>青茶</span>
              </span>
            }
          >
            <Menu.ItemGroup title="青茶">
              <Menu.Item key="21">百科</Menu.Item>
              <Menu.Item key="22">文化</Menu.Item>
              <Menu.Item key="23">知识</Menu.Item>
              <Menu.Item key="24">商品</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub7"
            title={
              <span>
                <Icon type="setting" />
                <span>花茶及其他</span>
              </span>
            }
          >
            <Menu.ItemGroup title="花茶及其他">
              <Menu.Item key="21">百科</Menu.Item>
              <Menu.Item key="22">文化</Menu.Item>
              <Menu.Item key="23">知识</Menu.Item>
              <Menu.Item key="24">商品</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
      <Col xs={10} sm={10} md={10} lg={10} xl={10}>
        <Carousel autoplay>
          <div>
            <div className={styles.lunbo1}></div>
          </div>
          <div>
            <div className={styles.lunbo2}></div>
          </div>
          <div>
            <div className={styles.lunbo3}></div>
          </div>
          <div>
            <div className={styles.lunbo4}></div>
          </div>
          <div>
            <div className={styles.lunbo5}></div>
          </div>
        </Carousel>
        <Divider />
      </Col>
      <Col xs={7} sm={7} md={7} lg={7} xl={7}>
        <Card bordered={false}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab="今日话题"
              key="1"
            >
              <div className={styles.topic}>
                <Title level={4}>中国茶产业的渠道效率革命</Title>
                <List
                  itemLayout="vertical"
                  size="large"
                  // pagination={{
                  //   onChange: page => {
                  //     console.log(page);
                  //   },
                  //   pageSize: 3,
                  // }}
                  dataSource={listData}
                  // footer={
                  //   <div>
                  //     <b>ant design</b> footer part
                  //   </div>
                  // }
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                        // <IconText type="like-o" text="156" key="list-vertical-like-o" />,
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
                        avatar={<Avatar src={touxiang} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {/* {item.content} */}
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
                    dataSource={data3}
                    bordered={false}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={touxiang2} />}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description={<span>{item.description}</span>}
                        />
                        {/* <div>查看详情</div> */}
                      </List.Item>
                    )}
                  />
                </InfiniteScroll>
              </div>
            </TabPane>
            <TabPane
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
                        {/* <div>查看详情</div> */}
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
                  // loadMore={this.handleInfiniteOnLoad}
                  // hasMore={!this.state.loading && this.state.hasMore}
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
                        {/* <div>查看详情</div> */}
                      </List.Item>
                    )}
                  />
                </InfiniteScroll>
              </div>
            </TabPane>
          </Tabs>
        </Card>
        <Divider />
      </Col>
    </Row>
    {/* <Divider /> */}
  </PageHeaderWrapper>
);
