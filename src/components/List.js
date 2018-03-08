import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd'
import * as inline from './inline.less';
import './global.less';

const List = (props) => {
  return(
  <div style={styles.main}>
    <div className='global'>
      <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>全局样式，在任何地方的className下的card组件的都会圆角</p>
      </Card>
    </div>
    <div className='global'>
      <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
      </Card>
    </div>
    <div className={inline.content}>
      <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>局部样式，对组件内部的样式不起作用，只能自己定义一个className覆盖</p>
      </Card>
    </div>
    <div className={inline.content}>
      <Card className={inline.border} title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>局部样式，对组件内部的样式不起作用，只能自己定义一个className覆盖</p>
      </Card>
    </div>
  </div>
  );
  
}

const styles = {
  main: {
    padding: '20px',
  },
  three:{
    fontSize: '20px',
  }
}

export default connect((state)=> {
  return {
    loading: state.loading.global,
    arr: state.example.arr,
  }
})(List);