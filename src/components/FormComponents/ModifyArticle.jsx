import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

const { TextArea } = Input;

@Form.create({ name: 'modifyarticle' })
class ModifyArticle extends Component {

    render() {
        const { visible, onCancel, onCreate, form, article } = this.props;
        const { getFieldDecorator } = form;
        console.log(article);
        return (
          <Modal
            visible={visible}
            title={JSON.stringify(article) === '{}' ? '添加文章' : '修改文章'}
            okText="确定"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="文章标题">
                {getFieldDecorator('articleTitle', {
                   initialValue: article.articleTitle,
                  rules: [{ required: true, message: '请填写文章标题' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="文章内容">
                {getFieldDecorator('articleDetail', {
                   initialValue: article.articleDetail,
                    rules: [{ required: true, message: '请填写文章内容' }],
                })(<TextArea rows={4} />)}
              </Form.Item>
              <Form.Item label="文章板块" className="collection-create-form_last-form-item">
                {getFieldDecorator('articlePlate', {
                   initialValue: article.articlePlate,
                  rules: [{ required: true, message: '请选择文章板块' }],
                })(
                  <Radio.Group>
                    <Radio value={0}>知识</Radio>
                    <Radio value={1}>文化</Radio>
                    <Radio value={2}>传说</Radio>
                  </Radio.Group>,
                )}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
}
export default ModifyArticle;
