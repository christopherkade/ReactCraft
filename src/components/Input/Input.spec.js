import React from 'react';
import Input from './Input';
import { render } from 'react-testing-library';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Input />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('input label', () => {
    it('should display Say: as the input\'s label', () => {
      const { container } = render(<Input />);
      expect(container.querySelector("label").textContent).toBe('Say: ')
    })
  })
});
