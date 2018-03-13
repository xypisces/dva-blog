import React from 'react';
import { connect } from 'dva';
import { Progress,Spin } from 'antd';
import './index.less';


class Indexs extends React.Component {
  render() {
    return(
      <div>
        <div className='i_content'>
          <h2 style={{ fontWeight: 'bold'}}>目前可以公开的情报...</h2>
          <h3>1.男,95年,广东人</h3>
          <h3>2.本科计算机专业</h3>
          <h3>3.职业是前端工程师</h3>
          <h3>4.技术栈:React/Dva/Antd/Node/MongoDB</h3>
          <Progress percent={50} size="large" status="active" className='i_process'/>
          <Spin size="large" className='i_spin'/>
          <p style={{ marginTop: '10px'}}>数据正在拼命加载中...</p>
        </div>
      </div>
    )
  }
}

export default connect((state)=> {
  return {
  }
})(Indexs);