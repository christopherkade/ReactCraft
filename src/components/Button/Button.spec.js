import React from 'react';
import Button from './Button';
import { render, fireEvent } from 'react-testing-library';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Button />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('children prop', () => {
    it('should display Enter World as Button children', () => {
      const { container } = render(<Button>Enter World</Button>);
      expect(container.querySelector('button').textContent).toBe('Enter World');
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<Button onClick={onClickMock}>Click me!</Button>);
      fireEvent.click(getByText('Click me!'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
