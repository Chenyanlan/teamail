import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import {connect} from 'dva';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { GridContent, PageHeaderWrapper } from '@ant-design/pro-layout';
import Detail from './Detail';
import Blank from '../account/setting/Blank';
import styles from './index.less';

const { Item } = Menu;

@connect(({ listWiki }) => ({
  listWiki,
}))
class WikiPage extends Component {
    constructor(props) {
        super(props);
        const menuMap = {
            greenTea: <FormattedMessage id="app.wiki.menuMap.greenTea" defaultMessage="Green Tea" />,
            redTea: <FormattedMessage id="app.wiki.menuMap.redTea" defaultMessage="Red Tea" />,
            blackTea: <FormattedMessage id="app.wiki.menuMap.blackTea" defaultMessage="Black Tea" />,
            whiteTea: <FormattedMessage id="app.wiki.menuMap.whiteTea" defaultMessage=" White Tea" />,
            wulongTea: <FormattedMessage id="app.wiki.menuMap.wulong" defaultMessage="WuLong Tea" />,
            yellowTea: <FormattedMessage id="app.wiki.menuMap.yellowTea" defaultMessage="Yellow Tea" />,
            scentedTea: <FormattedMessage id="app.wiki.menuMap.scentedTea"
            defaultMessage="Scented Tea" />,
        };
        this.state = {
            mode: 'inline',
            menuMap,
            selectKey: 'greenTea',
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
        const { dispatch } = this.props;
        dispatch({
            type: 'listWiki/wikiDetail',
            payload: {
                wikiId: 11,
            },
        });
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
        const { dispatch } = this.props;
        switch (selectKey) {
          case 'greenTea':
            dispatch({
                type: 'listWiki/wikiDetail',
                payload: {
                    wikiId: 11,
                },
            });
            return <Detail data={this.props.listWiki.detailResult}/>;

          case 'redTea':
            dispatch({
                type: 'listWiki/wikiDetail',
                payload: {
                    wikiId: 12,
                },
            });
            return <Blank data={this.props.listWiki.detailResult}/>;

          case 'blackTea':
            dispatch({
                type: 'listWiki/wikiDetail',
                payload: {
                    wikiId: 13,
                },
            });
            return <Detail data={this.props.listWiki.detailResult}/>;

          case 'whiteTea':
            dispatch({
              type: 'listWiki/wikiDetail',
              payload: {
                  wikiId: 14,
              },
          });
            return <Detail data={this.props.listWiki.detailResult}/>;

          case 'wulongTea':
            dispatch({
              type: 'listWiki/wikiDetail',
              payload: {
                  wikiId: 15,
              },
          });
            return <Detail data={this.props.listWiki.detailResult}/>;

          case 'yellowTea':
            dispatch({
              type: 'listWiki/wikiDetail',
              payload: {
                  wikiId: 16,
              },
          });
            return <Detail data={this.props.listWiki.detailResult}/>;

          case 'scentedTea':
            dispatch({
              type: 'listWiki/wikiDetail',
              payload: {
                  wikiId: 17,
              },
          });
            return <Detail data={this.props.listWiki.detailResult} />;

          default:
            break;
        }

        return null;
      };

    render() {
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
