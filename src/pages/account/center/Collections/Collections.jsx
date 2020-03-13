import React, { Component } from 'react';
import { Icon, List, Popconfirm, message } from 'antd';
import { connect } from 'dva';
import ArticleListContent from '../../../../components/ArticleListContent';
import styles from './Collections.less';

@connect(({ accountCenter }) => ({
    starList: accountCenter.starList,
}))
 class Collections extends Component {
     componentDidMount() {
         const { dispatch } = this.props;
         dispatch({
             type: 'accountCenter/getStarArticleByUserID',
             payload: {
                 starUserId:localStorage.getItem('userId'),
             },
         })
     }


     confirm=(item, e) => {
        console.log(e);
        console.log(item);
        const { dispatch } = this.props;
        dispatch({
            type: 'accountCenter/removeStar',
            payload: {
                starUserId: localStorage.getItem('userId'),
                starArticleId: item.starArticleId,
            },
        })
      }
      
      cancel=(e) => {
        console.log(e);
        message.error('已取消。');
      }

    render() {
        console.log(this.props);
        const { starList } = this.props;
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{marginRight:8,}} />
                {text}
            </span>
        )
        return (
            <div>
                <List
                size="large"
                className={styles.articleList}
                rowKey="id"
                itemLayout="vertical"
                dataSource={starList}
                renderItem={item => (
                    <List.Item
                        key={item.starArticleId}
                        actions={[
                            <Popconfirm
                                title="是否确定取消收藏?"
                                onConfirm={this.confirm.bind(this,item)}
                                onCancel={this.cancel}
                                okText="是"
                                cancelText="否"
                            >
                                <a href="#">取消收藏</a>
                            </Popconfirm>,
                        ]}>
                        <List.Item.Meta
                            title={
                                <a className={styles.listItemMetaTile} href="../bbs/1">
                                    {item.articleTitle}
                                </a>
                            }
                        />
                        <ArticleListContent data={item} />
                    </List.Item>
                 )}
            />
            </div>
        )
    }
}

export default Collections;