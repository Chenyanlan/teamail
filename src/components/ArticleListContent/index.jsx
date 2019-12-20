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

const ArticleListContent = ({ data: { content, updatedAt, avatar, owner, href } }) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{content}</div>
    <div className={styles.extra}>
      <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon="user" />
      <a href={href}>{owner}</a> 发布在 <a href={href}>{href}</a>
      <em>{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;