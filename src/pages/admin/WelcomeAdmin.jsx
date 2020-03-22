import React, { Component } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { connect } from 'dva';
import AddLunbo from '../../components/FormComponents/AddLunbo';

@connect(({ welcome }) => ({
  welcome,
}))
class WelcomeAdmin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
      }
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'welcome/getLunbos',
      })
    }

     confirm=(record, e)=> {
      console.log(e);
      console.log(record);
      const { dispatch } = this.props;
      dispatch({
        type: 'welcome/removeLunboPicture',
        payload: {
          lunboId: record.lunboId,
        }
      })
    }
    
    cancel=(e)=> {
      console.log(e);
      message.error('已取消。');
    }

    showModal = () => {
      this.setState({ visible: true });
    };
  
    handleCancel = () => {
      this.setState({ visible: false });
    };
  
    handleCreate = () => {
      const { form } = this.formRef.props;
      const { dispatch } = this.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
  
        console.log('Received values of form: ', values);
        values.lunboDetail = values.lunbo.file.response[0].url;
        dispatch({
          type: 'welcome/addLunboPicture',
          payload: values,
        })
        form.resetFields();
        this.setState({ visible: false });
      });
    };
  
    saveFormRef = formRef => {
      this.formRef = formRef;
    };

    render() {
      console.log(this.props);
      const { welcome: { lunbo } } = this.props;
        const columns = [
            {
              title: '轮播图ID',
              dataIndex: 'lunboId',
              key: 'lunboId',
            },
            {
              title: '轮播图详情',
              dataIndex: 'lunboDetail',
              key: 'lunboDetail',
            },
            {
              title: <Button onClick={this.showModal}>添加轮播图</Button>,
              key: 'action',
              align: 'center',
              render: (text, record) => (
                <span>
                   <Popconfirm
                      title="你确定删除该轮播图吗?"
                      onConfirm={this.confirm.bind(this, record)}
                      onCancel={this.cancel}
                      okText="是"
                      cancelText="否"
                    > <a>删除</a>
                    </Popconfirm>
                </span>
              ),
            },
          ];
        return (
            <div>
                <Table title={() => '轮播图'} columns={columns} dataSource={lunbo} />
                <AddLunbo
                  wrappedComponentRef={this.saveFormRef}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  onCreate={this.handleCreate}
                />
            </div>
        )
    }
}

export default WelcomeAdmin;
