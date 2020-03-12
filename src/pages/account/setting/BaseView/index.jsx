import React, { Component,Fragment } from 'react'
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Button, Form, Input, Select, Upload, message } from 'antd';
import { connect } from 'dva';
import styles from './index.less';


const FormItem = Form.Item;
const { Option } = Select; // 头像组件 方便以后独立，增加裁剪之类的功能

const props = {
  name: 'files',
  action: 'http://localhost:8082/demo/upload/uploadImg',
  multiple: true,
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
      localStorage.setItem('avatar', info.file.response[0].url);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name}文件上传失败`);
    }
  },
};
const AvatarView = ({ avatar }) => (
    <Fragment>
      <div className={styles.avatar_title}>
        <FormattedMessage id="accountsettings.basic.avatar" defaultMessage="Avatar" />
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload {...props}>
        <div className={styles.button_view}>
          <Button icon="upload">
            <FormattedMessage
              id="accountsettings.basic.change-avatar"
              defaultMessage="Change avatar"
            />
          </Button>
        </div>
      </Upload>
    </Fragment>
  );

@connect(({ accountSettings }) => ({
    currentUser: accountSettings.currentUser,
}))
class BaseView extends Component {
  view = undefined;

  // eslint-disable-next-line no-shadow
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: '',
    }
  }

  componentDidMount() {
    this.setBaseInfo();
  }

  setBaseInfo = () => {
    const { currentUser, form } = this.props;
    console.log(this.props);
    if (currentUser) {
      Object.keys(form.getFieldsValue()).forEach(key => {
        const obj = {};
        obj[key] = currentUser[key] || null;
        form.setFieldsValue(obj);
      });
    }
  };

  getAvatarURL() {
    const { currentUser } = this.props;

    if (currentUser) {
      if (currentUser.userAvatar) {
        return currentUser.userAvatar;
      }
      // if (localStorage.getItem('avatar')) {
      //   const url = localStorage.getItem('avatar');
      //   return url;
      // }
    }

    return '';
  }

  getViewDom = ref => {
    this.view = ref;
  };

  flashAllPage = () => {
    window.history.go(0);
  }

  handlerSubmit = event => {
    event.preventDefault();
    const { form } = this.props;
    console.log(this.props);
    form.validateFields((err, value) => {
      if (!err) {
        const { currentUser } = this.props;
        value.userId = currentUser.userId;
        value.userAvatar = localStorage.getItem('avatar');
        console.log(value);
        const { dispatch } = this.props;
        dispatch({
          type: 'accountSettings/modifyUser',
          payload: value,
        })
        message.success('数据更新成功');
        this.flashAllPage();
      }
    });
  };

    render() {
        const {form:{getFieldDecorator},}= this.props;
        return (
            <div className={styles.baseView} ref={this.getViewDom}>
            <div className={styles.left}>
              <Form layout="vertical" hideRequiredMark>
                <FormItem
                  label={formatMessage({
                    id: 'accountsettings.basic.nickname',
                  })}
                >
                  {getFieldDecorator('userName', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage(
                          {
                            id: 'accountsettings.basic.nickname-message',
                          },
                          {},
                        ),
                      },
                    ],
                  })(<Input />)}
                </FormItem>
                <FormItem
                  label={formatMessage({
                    id: 'accountsettings.basic.profile',
                  })}
                >
                  {getFieldDecorator('userSignature', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage(
                          {
                            id: 'accountsettings.basic.profile-message',
                          },
                          {},
                        ),
                      },
                    ],
                  })(
                    <Input.TextArea
                      placeholder={formatMessage({
                        id: 'accountsettings.basic.profile-placeholder',
                      })}
                      rows={4}
                    />,
                  )}
                </FormItem>
                <FormItem
                  label={formatMessage({
                    id: 'accountsettings.basic.address',
                  })}
                >
                  {getFieldDecorator('userPlace', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage(
                          {
                            id: 'accountsettings.basic.address-message',
                          },
                          {},
                        ),
                      },
                    ],
                  })(<Input />)}
                </FormItem>
                <FormItem
                  label={formatMessage({
                    id: 'accountsettings.basic.phone',
                  })}
                >
                  {getFieldDecorator('userTel', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage(
                          {
                            id: 'accountsettings.basic.phone-message',
                          },
                          {},
                        ),
                      },
                    ],
                  })(<Input />)}
                </FormItem>
                <Button type="primary" onClick={this.handlerSubmit}>
                  <FormattedMessage
                    id="accountsettings.basic.update"
                    defaultMessage="Update Information"
                  />
                </Button>
              </Form>
            </div>
            <div className={styles.right}>
              {/* <UploadAvatar /> */}
              <AvatarView avatar={this.getAvatarURL()} />
            </div>
          </div>
        )
    }
}

export default Form.create()(BaseView);
