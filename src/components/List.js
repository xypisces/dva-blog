import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd'

const List = (props) => {
  console.log(props.loading)
  console.log(props.arr)
  return(
  <div>
    <h1>hello world</h1>
    <p>p: {props.loading}</p>
    <Button type="primary">click it</Button>
  </div>
  );
  
}

export default connect((state)=> {
  return {
    loading: state.loading.global,
    arr: state.example.arr,
  }
})(List);