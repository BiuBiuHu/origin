import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.jsx';
import MenuExample from './components/Menu.jsx';

function HelloMessage(props) {
  return (<div>
    <h1>Hello World!</h1>
    <Welcome name='biubiu_hu'>
      测试
    </Welcome>
    <MenuExample></MenuExample>
  </div>);
}

const element = <HelloMessage />;

ReactDOM.render(
  //<h1>Hello, world!</h1>,
  element,
  document.getElementById('root')
);