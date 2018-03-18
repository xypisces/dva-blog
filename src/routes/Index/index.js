import React from 'react';
import { connect } from 'dva';
import { Progress,Spin } from 'antd';
import { routerRedux } from 'dva/router'
import './index.less';


class Indexs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      num: 10,
    }
  }
  componentDidMount(){
    
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.datas.length !== 0){
      this.setState({
        num: 99,
      })
      setTimeout(()=> {
        this.props.dispatch(routerRedux.push('/list'))
      }, 1000)
    }
  }
  render() {
    return(
      <div>
        <div className='i_content'>
          <h2 style={{ fontWeight: 'bold'}}>目前可以公开的情报...</h2>
          <h3>1.男,95年,广东人</h3>
          <h3>2.本科计算机专业</h3>
          <h3>3.职业是前端工程师</h3>
          <h3>4.技术栈:React/Dva/Antd/Node/MongoDB</h3>
          <Progress percent={this.state.num} size="large" status="active" className='i_process'/>
          <Spin size="large" className='i_spin'/>
          <p style={{ marginTop: '10px'}}>数据正在拼命加载中...</p>
        </div>
      </div>
    )
  }
}

export default connect((state)=> {
  return {
    datas: state.data.datas,
  }
})(Indexs);