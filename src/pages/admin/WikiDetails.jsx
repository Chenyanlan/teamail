import React, { Component } from 'react';
import { Table, message ,Popconfirm} from 'antd';
import CollectionCreateForm from '../../components/FormComponents/ModifyWikiDetail';
import { connect } from 'dva';

@connect(({ wikiAdmin }) => ({
    wikiAdmin,
  }))
class WikiDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
           visible: false,
           wikiDetail: {},
           list: [],
        }
    }

    componentDidMount() {
        const { record } = this.props;
        console.log(record);
        localStorage.setItem('adminWikiId', record.wikiId);
        this.getData();
    }

    // componentWillUnmount() {
    //     const { dispatch } = this.props;
    //     dispatch({
    //         type: 'wikiAdmin/resetWikiDetail',
    //     })
    // }

    // componentDidUpdate() {
    //     const { dispatch } = this.props;
    //     dispatch({
    //         type: 'wikiAdmin/resetWikiDetail',
    //     })
    // }

    getData=() => {
        const { dispatch, record } = this.props;
        dispatch({
            type: 'wikiAdmin/getWikiDetail',
            payload: {
                wikiId: record.wikiId,
            },
        })
    }

    showModal = (record) => {
        this.setState({ visible: true, wikiDetail: record,});
      };

      handleCancel = () => {
        this.setState({ visible: false });
      };

      handleCreate = () => {
        const { dispatch, record } = this.props;
        const { wikiDetail } = this.state;
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', values);
          values.detailId = wikiDetail.detailId;
          values.wikiId = record.wikiId;
          dispatch({
              type: 'wikiAdmin/modifyWikiAdminById',
              payload: values,
          })
          form.resetFields();
          this.setState({ visible: false });
        });
        this.getData();
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

    confirm=(record,e) => {
        console.log(e);
        console.log(record);
        const { dispatch } = this.props;
        dispatch({
            type: 'wikiAdmin/removeWikiDetail',
            payload: {
                detailId: record.detailId,
            },
        })
      }

       cancel=e => {
        console.log(e);
        message.error('已取消。');
      }

    render() {
        const { wikiAdmin: { wikiDetail } } = this.props;
        // const {list} = this.state;
        // console.log(list);
        const columns = [
            {
              title: '标题',
              dataIndex: 'detailTitle',
              key: 'detailTitle',
              width: 80,
            },
            {
              title: '内容',
              dataIndex: 'detailMsg',
              key: 'detailMsg',
              width: 200,
            },
            {
              title: '是否为子项',
              dataIndex: 'detailIfNext',
              key: 'detailIfNext',
              width: 30,
              render: (text, record) => {
                  return (
                    text === 0 ? '否' : '是'
                  )
              },
            },
            {
              title: '操作',
              key: 'action',
              width: 80,
              render: (text, record) => (
                <span>
                  <a style={{ marginRight: 16 }} onClick={this.showModal.bind(this, record)}>修改 {record.name}</a>
                  <Popconfirm
                    title="你确定删除这条百科详情吗"
                    onConfirm={this.confirm.bind(this, record)}
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
          console.log(this.props);
        return (
            <div>
                <Table
                  columns={columns}
                  dataSource={wikiDetail.list}
                  />
                  <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    data={this.state.wikiDetail}
                />
            </div>
        )
    }
}

export default WikiDetails;
