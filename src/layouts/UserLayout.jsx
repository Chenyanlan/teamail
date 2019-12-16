import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet } from 'react-helmet';
import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
// import SelectLang from '@/components/SelectLang';
import logo from '../assets/teamail.svg';
import styles from './UserLayout.less';

const UserLayout = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    formatMessage,
    ...props,
  });
  const defaultFooterDom = <DefaultFooter links={[]} copyright="31501391 陈妍蓝" />;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>一茶一会</span>
              </Link>
            </div>
            <div className={styles.desc}>
              帮助茶叶爱好者进行了解购买茶叶或茶具，搜索茶叶相关知识的在线平台
            </div>
          </div>
          {children}
        </div>
        {defaultFooterDom}
      </div>
    </>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
