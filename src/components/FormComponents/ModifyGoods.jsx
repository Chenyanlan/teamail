import React, { Component } from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd';

@Form.create({ name: 'modifyGoods' })
class ModifyGoods extends Component {
    render() {
        const { visible, onCancel, onCreate, form, data } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title={JSON.stringify(data) === '{}' ? '添加商品' : '修改商品'}
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="商品标题">
                {getFieldDecorator('goodsTitle', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="商品二级标题">
                {getFieldDecorator('goodsTitleSecond', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Description">
                {getFieldDecorator('description')(<Input type="textarea" />)}
              </Form.Item>
              <Form.Item className="collection-create-form_last-form-item">
                {getFieldDecorator('modifier', {
                  initialValue: 'public',
                })(
                  <Radio.Group>
                    <Radio value="public">Public</Radio>
                    <Radio value="private">Private</Radio>
                  </Radio.Group>,
                )}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
}

export default ModifyGoods;
