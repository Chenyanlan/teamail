import { Avatar, Icon, Menu, Spin, Divider } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class AvatarDropdown extends React.Component {

  // componentDidMount() {
  //   this.getData();
  // }

  // getData = () =>{
  //   const userId = localStorage.getItem('userId');
  //   console.log(userId);
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'user/fetchCurrentUser',
  //     payload: {
  //       userId,
  //     },
  //   })
  // }

  onMenuClick = event => {
    console.log(event);
    const { key } = event;
    const id = 1;
    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }
    if(key==='shopping'){
      router.push(`/mall/shopping/${id}`);
      return;
    }
    router.push(`/account/${key}/${id}`);
  };

  render() {
    console.log(this.props);
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {/* {menu && ( */}
        <Menu.Item key="center">
          <Icon type="user" />
          <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        {/* )} */}
        {/* {menu && ( */}
        <Menu.Item key="settings">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        {/* )} */}
        {/* {menu && <Menu.Divider />} */}
        <Menu.Item key="shopping">
          <Icon type="shopping-cart" />
          <FormattedMessage id="menu.account.shopping" defaultMessage="shopping" />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.userName ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.userAvatar} alt="avatar" />
          <span className={styles.name}>{currentUser.userName}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    );
  }
}

export default AvatarDropdown;
