import React from 'react';
import createComponent from 'react-unit';
import MyComponent from './my-component.jsx';

let component;

describe('test test', () => {
	it('should run this test', () => {
		expect(true).toBeTruthy();
	});
});

describe('Component Renderer', () => {
	beforeEach(() => {
		component = createComponent(<MyComponent title="test title" />);
	});

	it('should render the component', () => {
		expect(component).toBeTruthy();
	});

	it('should have a className of my-component', () => {
		expect(component.props.className).toBe('my-component');
	});

	it('should render a title as per the title prop', () => {
		expect(component.findByQuery('.title')[0].text).toEqual('test title');
	})

})
