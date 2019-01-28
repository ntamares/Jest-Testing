import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // NEW
  // after render, this is the test to run
  expect(div.innerHTML).toContain('Hi there')
  // NEW
  ReactDOM.unmountComponentAtNode(div);
});
