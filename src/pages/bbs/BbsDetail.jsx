import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import moment from 'moment';
import { connect } from 'dva';
import { Row, Col, Typography, Menu, Icon, Card, Divider, List, Avatar, Comment, Tooltip, Button, Input,Form } from 'antd';
import styles from './bbsdetail.less';
import avatar5 from '../../assets/avatar5.jpg';
import avatar6 from '../../assets/avatar6.jpg';

const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;
const { TextArea } = Input;
const CommentList = ({ comments }) => {
    console.log(comments)
    let list = [];
    if(comments!==undefined){
        list = comments;
    }
    return (
        <List
            dataSource={list}
            header={`${list.length} ${list.length > 1 ? '评论' : '评论'}`}
            itemLayout="horizontal"
            renderItem={props => {
                console.log(props);
                return (
                    <Comment
                        content={props.commentDetail}
                        avatar={props.userAvatar === null ? avatar6 : props.userAvatar}
                        author={props.userName}
                        datetime={moment(props.createTime).fromNow()}
                    />
                )
            }}
        />
    )
};
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

@connect(({ listSearchArticles, user }) => ({
    listSearchArticles,
    user,
  }))
class BbsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            value: '',
        };
    }

    componentDidMount() {
        console.log(this.props);
        const { dispatch, match: { params: { id } } } = this.props;
        console.log(id);
        localStorage.setItem('articleId', id);
        dispatch({
            type: 'listSearchArticles/getCommentByArticleId',
            payload: {
                commentArticleId: id,
            },
        })
        dispatch({
            type: 'listSearchArticles/getArticleById',
            payload: {
                articleId: id,
            },
        })
        dispatch({
            type: 'user/fetchCurrentUser',
        })
        dispatch({
            type: 'listSearchArticles/getStars',
            payload: {
                starUserId: localStorage.getItem('userId'),
                starArticleId: id,
            },
        })
    }

    getStar = () => {
        const { dispatch, match: { params: { id } } } = this.props;
        dispatch({
            type: 'listSearchArticles/getStarByUserArticleId',
            payload: {
                starUserId: localStorage.getItem('userId'),
                starArticleId: id,
            }
        })
    }

    handleSubmit = () => {
        console.log(this.props);
        const { dispatch, listSearchArticles: { article: { articleId } }, user: { currentUser: { userId }} } = this.props;

        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });
        dispatch({
            type: 'listSearchArticles/addComment',
            payload: {
                commentDetail: this.state.value,
                commentArticleId: articleId,
                commentAuthorId: userId,
            },
        })
        this.setState({
            submitting: false,
            value: '',
        })
      };
    
      handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };

    render() {
        const { submitting, value } = this.state;
        console.log(this.props);
        const { listSearchArticles: { article, comments: { total, list }, starLists }, user: { currentUser: { userAvatar }} } = this.props;
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
                    {article.articleTitle}
                </Title>
                <span>{moment(article.updateTime).format('YYYY-MM-DD HH:mm')}</span>
                &nbsp;&nbsp;
                <span>作者：{article.userName}</span>

            </>
        )
        const extra = (
            <>
                <IconText key="star" type="star-o" text={starLists.total} />
                <Divider type="vertical" />
                <IconText type="message" key="message" text={total} />
                <Divider type="vertical" />
                <Button type="primary" onClick={this.getStar} >收藏</Button>
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
                    <Col xl={24} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
                        <Card bordered={false} title={title} extra={extra}>
                            <Paragraph>
                                {article.articleDetail}
                            </Paragraph>
                            <Divider />
                        </Card>
                        <Card bordered={false}>
                            { <CommentList comments={list} />}
                            <Comment
                                avatar={
                                    <Avatar
                                        src={userAvatar}
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