import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.jsx';
import SimpleChart from './components/Chart.jsx';
import SimpleChartHooks from './components/ChartHooks.jsx';
import 'antd-mobile/dist/antd-mobile.css'; 

function HelloMessage(props) {
  return (<div>
    
    <Welcome name='biubiu_hu'>
      <SimpleChart id='1'></SimpleChart>
    </Welcome>
    <h1>Hello World!</h1>
    <SimpleChart id='2'></SimpleChart>
    <SimpleChartHooks></SimpleChartHooks>
  </div>);
}

const element = <HelloMessage />;

ReactDOM.render(
  //<h1>Hello, world!</h1>,
  element,
  document.getElementById('root')
);