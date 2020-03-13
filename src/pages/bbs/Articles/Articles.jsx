import React, { Component } from 'react'
import { Icon, List, Tag } from 'antd';
import {connect} from 'dva';
import ArticleListContent from '../../../components/ArticleListContent';
import styles from './Articles.less';

@connect(({ loading }) => ({
 loading: loading.models.listSearchArticles,
}))
class Articles extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const { list, loading } = this.props;
        console.log(this.props);
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{marginRight:8,}} />
                {text}
            </span>
        )
        console.log(this.props);
        return (
            <List
                size="large"
                className={styles.articleList}
                rowKey="id"
                itemLayout="vertical"
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        key={item.articleId}
                        // actions={[
                        //     <IconText key="star" type="star-o" text={item.articleStar} />,
                        //     <IconText key="message" type="message" text={item.articleComment} />,
                        // ]}>
                            >
                        <List.Item.Meta
                            title={
                                <a className={styles.listItemMetaTile} href={`../bbs/${item.articleId}`}>
                                    {item.articleTitle}
                                </a>
                            }
                        />
                        <ArticleListContent data={item} />
                    </List.Item>
                 )}
            />
        )
    }
}

export default Articles;
