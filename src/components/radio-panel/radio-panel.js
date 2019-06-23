import React, {Component} from 'react';
import { Radio } from 'antd';

export default class RadiotPanel extends Component {
  render() {
    return (
      <div className="radio-panel">
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>самовывоз из Новой Почты</Radio>
          <Radio value={2}>самовывоз из Укрпочты</Radio>
          <Radio value={3}>курьер Мист Экспресс</Radio>
          <Radio value={4}>курьер Новая Почта</Radio>
        </Radio.Group>
      </div>
    );
  }
}
