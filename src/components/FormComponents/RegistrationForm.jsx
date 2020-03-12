import React, { Component } from 'react';
import { Form, Input, notification , Icon, Button } from 'antd';
import { connect } from 'dva';


@Form.create({ name: 'register' })
@connect(({ register }) => ({
  register,
}))
class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { dispatch, register } = this.props;
        dispatch({
          type: 'register/register',
          payload: values,
        })
        console.log(this.props);
        if (register.result.success === true) {
          notification.success({
            message: '注册成功！',
            description:
              '请到登录页进行登录',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
        }
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('userPassword')) {
      callback('两次密码输入不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  render() {
    const { getFieldDecorator } = this.props.form;

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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 20,
          offset: 4,
        },
      },
    };

    return (
      <Form {...tailFormItemLayout} onSubmit={this.handleSubmit}>
         <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的昵称!', whitespace: true }],
          })(<Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="昵称"
          />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('userPassword', {
            rules: [
              {
                required: true,
                message: '请输入您的密码!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
          />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '请确认您的密码!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="确认密码"
                onBlur={this.handleConfirmBlur}
              />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default RegistrationForm;
