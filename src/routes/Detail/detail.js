import React from 'react';
import { connect } from 'dva';
import { Divider } from 'antd';
import styles from './detail.less'
import Prism from 'prismjs'
import { routerRedux } from 'dva/router'
import Bloghead from '../../components/content/header.js'
import BlogFooter from '../../components/content/footer.js'
import './global.less'

const ReactMarkdown = require('react-markdown')
let data;
class Detail extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    if(this.props.location.state){
      data = this.props.location.state.data
    }else{
      this.props.dispatch(routerRedux.push('/'))
    }
  }
  componentDidMount(){
    Prism.highlightAll()
  }
  componentDidUpdate () {
    Prism.highlightAll()
  }
  goIndex = () => {
    this.props.dispatch(routerRedux.push('/list'))
  }
  render(){
    const time = data.created_at.replace(/[A-Z]/g, ' ');
    return(
      <div>
        <Bloghead click={this.goIndex}/>
        <div className={styles.d_main}>
          <h1 className={styles.d_title}>{data.title}</h1>
          <p className={styles.d_time}>{time}</p>
          <Divider />
          <ReactMarkdown source={data.body} className={styles.md}/>
          <Divider />
        </div>
        <BlogFooter />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    datas: state.data.datas,
  }
})(Detail)