import React from 'react';
import { Button } from 'antd-mobile';

class Welcome extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
      <div>
        <h1>Hello 123, {this.props.name}</h1>
        <p>{this.props.children}</p>
        <Button>Start</Button>
      </div>);
    }
}

export default Welcome;