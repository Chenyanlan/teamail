import { Avatar } from 'antd';
import React from 'react';
import moment from 'moment';
import styles from './index.less';

const renderColor=()=>{
  let color = "#";
  for( let i = 0; i < 6; i++ ){
      color += ( Math.random()*16 | 0 ).toString(16);
  }
  return color;
}

const ArticleListContent = ({ data: { articleDetail, createTime, userAvatar, userName, href } }) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{articleDetail}</div>
    <div className={styles.extra}>
      <Avatar size="small" src={userAvatar} />
      <a href={href}>{userName}</a> 发布于 <em>{moment(createTime).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;