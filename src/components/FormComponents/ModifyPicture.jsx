import React, { Component } from 'react'
import { Table, Button, Popconfirm, message, Modal } from 'antd';
import { connect } from 'dva';
import AddPicture from './AddPicture';

@connect(({ shopping }) => ({
    goodsDisplay: shopping.goodsDisplay,
    goodsDetail: shopping.goodsDetail,
    goods: shopping.goods,
    cart: shopping.cart,
  }))
class ModifyPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            addvisible: false,
            dataSource: [],
        }
    }

    componentDidMount() {
        const { dispatch, id } = this.props;
        dispatch({
            type: 'shopping/getDisplayPicture',
            payload: {
                pictureGoodsId: id,
            },
        })
        dispatch({
            type: 'shopping/getDetailPicture',
            payload: {
                pictureGoodsId: id,
            },
        })
    }

    showModal = () => {
        this.setState({ addvisible: true });
      };

      handleCancel = () => {
        this.setState({ addvisible: false });
      };

      handleCreate = () => {
        const { form } = this.formRef.props;
        const { dispatch, id } = this.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }

          console.log('Received values of form: ', values);
          values.pictureGoodsId = Number(id);
          values.pictureDetail = values.pictureDetailFiles.file.response[0].url;
          console.log(values);
          dispatch({
              type: 'shopping/addGoodsPicture',
              payload: values,
          });
          form.resetFields();
          this.setState({ addvisible: false });
        });
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

     confirm = (record, e) => {
        console.log(e);
        console.log(record);
        const { dispatch } = this.props;
        dispatch({
            type: 'shopping/removePicture',
            payload: {
                pictureId: record.pictureId,
            },
        })
        message.success('Click on Yes');
      }

      cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      }

    render() {
        const { visible, onCancel, onCreate, goodsDisplay: { list }, goodsDetail } = this.props;
        const dataSource = JSON.stringify(goodsDetail) === '{}' ? [] : list.concat(goodsDetail.list);
        console.log(dataSource);
        console.log(this.props);
        const columns = [
            {
              title: '图片ID',
              dataIndex: 'pictureId',
              key: 'pictureId',
              width: 80,
            },
            {
              title: '图片详情',
              dataIndex: 'pictureDetail',
              key: 'pictureDetail',
            //   ellipsis: true,
            },
            {
              title: '是否为展示图片',
              dataIndex: 'pictureIfDisplay',
              key: 'pictureIfDisplay',
              align: 'center',
              render: (text, record) => (record.pictureIfDisplay === 1 ? '是' : '否'),
            },
            {
              title: '操作',
              key: 'action',
              width: 150,
              render: (text, record) => (
                <span>
                    <Popconfirm
                        title="你确定删除该图片?"
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
            <>
                <Modal
                    visible={visible}
                    title="商品图片编辑"
                    okText="确认"
                    onCancel={onCancel}
                    onOk={onCreate}
                    width={1000}
                >
                    <Button onClick={this.showModal} type="primary" style={{ marginBottom: 16 }}>
                        添加图片
                        </Button>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                        />
                </Modal>
                <AddPicture
                       wrappedComponentRef={this.saveFormRef}
                       visible={this.state.addvisible}
                       onCancel={this.handleCancel}
                       onCreate={this.handleCreate}
                />
            </>
        );
      }
}
export default ModifyPicture;
