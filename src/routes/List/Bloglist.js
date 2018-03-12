import React from 'react';
import { connect } from 'dva';
import { Layout, List, Avatar  } from 'antd';
import './Bloglist.less';
const { Header, Footer, Sider, Content } = Layout;


class BlogList extends React.Component {
  render() {
    return(
      <div>
        <Layout style={{ backgroundColor: '#fff'}}>
          <Header className='title'>
            <span>xuyu'sblog</span>
          </Header>
          <Content className='main'>
            <ul>
              <li>
                <h2 className='main_title'>this is title</h2>
                <p className='content'>this ithis is contentthis isthis ithis is contentthis isthis ithis is contentthis isthis ithis is contentthis is contentthis is contentthis is contents content!!!</p>
                <p className='time'>time:1995/04/12</p>
              </li>
              <li>
                <h2 className='main_title'>this is title</h2>
                <p className='content'>this ithis is contentthis isthis ithis is contentthis isthis ithis is contentthis isthis ithis is contentthis is contentthis is contentthis is contents content!!!</p>
                <p className='time'>time:1995/04/12</p>
              </li>
              <li>
                <h2 className='main_title'>this is title</h2>
                <p className='content'>this ithis is contentthis is contentthis is contentthis is contents content!!!</p>
                <p className='time'>time:1995/04/12</p>
              </li>
              <li>
                <h2 className='main_title'>this is title</h2>
                <p className='content'>this ithis is contentthis is contentthis is contentthis is contents content!!!</p>
                <p className='time'>time:1995/04/12</p>
              </li>
            </ul>
          </Content>
          <Footer className='footer'>
            <p>物有本末,事有始终,知所先后,则近道亦.</p>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default connect((state)=> {
  return {
    loading: state.loading.global,
    arr: state.example.arr,
  }
})(BlogList);