import React, { Component } from 'react'
import { Button, Modal, Form, Input, Radio, Upload, message, Icon, InputNumber  } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

@Form.create({ name: 'modifyGoods' })
class ModifyGoods extends Component {
    onChange = (value) => {
      console.log('changed', value);
    }

    render() {
        const { visible, onCancel, onCreate, form, data } = this.props;
        const { getFieldDecorator } = form;
        console.log(data);
        const props = {
          name: 'files',
          action: 'http://localhost:8082/demo/upload/uploadImg',
          multiple: true,
          onChange(info) {
            if (info.file.status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
              message.success(`${info.file.name} 文件上传成功`);
            } else if (info.file.status === 'error') {
              message.error(`${info.file.name}文件上传失败`);
            }
          },
        };
        return (
          <Modal
            visible={visible}
            title={JSON.stringify(data) === '{}' ? '添加商品' : '修改商品'}
            okText="确定"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form {...formItemLayout}>
              <Form.Item label="商品标题">
                {getFieldDecorator('goodsTitle', {
                  rules: [{ required: true, message: '该字段为必填项!' }],
                  initialValue: data.goodsTitle,
                })(<Input />)}
              </Form.Item>
              <Form.Item label="商品二级标题">
                {getFieldDecorator('goodsTitleSecond', {
                  rules: [{ required: true, message: '该字段为必填项!' }],
                  initialValue: data.goodsTitleSecond,
                })(<Input />)}
              </Form.Item>
              <Form.Item label="列表页展示图片">
                {getFieldDecorator('pictureDisplay', {
                  rules: [{ required: true, message: '该字段为必填项!' }],
                  initialValue: data.goodsPictureDisplay,
                })(
                  <Upload {...props}>
                        <Button>
                        <Icon type="upload" />上传图片
                        </Button>
                    </Upload>,
                )}
              </Form.Item>
              <Form.Item label="商品价格">
                {getFieldDecorator('goodsPrice', {
                  rules: [{ required: true, message: '该字段为必填项!' }],
                  initialValue: data.goodsPrice,
                })(<InputNumber min={1} max={1000} step={0.1} onChange={this.onChange} />)}
              </Form.Item>
              <Form.Item label="商品库存">
                {getFieldDecorator('goodsNum', {
                  rules: [{ required: true, message: '该字段为必填项!' }],
                  initialValue: data.goodsNum,
                })(<InputNumber min={1} max={1000} onChange={this.onChange} />)}
              </Form.Item>
              <Form.Item label="商品分类" className="collection-create-form_last-form-item">
                {getFieldDecorator('goodsClassify', {
                  initialValue: data.goodsClassify,
                  rules: [{ required: true, message: '该字段为必填项!' }],
                })(
                  <Radio.Group>
                    <Radio value={1}>绿茶</Radio>
                    <Radio value={2}>红茶</Radio>
                    <Radio value={3}>黑茶</Radio>
                    <Radio value={4}>白茶</Radio>
                    <Radio value={5}>黄茶</Radio>
                    <Radio value={6}>乌龙茶</Radio>
                    <Radio value={7}>花茶</Radio>
                    <Radio value={8}>茶具</Radio>
                  </Radio.Group>,
                )}
              </Form.Item>
              <Form.Item label="价格段" className="collection-create-form_last-form-item">
                {getFieldDecorator('goodsPricesegment', {
                  initialValue: data.goodsPricesegment,
                  rules: [{ required: true, message: '该字段为必填项!' }],
                })(
                  <Radio.Group>
                    <Radio value={1}>100元以下</Radio>
                    <Radio value={2}>100~200元</Radio>
                    <Radio value={3}>200~500元</Radio>
                    <Radio value={4}>500元以上</Radio>
                  </Radio.Group>,
                )}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
}

export default ModifyGoods;
