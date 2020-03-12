import React, { Component } from 'react'
import { Table, message ,Popconfirm} from 'antd';
import { connect } from 'dva';
import CollectionCreateForm from '../../components/FormComponents/ModifyWikiDetail';

@connect(({ wikiAdmin }) => ({
    wikiAdmin,
  }))
 class WikiAdmin extends Component {

     constructor(props) {
         super(props);
         this.state = {
            visible: false,
         }
     }

     componentDidMount() {
        this.getData();
     }

     getData = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'wikiAdmin/wikiAdminById',
            payload: {
                detailId: 12,
            },
        });
     }

     showModal = () => {
        this.setState({ visible: true });
      };

      handleCancel = () => {
        this.setState({ visible: false });
      };

      handleCreate = () => {
        const { dispatch } = this.props;
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }

          console.log('Received values of form: ', values);
          values.detailId = 12;
          values.wikiId = 11;
          dispatch({
              type: 'wikiAdmin/modifyWikiAdminById',
              payload: values,
          })
          form.resetFields();
          this.setState({ visible: false });
          dispatch({
            type: 'wikiAdmin/wikiAdminById',
            payload: {
                detailId: 12,
            },
          })
        });
        this.getData();
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

       confirm=e => {
        console.log(e);
        message.success('Click on Yes');
      }
      
       cancel=e => {
        console.log(e);
        message.error('Click on No');
      }
      
    render() {
        console.log(this.props);
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
              width: 150,
            },
            {
              title: '是否为子项',
              dataIndex: 'detailIfNext',
              key: 'detailIfNext',
              width: 80,
            },
            {
              title: '操作',
              key: 'action',
              width: 80,
              render: (text, record) => (
                <span>
                  <a style={{ marginRight: 16 }} onClick={this.showModal}>修改 {record.name}</a>
                  <Popconfirm
                    title="你确定删除这条记录吗"
                    onConfirm={this.confirm}
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
        const { wikiAdmin: { result } } = this.props;
        const dataSource = JSON.stringify(result) === '{}' ? [] : [result.wikiDetail];
        return (
            <div>
                <Table columns={columns} dataSource={dataSource} />
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}
export default WikiAdmin;
