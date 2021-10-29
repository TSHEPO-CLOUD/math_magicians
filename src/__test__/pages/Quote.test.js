import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../pages/Quote';

it('should match the snapshot of quote', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
