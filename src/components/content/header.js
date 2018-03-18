import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

function Bloghead(props){
  return(
    <Header className='title'>
      <span onClick={props.click}>xuyu'sblog</span>
    </Header>
  )
}


export default Bloghead