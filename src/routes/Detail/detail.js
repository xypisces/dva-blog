import React from 'react';
import { connect } from 'dva';
import { Divider } from 'antd';
import styles from './detail.less'

const ReactMarkdown = require('react-markdown')
const input = require('./test.md')
class Detail extends React.Component{
  render(){
    return(
      <div className={styles.d_main}>
        <h1 className={styles.d_title}>富强民主文明和谐，爱国守法公正友爱</h1>
        <p className={styles.d_time}>2019.09.12</p>
        <Divider />
        <ReactMarkdown source={input} />
      </div>
    )
  }
}

export default connect()(Detail)