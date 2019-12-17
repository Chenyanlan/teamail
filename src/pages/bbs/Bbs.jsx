import React, { Component } from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import { Button } from 'antd';
import router from 'umi/router';

class Bbs extends Component {

  toDetail = () =>{
    const key = 1;
    router.push(`/bbs/${key}`);
  }

  render() {
    return (
      <PageHeaderWrapper>
        <div>New Page</div>
        <Button onClick={this.toDetail}>去论坛详情页</Button>
      </PageHeaderWrapper>
    );
  }
}

export default Bbs;
