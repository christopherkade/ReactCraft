import React from 'react';
import ProgressBar from './ProgressBar';
import { render } from 'react-testing-library';

describe('<ProgressBar />', () => {

  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<ProgressBar />)
      expect(container).toMatchSnapshot()
    });
  });

  describe('text prop', () => {
    it('should display XP as the default text', () => {
      const { container } = render(<ProgressBar />)
      expect(container.textContent).toBe("XP")
    })

    it('should display XP 13000/20000 as the text', () => {
      const { container } = render(<ProgressBar text="XP 13000/20000" />)
      expect(container.textContent).toBe("XP 13000/20000")
    })
  })
});
