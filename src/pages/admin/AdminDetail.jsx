import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Blank from '../account/setting/Blank';
import styles from './AdminDetail.less';
import WikiAdmin from './WikiAdmin';
import UserAdmin from './UserAdmin';
import BbsAdmin from './BbsAdmin';
import MallAdmin from './MallAdmin';

const { Item } = Menu;

class AdminDetail extends Component {
    constructor(props) {
        super(props);
        const menuMap = {
            wiki: <FormattedMessage id="menu.wiki" defaultMessage="Wiki" />,
            bbs: <FormattedMessage id="menu.bbs" defaultMessage="Bbs" />,
            mall: <FormattedMessage id="menu.mall" defaultMessage="Mall" />,
            welcome: <FormattedMessage id="menu.welcome" defaultMessage="Welcome" />,
            user: <FormattedMessage id="menu.user" defaultMessage="User" />,
        };
        this.state = {
            mode: 'inline',
            menuMap,
            selectKey: 'wiki',
        }
    }

     componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
     }

     componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
     }

     getMenu = () => {
        const { menuMap } = this.state;
        return Object.keys(menuMap).map(item => <Item key={item}>{menuMap[item]}</Item>);
      };

     getRightTitle = () => {
        const { selectKey, menuMap } = this.state;
        return menuMap[selectKey];
      }

      selectKey = key => {
        this.setState({
          selectKey: key,
        });
      };

     resize = () => {
        if (!this.main) {
          return;
        }

        requestAnimationFrame(() => {
          if (!this.main) {
            return;
          }

          let mode = 'inline';
          const { offsetWidth } = this.main;

          if (this.main.offsetWidth < 641 && offsetWidth > 400) {
            mode = 'horizontal';
          }

          if (window.innerWidth < 768 && offsetWidth > 400) {
            mode = 'horizontal';
          }

          this.setState({
            mode,
          });
        });
      }

      renderChildren = () => {
        const { selectKey } = this.state;
        switch (selectKey) {
          case 'wiki':
            return <WikiAdmin />;
          case 'bbs':
            return <BbsAdmin />;
          case 'mall':
            return <MallAdmin />;
          case 'welcome':
            return <Blank />;
          case 'user':
            return <UserAdmin />;
          default:
            break;
        }

        return null;
      };

    render() {
        const { mode, selectKey } = this.state;

        return (
            <div
                className={styles.main}
                ref={ref => {
                    if (ref) {
                        this.main = ref;
                    }
                }}
            >
                <div className={styles.leftMenu}>
                        <Menu mode={mode} selectedKeys={[selectKey]} onClick={({ key }) => this.selectKey(key)}>
                            {this.getMenu()}
                        </Menu>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>{this.getRightTitle()}</div>
                        {this.renderChildren()}
                    </div>
            </div>
        )
    }
}
export default AdminDetail;