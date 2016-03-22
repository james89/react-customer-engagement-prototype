import React from 'react';
import MyComponent from './components/my-component/my-component.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<MyComponent title="Hello ReactJS" />
			</div>
		);
	}
}
