import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { GridContent ,PageHeaderWrapper} from '@ant-design/pro-layout';
import Detail from './Detail';
import styles from './index.less';

const { Item } = Menu;

class WikiPage extends Component {

    constructor(props){
        super(props);
        const menuMap = {
            greenTea:<FormattedMessage id="app.wiki.menuMap.greenTea" defaultMessage="Green Tea" />,
            redTea:<FormattedMessage id="app.wiki.menuMap.redTea" defaultMessage="Red Tea" />,
            blackTea:<FormattedMessage id="app.wiki.menuMap.blackTea" defaultMessage="Black Tea" />,
            whiteTea:<FormattedMessage id="app.wiki.menuMap.whiteTea" defaultMessage=" White Tea" />,
            wulongTea:<FormattedMessage id="app.wiki.menuMap.wulong" defaultMessage="WuLong Tea" />,
            yellowTea:<FormattedMessage id="app.wiki.menuMap.yellowTea" defaultMessage="Yellow Tea" />,
            scentedTea:<FormattedMessage id="app.wiki.menuMap.scentedTea"
            defaultMessage="Scented Tea" />,
        };
        this.state = {
            mode: 'inline',
            menuMap,
            selectKey:'greenTea',
        }
    }

    componentDidMount(){
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
      };
    
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
      };

      renderChildren = () => {
        const { selectKey } = this.state;
    
        switch (selectKey) {
          case 'greenTea':
            return <Detail />;
    
          case 'redTea':
            return <Detail />;
    
          case 'blackTea':
            return <Detail />;
    
          case 'yellowTea':
            return <Detail />;
    
          case 'wulongTea':
            return <Detail />;

          case 'whiteTea':
            return <Detail />;

          case 'scentedTea':
            return <Detail />;  
            
          default:
            break;
        }
    
        return null;
      };

    render() {
        // const { currentUser } = this.props;

        // if (!currentUser.userid) {
        //   return '';
        // }
    
        const { mode, selectKey } = this.state;
        return (
            <PageHeaderWrapper>
            <GridContent>
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
            </GridContent>
            </PageHeaderWrapper>
        )
    }
}
export default WikiPage;
