import React, { Component } from 'react';
import { Table, Divider, Popconfirm, message, Input, Button, Icon, List, Avatar } from 'antd';
import { connect } from 'dva';
import Highlighter from 'react-highlight-words';
import ModifyArticle from '../../components/FormComponents/ModifyArticle';
import Comments from './Comments';

@connect(({ listSearchArticles }) => ({
    listSearchArticles,
  }))
class BbsAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          article: {},
          searchText: '',
          searchedColumn: '',
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const { dispatch } = this.props;
        dispatch({
          type: 'listSearchArticles/fetch1',
        })
    }

    confirm=(text, e) => {
        console.log(e);
        console.log(text);
        const { dispatch } = this.props;
        dispatch({
            type: 'listSearchArticles/deleteArticles',
            payload: {
                articleId: text.articleId,
            },
        })
        console.log(this.props);
        this.getData();
        message.success('删除成功');
      }

      cancel= e => {
        console.log(e);
        message.error('已取消。');
      }


      showModal = text => {
        console.log(text);
        this.setState({ visible: true, article: text });
      };

      handleCancel = () => {
        this.setState({ visible: false });
      };

      handleCreate = () => {
        const { form } = this.formRef.props;
        const { article } = this.state;
        const { dispatch, listSearchArticles: { result } } = this.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', values);
          values.articleId=article.articleId;
          console.log(values);
          dispatch({
              type: 'listSearchArticles/modifyArticle',
              payload: values,
          })
          form.resetFields();
          this.setState({ visible: false });
        });
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

      getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              查找
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              重置
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          (this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          )),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };

    render() {
        console.log(this.props);
        const { listSearchArticles: { articlesList } } = this.props;
        const { article } = this.state;
        const columns = [
            {
              title: '文章ID',
              dataIndex: 'articleId',
              key: 'articleId',
            },
            {
              title: '文章标题',
              dataIndex: 'articleTitle',
              key: 'articleTitle',
              ...this.getColumnSearchProps('articleTitle'),
            },
            {
              title: '文章作者',
              dataIndex: 'userName',
              key: 'userName',
              ...this.getColumnSearchProps('userName'),
            },
            {
                title: '文章板块',
                dataIndex: 'articlePlate',
                key: 'articlePlate',
                render: (text, record) => {
                    if (record.articlePlate === 0) {
                        return <span>知识</span>
                    } if (record.articlePlate === 1) {
                        return <span>文化</span>
                    }
                    return <span>传说</span>
                }
              },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a onClick={this.showModal.bind(this, text)}>修改</a>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="你确定删除该文章?"
                    // eslint-disable-next-line react/jsx-no-bind
                    onConfirm={this.confirm.bind(this, text)}
                    onCancel={this.cancel}
                    okText="是"
                    cancelText="否"
                  >
                  <a>删除</a>
                  </Popconfirm>
                </span>
              ),
            },
          ];
        return (
            <div>
                <Table
                  columns={columns}
                  dataSource={articlesList}
                  expandedRowRender={record => (
                    <Comments comment={record} />
                  ) } />
                <ModifyArticle
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    article={article}
                />
            </div>
        )
    }
}
export default BbsAdmin;
