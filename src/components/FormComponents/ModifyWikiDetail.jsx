import React, { Component } from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd';

@Form.create({ name: 'form_in_modal' })
 class ModifyWikiDetail extends Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="修改百科详情"
            okText="确定"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="标题">
                {getFieldDecorator('detailTitle', {
                  rules: [{ required: true, message: '该字段为必填字段' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="内容">
                {getFieldDecorator('detailMsg')(<Input type="textarea" />)}
              </Form.Item>
              <Form.Item label="是否为子项">
                {getFieldDecorator('detailIfNext', {
                  initialValue: 0,
                })(
                  <Radio.Group>
                    <Radio value={0}>否</Radio>
                    <Radio value={1}>是</Radio>
                  </Radio.Group>,
                )}
              </Form.Item>
            </Form>
          </Modal>
        );
    }
}
export default ModifyWikiDetail;
