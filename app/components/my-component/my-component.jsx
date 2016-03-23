import React from 'react';

const defaultProps = {
	title: 'This is the default title'
}
export default class MyComponent extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="my-component">
				<h2 className="title">{this.props.title}</h2>
			</div>
		);
	}
}

MyComponent.defaultProps = defaultProps;
