import React, {Component} from 'react';
import { Input } from 'antd';

export default class InputPanel extends Component { 
  render() {
    return (
      <div className="input-panel">
	      <Input placeholder="Имя и Фамилия" />
      </div>
    );
  }
}




// ReactDOM.render(<Input placeholder="Basic usage" />, mountNode);