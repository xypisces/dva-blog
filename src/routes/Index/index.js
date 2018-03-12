import React from 'react';
import { connect } from 'dva';
import { Divider  } from 'antd';
import './index.less';


class Indexs extends React.Component {
  render() {
    return(
      <div>
        <Divider>With Text</Divider>
      </div>
    )
  }
}

export default connect((state)=> {
  return {
  }
})(Indexs);