import React, { Component } from 'react'
import { Icon, List, Tag } from 'antd';
import {connect} from 'dva';
import ArticleListContent from '../../../../components/ArticleListContent';
import styles from './Articles.less';

@connect(({accountCenter})=>({
    list:accountCenter.list,
}))
class Articles extends Component {
    render() {
        const { list } = this.props;
        const IconText = ({type,text}) =>(
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
                renderItem={item =>(
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText key="star" type="star-o" text={item.star} />,
                            <IconText key="like" type="like-o" text={item.like} />,
                            <IconText key="message" type="message" text={item.message} />,
                        ]}>
                        <List.Item.Meta
                            title={
                                <a className={styles.listItemMetaTile} href="../bbs/1">
                                    {item.title}
                                </a>
                            }
                            description={
                                <span>
                                    <Tag>绿茶</Tag>
                                    <Tag>红茶</Tag>
                                    <Tag>黑茶</Tag>
                                </span>
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
