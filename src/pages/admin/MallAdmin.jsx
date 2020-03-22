import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Divider, message, Popconfirm, Button } from 'antd';
import ModifyGoods from '../../components/FormComponents/ModifyGoods';

@connect(({ mall }) => ({
    mall,
  }))
class MallAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: {},
            visible: false,
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'mall/getGoodsList',
        })
    }

    confirm=(record, e) => {
        console.log(e);
        console.log(record);
        const { dispatch } = this.props;
        dispatch({
            type: 'mall/removeGoods',
            payload: {
                goodsId: record.goodsId,
            },
        })
      }
      
     cancel=(e) => {
        console.log(e);
        message.error('已取消。');
      }

      showModal = (record) => {
        this.setState({ visible: true, goods: record });
      };

      addGoods = () => {
        this.setState({ visible: true });
      }

      handleCancel = () => {
        this.setState({ visible: false });
      };

      handleCreate = () => {
        const { form } = this.formRef.props;
        const { dispatch } = this.props;
        const { goods } = this.state;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }

          console.log('Received values of form: ', values);
          values.goodsPictureDisplay = typeof (values.pictureDisplay) === 'string' ? values.pictureDisplay : values.pictureDisplay.file.response[0].url;
          if (JSON.stringify(goods) === '{}') {
              dispatch({
                type: 'mall/addGoods',
                payload: values,
              })
          } else {
              values.goodsId = goods.goodsId;
              console.log(values);
              dispatch({
                type: 'mall/modifyGoods',
                payload: values,
              })
          }
         
          form.resetFields();
          this.setState({ visible: false });
        });
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

    render() {
        console.log(this.props);
        const { mall: { goodsList } } = this.props;
        const columns = [
            {
              title: '商品ID',
              dataIndex: 'goodsId',
              key: 'goodsId',
            },
            {
              title: '商品名称',
              dataIndex: 'goodsTitle',
              key: 'goodsTitle',
            },
            {
              title: '商品价格',
              dataIndex: 'goodsPrice',
              key: 'goodsPrice',
            },
            {
                title: '商品分类',
                dataIndex: 'goodsClassify',
                key: 'goodsClassify',
                render: (text, record) => {
                    console.log(record);
                    switch (record.goodsClassify) {
                        case 1: return '绿茶';
                        case 2: return '红茶';
                        case 3: return '黑茶';
                        case 4: return '白茶';
                        case 5: return '黄茶';
                        case 6: return '乌龙茶';
                        case 7: return '花茶';
                        case 8: return '茶具';
                        default: break;
                    }
                }
            },
            {
              title: <Button onClick={this.addGoods}>添加商品</Button>,
              key: 'action',
              render: (text, record) => (
                <span>
                  <a onClick={this.showModal.bind(this, record)}>修改</a>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="你确定删除这个商品吗"
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
        return (
            <div>
                <Table columns={columns} dataSource={goodsList} />
                <ModifyGoods
                     wrappedComponentRef={this.saveFormRef}
                     visible={this.state.visible}
                     onCancel={this.handleCancel}
                     onCreate={this.handleCreate}
                     data = {this.state.goods}
                />
            </div>
        )
    }
}

export default MallAdmin;
