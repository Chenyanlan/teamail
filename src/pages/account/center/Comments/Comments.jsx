import React, { Component } from 'react';
import { connect } from 'dva';
import { List, Avatar, Popconfirm, message } from 'antd';

@connect(({ accountCenter }) => ({
    currentUser: accountCenter.currentUser,
    comments: accountCenter.comments,
}))
class Comments extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'accountCenter/getCommentByAuthorId',
            payload: {
                commentAuthorId: localStorage.getItem('userId'),
            },
        })
    }

     confirm=(item, e) => {
        console.log(e);
        console.log(item);
        const { dispatch } = this.props;
        dispatch({
            type: 'accountCenter/removeComment',
            payload: {
                commentId: item.commentId,
            }
        })
      }
      
      cancel=(e)=> {
        console.log(e);
        message.error('Click on No');
      }

    render() {
        console.log(this.props);
        const { comments,currentUser: {userAvatar}} = this.props;
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
                            </Popconfirm>,]}
                    >
                        <List.Item.Meta
                        avatar={<Avatar src={userAvatar} />}
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
