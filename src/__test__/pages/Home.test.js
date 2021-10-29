import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages/Home';

it('should match the snapshot of Home', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});