import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Article from './Article';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Article />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});