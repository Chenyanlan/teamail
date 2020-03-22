import React, { Component } from 'react';
import { Button, Modal, Form, Input, message, Upload, Icon } from 'antd';

@Form.create({ name: 'addlunbo' })
class AddLunbo extends Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
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
            title="添加轮播图"
            okText="创建"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="轮播图详情">
                {getFieldDecorator('lunbo', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(
                    <Upload {...props}>
                    <Button>
                    <Icon type="upload" />上传图片
                    </Button>
                </Upload>,
                )}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
}

export default AddLunbo;
