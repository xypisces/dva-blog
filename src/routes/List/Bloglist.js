import React from 'react';
import { connect } from 'dva';
import { Divider, Layout, List, Avatar  } from 'antd';
import { routerRedux } from 'dva/router'
import './Bloglist.less';
import Bloghead from '../../components/content/header.js'
import BlogFooter from '../../components/content/footer.js'
const { Header, Footer, Sider, Content } = Layout;


class BlogList extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount () {
    if(this.props.datas.length === 0){
      this.props.dispatch(routerRedux.push('/'))
    }
  }
  gotoDetail = (i) => {
    const data = this.props.datas[i]
    this.props.dispatch(routerRedux.push('/detail', {id : i, data,}))
  }
  goIndex = () => {
    this.props.dispatch(routerRedux.push('/list'))
  }
  render() {
    return(
      <div>
        <Layout style={{ backgroundColor: '#fff'}}>
          <Bloghead click={this.goIndex}/>
          <Content className='main'>
            <ul>
              {
                this.props.datas.map((item,i) => {
                  const time = item.created_at.replace(/[A-Z]/g, ' ');
                  return(
                    <li key={i} onClick={this.gotoDetail.bind(this, i)}>
                      <h2 className='main_title'>{item.title}</h2>
                      <Divider className='main_divider'>{time}</Divider>
                    </li>
                  )
                })
              }
            </ul>
          </Content>
          <BlogFooter />
        </Layout>
      </div>
    )
  }
}

export default connect((state)=> {
  return {
    loading: state.loading.global,
    arr: state.example.arr,
    datas: state.data.datas,
  }
})(BlogList);