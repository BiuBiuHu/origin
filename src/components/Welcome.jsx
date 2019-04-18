import React from 'react';
class Welcome extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (<div>
        <h1>Hello 123, {this.props.name}</h1>
        <p>{this.props.children}</p>
        </div>);
    }
}

export default Welcome;