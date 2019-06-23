import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import './index.css';

import InputPanel from './components/input-panel/input-panel';
import SelectPanel from './components/select-panel/select-panel';
import RadiotPanel from './components/radio-panel/radio-panel';

export class App extends Component {
	render() {
		return (
			<div className="container">
				<InputPanel/>
				<SelectPanel/>



				<p>Выбор способов доставки</p>
				
				<RadiotPanel/>

			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));