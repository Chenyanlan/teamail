import React, { Component } from 'react'
import { Icon, List, Popconfirm, message } from 'antd';
import {connect} from 'dva';
import ArticleListContent from '../../../../components/ArticleListContent';
import ModifyArticle from '../../../../components/FormComponents/ModifyArticle';
import styles from './Articles.less';

@connect(({accountCenter})=>({
    list:accountCenter.list,
}))
class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            visible: false,
        }
    }

    showModal = (item) => {
        console.log(item);
        this.setState({ visible: true, article: item });
      };

      handleCancel = () => {
        this.setState({ visible: false });
      };

      handleCreate = () => {
        const { form } = this.formRef.props;
        const { article } = this.state;
        const { dispatch } = this.props;
        console.log(article);
        form.validateFields((err, values) => {
          if (err) {
            return;
          }

          console.log('Received values of form: ', values);
          values.articleId = article.articleId;
          dispatch({
              type: 'accountCenter/modifyArticle',
              payload: values,
          })
          form.resetFields();
          this.setState({ visible: false });
        });
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

       confirm=(item, e) => {
        const { dispatch } = this.props;
        console.log(e);
        console.log(item);
        dispatch({
            type: 'accountCenter/removeArticle',
            payload: {
                articleId: item.articleId,
            },
        })
      }
      
       cancel=(e)=> {
        console.log(e);
        message.error('已取消');
      }

    render() {
        const { list } = this.props;
        const { article } = this.state;
        console.log(this.props);
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{marginRight:8,}} />
                {text}
            </span>
        )
        console.log(this.props);
        return (
            <>
            <List
                size="large"
                className={styles.articleList}
                rowKey="id"
                itemLayout="vertical"
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        key={item.articleId}
                        actions={[
                            // <IconText key="star" type="star-o" text={item.articleStar} />,
                            // <IconText key="message" type="message" text={item.articleComment} />,
                            <a key="list-loadmore-edit" onClick={this.showModal.bind(this, item)}>修改</a>,
                        <Popconfirm
                            title="你确定删除该文章?"
                            // eslint-disable-next-line react/jsx-no-bind
                            onConfirm={this.confirm.bind(this, item)}
                            onCancel={this.cancel}
                            okText="是"
                            cancelText="否"
                        >
                            <a key="list-loadmore-more">删除</a>
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
            <ModifyArticle
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                article={article}
            />
            </>
        )
    }
}

export default Articles;
