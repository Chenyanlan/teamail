import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import {  Carousel ,Row,Col} from 'antd';
import styles from './Welcome.less';

// 欢迎界面，用户登录主页面
export default () => (
  <PageHeaderWrapper>
    <Row type="flex" justify="center" gutter={ [{ xs: 8, sm: 16, md: 24, lg: 32 }, 20] }>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        分类？
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        <Carousel autoplay>
          <div>
            <div className={styles.lunbo1}></div> 
          </div>
          <div>
            <div className={styles.lunbo2}></div>
          </div>
          <div>
            <div className={styles.lunbo3}></div>
          </div>
          <div>
            <div className={styles.lunbo4}></div>
          </div>
          <div>
            <div className={styles.lunbo5}></div>
          </div>
        </Carousel>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        论坛帖子
      </Col>
  </Row>
    
  </PageHeaderWrapper>
);
