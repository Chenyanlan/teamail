import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import moment from 'moment';
import { Row, Col, Typography, Menu, Icon, Card, Divider, List, Avatar, Comment, Tooltip, Button, Input,Form } from 'antd';
import styles from './bbsdetail.less';
import bbsdetail1 from '../../assets/bbsdetail1.png';
import avatar5 from '../../assets/avatar5.jpg';
import avatar6 from '../../assets/avatar6.jpg';

function handleClick(e) {
    console.log('click', e);
}
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;
const { TextArea } = Input;
const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? '评论' : '评论'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                评论
        </Button>
        </Form.Item>
    </div>
);
class BbsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            value: '',
        };
    }

    handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });
    
        setTimeout(() => {
          this.setState({
            submitting: false,
            value: '',
            comments: [
              {
                author: 'yanlan chen',
                avatar: avatar5,
                content: <p>{this.state.value}</p>,
                datetime: moment().fromNow(),
              },
              ...this.state.comments,
            ],
          });
        }, 1000);
      };
    
      handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };

    render() {
        const { comments, submitting, value } = this.state;
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
        const title = (
            <>
                <Title level={4}>
                    绿茶、白茶、黄茶、青茶、红茶、黑茶这六大茶类怎样区分？
                </Title>
                <span>{moment().format('YYYY-MM-DD HH:mm')}</span>
                &nbsp;&nbsp;
                <span>作者：nanase</span>

            </>
        )
        const extra = (
            <>
                <IconText key="star" type="star-o" text={77} />
                <Divider type="vertical" />
                <IconText key="like" type="like-o" text={77} />
                <Divider type="vertical" />
                <IconText type="message" key="message" text={77} />
            </>
        )

        const data = [
            {
                actions: [<span key="comment-list-reply-to-0">回复</span>],
                author: 'mai',
                //   avatar: avatar5,
                content: (
                    <p>
                        说的真好，谢谢大佬！
                </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(1, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>
                            {moment()
                                .subtract(1, 'days')
                                .fromNow()}
                        </span>
                    </Tooltip>
                ),
            },
            {
                actions: [<span key="comment-list-reply-to-0">回复</span>],
                author: 'yourina',
                //   avatar: avatar6,
                content: (
                    <p>
                        感谢分享，收获良多！
                </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(2, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>
                            {moment()
                                .subtract(2, 'days')
                                .fromNow()}
                        </span>
                    </Tooltip>
                ),
            },
        ];
        return (
            <PageHeaderWrapper>
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
                        <Menu onClick={handleClick} style={{ width: 256, float: 'right' }} mode="vertical">
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
                            <SubMenu
                                key="sub6"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>绿茶</span>
                                    </span>
                                }
                            >
                            </SubMenu>
                            <SubMenu
                                key="sub7"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>黑茶</span>
                                    </span>
                                }
                            >
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col xl={17} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                        <Card bordered={false} title={title} extra={extra}>
                            <Paragraph>
                                中国是茶的故乡，不仅因为这里培植出了世界上第一株茶树，更因为茶已经成为一种文化，成为中国人文化和性格不可分割的重要组成部分。六大茶类怎么区分的呢？绿茶、白茶、黄茶、红茶、青茶、黑茶是不是用不同茶树的叶子做成不同茶呢？</Paragraph>
                            <Paragraph>
                                今天告诉你！其实是相同的一片叶子就可以做成六大茶类。
                            </Paragraph>
                            <img alt="" src={bbsdetail1} height="auto" width="761" />
                            <Title level={3}>绿茶：不发酵讲究新鲜</Title>
                            <Paragraph>
                                绿茶的特点是鲜叶采摘后高温迅速灭掉其中酶类，抑制茶多酚氧化。所以绿茶具有“三绿”的特点：干茶绿，茶汤绿，冲泡后的叶底也是绿色的。
                            </Paragraph>
                            <Paragraph>喝法：绿茶一般冲泡水温以85℃为宜。冲泡时间以2~3分钟为好。绿茶与水的比例以1∶50为宜。在茶具方面，可以选用瓷杯或透明玻璃杯，冲泡时不要盖盖子。</Paragraph>
                            <Paragraph>
                                <Text strong>
                                    【最适合人群】
                                    </Text>
                                适合工作忙碌、用电脑较多的青年人;体质偏热、胃火旺、精力充沛的人也可多饮用;注意：绿茶营养丰富，但对肠胃刺激较大，所以过敏体质、脾胃虚寒者不适合;神经虚弱者、易失眠者不宜饮。 </Paragraph>
                            <Title level={3}>白茶：不发酵制作简单</Title>
                            <Paragraph>
                                白茶是制作最为简单的一种茶类，经两三天纯天然酝酿而成，不经任何微发酵，不促进也不抑制茶多酚的氧化。白茶干茶多白毫，远远看去，就像一座白雪皑皑的小山，因此得名whitetea。
                            </Paragraph>
                            <Paragraph>喝法：如果是盖碗冲泡，坐杯（每次冲泡茶叶的浸泡时间）的时间长一些汤色会是浅黄色或者杏黄色。白茶干茶看起来太绿或者太红都是不对的，这些都说明了制作工艺上的缺陷。泡白茶很简单，选用沸水，抓一撮丢杯子，泡。</Paragraph>
                            <Paragraph>
                                <Text strong>
                                    【最适合人群】
                                </Text>
                                适合精神紧张、压力大者;少年儿童喝白茶有利于保护眼睛。
                            </Paragraph>
                            <Title level={3}>黄茶：轻发酵“闷”黄</Title>
                            <Paragraph>
                                黄茶很少见，甚至生活在黄茶茶区的人都不一定知道黄茶。会烧菜的人都知道青菜闷在锅里就会变黄。黄茶也是这样。黄茶在像绿茶一样杀青之后，通过湿热和干热两种方式让绿茶的茶叶变黄。
                            </Paragraph>
                            <Paragraph>喝法：黄茶可用少量90℃的水冲泡30秒~1分钟，再冲至八分满，2~3分钟后即可饮用。在饮用后留1/3的水量以便第二泡。</Paragraph>
                            <Paragraph>
                                <Text strong>
                                    【最适合人群】
                                </Text>
                                适合消化不良，食欲不振者。
                            </Paragraph>
                            <Title level={3}>青茶：半发酵特点折中</Title>
                            <Paragraph>
                                青茶也叫乌龙茶，属于半发酵茶，但是这个“半”是不怎么准确的。因为在乌龙茶中，发酵程度最轻的包种茶快接近绿茶了，发酵程度最重的东方美人茶快接近红茶了（这两种极端的茶都是台湾的）。乌龙茶产量最大的是福建，大众熟知的铁观音和大红袍都属于乌龙茶。
                            </Paragraph>
                            <Paragraph>喝法：泡乌龙茶选用容易茶水分离的器皿（盖碗、一壶一杯或者飘逸杯），且一定要用100℃的沸水，冲泡后要加盖。注意，每一次冲泡都要将其中的茶汤倒干净才不会影响下一泡的滋味。</Paragraph>
                            <Paragraph>
                                <Text strong>
                                    【最适合人群】
                                </Text>
                                适宜人群最广，尤其适合需要减肥、吃得过饱、心情急躁的人。
                            </Paragraph>
                            <Title level={3}>红茶：全发酵茶汤红亮</Title>
                            <Paragraph>
                                萎凋、揉捻、发酵都是为了促进红茶中的茶多酚氧化。茶多酚本身是一种无色的物质，其中的儿茶素在红茶加工的过程中聚合形成了黄色的茶黄素和红色的茶红素，因此红茶的茶汤红亮、叶底也是红色的。只是红茶在干燥的过程中，由于水分的散失，茶叶表面的茶色素颜色加深因此红茶的干茶是黑色的。
                            </Paragraph>
                            <Paragraph>喝法：泡红茶最好用刚煮沸的水，冲泡时间以3~5分钟为佳。红茶最好用玻璃杯来冲泡，可使用中投法，先在杯中倒入大约1/10的热水烫杯，再投入3~5克茶叶，然后再沿玻璃杯壁倒水进行冲泡。最后注意，红茶不要喝新茶，要放置半个月后饮用。</Paragraph>
                            <Paragraph>
                                <Text strong>
                                    【最适合人群】
                                </Text>
                                最适合身体较虚、脾胃功能差、手脚发凉者饮用者，红茶是调饮的最佳选择。
                            </Paragraph>
                            <Title level={3}>黑茶：后发酵茶马古道</Title>
                            <Paragraph>
                                同样是促进茶多酚氧化和内质转变的茶，黑茶和红茶的不同在于：红茶的酶促反应动力来自茶叶自身的酶，而黑茶来自微生物产生的酶。所以黑茶称之为抑制茶叶自身酶活而促进微生物活动的后发酵茶。黑茶具有一定促进消化和调节肠道微生物菌群等作用。。
                            </Paragraph>
                            <Paragraph>喝法：喝黑茶如果是粗老的原料可以煮着喝，如果是嫩的原料可以用100℃沸水冲泡喝。</Paragraph>
                            <Paragraph>
                                <Text strong>
                                    【最适合人群】
                                </Text>
                                去脂解腻效果强，适合肥胖、血糖高、血脂高、抽烟喝酒、便秘的人。由于性质温和，虚寒体质者较适合
                            </Paragraph>
                            <Divider />
                        </Card>
                        <Card bordered={false}>
                            {comments.length > 0 && <CommentList comments={comments} />}
                            <Comment
                                avatar={
                                    <Avatar
                                        src={avatar5}
                                        alt="yanlan chen"
                                    />
                                }
                                content={
                                    <Editor
                                        onChange={this.handleChange}
                                        onSubmit={this.handleSubmit}
                                        submitting={submitting}
                                        value={value}
                                    />
                                }
                            />

                        </Card>

                    </Col>
                </Row>
                <Divider>END</Divider>
            </PageHeaderWrapper>
        )
    }
}
export default BbsDetail;