import React from 'react';
import Modal from './Modal';
import { render, fireEvent } from 'react-testing-library';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Modal title="My awesome title"></Modal>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('tile prop', () => {
    it('should display Logging in as the modal\'s title', () => {
      const { container } = render(<Modal title="Logging in" />);
      expect(container.querySelector('h1').textContent).toBe('Logging in');
    });
  });

  describe('onClick prop', () => {
    it('should call onOk function when the Ok button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<Modal onOk={onClickMock} okText="Ok" title="onClick test" />);
      fireEvent.click(getByText('Ok'));
      expect(onClickMock).toHaveBeenCalled();
    });

    it('should call onCancel function when the Cancel button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<Modal onCancel={onClickMock} cancelText="Cancel" title="onClick test" />);
      fireEvent.click(getByText('Cancel'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
