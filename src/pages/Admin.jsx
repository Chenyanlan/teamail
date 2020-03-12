import React from 'react';
import { Card, Typography, Alert, Icon} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import AdminDetail from './admin/AdminDetail';

// 管理员单独界面
export default () => (
  <PageHeaderWrapper content=" 这个页面只有 admin 权限才能查看">
    <Card>
      <Typography.Title
        level={2}
        style={{
          textAlign: 'center',
        }}
      >
        <Icon type="smile" theme="twoTone" /> 你好管理员！
        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> Admin
      </Typography.Title>
    </Card>
    <AdminDetail />
  </PageHeaderWrapper>
);
