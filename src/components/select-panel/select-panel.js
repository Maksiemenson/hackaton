import React, {Component} from 'react';
import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

export default class SelectPanel extends Component { 

  render(){
    return (
      <div className="select-panel">
	      <Select
					showSearch
					style={{ width: '100%' }}
					placeholder="Выбрать город"
					optionFilterProp="children"
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onSearch={onSearch}
					filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
				>
					<Option value="jack">Одесса</Option>
					<Option value="lucy">Киев</Option>
					<Option value="tom"></Option>
				</Select>
      </div>
    );
  }
}





