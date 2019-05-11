import React from 'react';
import Title from './Title';
import { render } from 'react-testing-library';

describe('<Title />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Title />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('children prop', () => {
    it('should display Eivin as title children', () => {
      const { container } = render(<Title>Eivin</Title>)
      expect(container.querySelector('h1').textContent).toBe('Eivin')
    })
  })
})
