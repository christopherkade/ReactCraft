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
    it('should display Fireball as the default text', () => {
      const { container } = render(<ProgressBar />)
      expect(container.textContent).toBe("Fireball")
    })

    it('should display Frostbolt as the text', () => {
      const { container } = render(<ProgressBar text="Frostbolt" />)
      expect(container.textContent).toBe("Frostbolt")
    })
  })
});
