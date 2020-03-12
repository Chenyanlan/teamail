import React, { Component } from 'react'
import { Modal, Form, Input, Radio } from 'antd';

@Form.create({ name: 'modifyuserr' })
class ModifyUser extends Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
              visible={visible}
              title="修改用户密码和权限"
              okText="确定"
              onCancel={onCancel}
              onOk={onCreate}
            >
              <Form layout="vertical">
                <Form.Item label="密码">
                  {getFieldDecorator('userPassword', {
                    rules: [{ required: true, message: '密码不能为空' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="权限" className="collection-create-form_last-form-item">
                  {getFieldDecorator('userAuthority', {
                    initialValue: 'user',
                  })(
                    <Radio.Group>
                      <Radio value="user">user</Radio>
                      <Radio value="admin">admin</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>
              </Form>
            </Modal>
          );
    }
}

export default ModifyUser;
