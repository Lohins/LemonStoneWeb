import renderer from 'react-test-renderer';
import React from 'react';
import App from '~src/App';

test('Test app rendering', ()=> {
	const wrapper = renderer.create(<App />).toJSON();
	expect(wrapper).toMatchSnapshot();
});
