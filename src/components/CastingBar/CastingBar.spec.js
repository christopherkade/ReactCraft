import React from 'react';
import CastingBar from './CastingBar';
import { render } from 'react-testing-library';

describe('<CastingBar />', () => {

  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<CastingBar />)
      expect(container).toMatchSnapshot()
    });
  });

  describe('text prop', () => {
    it('should display Fireball as the default text', () => {
      const { container } = render(<CastingBar />)
      expect(container.textContent).toBe("Fireball")
    })

    it('should display Frostbolt as the text', () => {
      const { container } = render(<CastingBar text="Frostbolt" />)
      expect(container.textContent).toBe("Frostbolt")
    })
  })
});
