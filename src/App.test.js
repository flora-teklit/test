import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const li = document.createElement('li');
  ReactDOM.render(<App />, li);
  ReactDOM.unmountComponentAtNode(li);
});
