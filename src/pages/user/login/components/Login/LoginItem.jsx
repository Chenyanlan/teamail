import { Button, Col, Form, Input, Row } from 'antd';
import React, { Component } from 'react';
import omit from 'omit.js';
import ItemMap from './map';
import LoginContext from './LoginContext';
import styles from './index.less';
const FormItem = Form.Item;

class WrapFormItem extends Component {
  static defaultProps = {
    getCaptchaButtonText: 'captcha',
    getCaptchaSecondText: 'second',
  };

  interval = undefined;

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const { updateActive, name = '' } = this.props;

    if (updateActive) {
      updateActive(name);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  
  getFormItemOptions = ({ onChange, defaultValue, customProps = {}, rules }) => {
    const options = {
      rules: rules || customProps.rules,
    };

    if (onChange) {
      options.onChange = onChange;
    }

    if (defaultValue) {
      options.initialValue = defaultValue;
    }

    return options;
  };


  render() {
    const { count } = this.state; // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil

    const {
      onChange,
      customProps,
      defaultValue,
      rules,
      name,
      getCaptchaButtonText,
      getCaptchaSecondText,
      updateActive,
      type,
      form,
      tabUtil,
      ...restProps
    } = this.props;

    if (!name) {
      return null;
    }

    if (!form) {
      return null;
    }

    const { getFieldDecorator } = form; // get getFieldDecorator props

    const options = this.getFormItemOptions(this.props);
    const otherProps = restProps || {};

    // 如果类型等于 验证码...
    if (type === 'Captcha') {
      const inputProps = omit(otherProps, ['onGetCaptcha', 'countDown']);
      return (
        <FormItem>
          <Row gutter={8}>
            <Col span={16}>
              {getFieldDecorator(name, options)(<Input {...customProps} {...inputProps} />)}
            </Col>
            <Col span={8}>
              <Button
                disabled={!!count}
                className={styles.getCaptcha}
                size="large"
                onClick={this.onGetCaptcha}
              >
                {count ? `${count} ${getCaptchaSecondText}` : getCaptchaButtonText}
              </Button>
            </Col>
          </Row>
        </FormItem>
      );
    }

    return (
      <FormItem>
        {getFieldDecorator(name, options)(<Input {...customProps} {...otherProps} />)}
      </FormItem>
    );
  }
}

const LoginItem = {};
Object.keys(ItemMap).forEach(key => {
  const item = ItemMap[key];

  LoginItem[key] = props => (
    <LoginContext.Consumer>
      {context => (
        <WrapFormItem
          customProps={item.props}
          rules={item.rules}
          {...props}
          type={key}
          {...context}
          updateActive={context.updateActive}
        />
      )}
    </LoginContext.Consumer>
  );
});
export default LoginItem;
