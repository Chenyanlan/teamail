import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio,Upload, message, Icon  } from 'antd';

@Form.create({ name: 'addpicture' })
class AddPicture extends Component {
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
            title="添加图片"
            okText="确定"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
            <Form.Item label="图片上传">
                {getFieldDecorator('pictureDetailFiles', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(
                    <Upload {...props}>
                        <Button>
                        <Icon type="upload" />上传图片
                        </Button>
                    </Upload>,
                )}
              </Form.Item>
              <Form.Item label="图片是否为展示图" className="collection-create-form_last-form-item">
                {getFieldDecorator('pictureIfDisplay', {
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

export default AddPicture;