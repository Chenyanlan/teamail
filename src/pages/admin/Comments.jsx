import React, { Component } from 'react';
import { Popconfirm, message, Input, Button, Icon, List, Avatar } from 'antd';
import { connect } from 'dva';

@connect(({ listSearchArticles }) => ({
    listSearchArticles,
  }))
 class Comments extends Component {
    componentDidMount() {
        const { comment } = this.props;
        this.getData();
        localStorage.setItem('adminArticleId', comment.articleId);
    }

    getData = () => {
        const { dispatch, comment } = this.props;
        console.log(this.props);
        dispatch({
            type: 'listSearchArticles/getCommentByArticleId',
            payload: {
              commentArticleId: comment.articleId,
            },
        })
    }

    confirm = (item, e) => {
        console.log(item);
        const { dispatch } = this.props;
        dispatch({
            type: 'listSearchArticles/removeComment',
            payload: {
                commentId: item.commentId,
            },
        })
        this.getData();
    }

    cancel= e => {
        console.log(e);
        message.error('已取消。');
      }

    render() {
        const { comment, listSearchArticles: { comments } } = this.props;
        console.log(this.props);
        return (
            <div>
            <List
                itemLayout="horizontal"
                dataSource={JSON.stringify(comments) === '{}' ? [] : comments.list}
                renderItem={item => (
                <List.Item
                    actions={[
                        <Popconfirm
                            title="你确定要删除该条评论?"
                            onConfirm={ this.confirm.bind(this, item) }
                            onCancel={this.cancel}
                            okText="是"
                            cancelText="否"
                        >
                          <a key="list-loadmore-more">删除</a>
                        </Popconfirm>,
                        ]}
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.userAvatar} />}
                    title={<a>{item.articleTitle}</a>}
                    description={item.commentDetail}
                    />
                </List.Item>
                )}
            />
            </div>
        )
    }
}
export default Comments;