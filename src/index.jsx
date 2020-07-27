import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class Hello extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};
	}

	render() {
		return (
			<div className={this.state.clicked ? 'clicked' : null}
		)
	}
}


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
