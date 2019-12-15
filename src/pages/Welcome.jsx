import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert } from 'antd';
import styles from './Welcome.less';

// 欢迎界面，用户登录主页面
export default () => (
  <PageHeaderWrapper>
    <Card>
      Hello world!
    </Card>
  </PageHeaderWrapper>
);
