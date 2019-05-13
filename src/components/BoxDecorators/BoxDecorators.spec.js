import React from 'react';
import BoxDecorators from './BoxDecorators';
import { render } from 'react-testing-library';

describe("<BoxDecorator />", () => {
  describe('Snapshots', () => {
    it("should match snapshot", () => {
      const { container } = render(<BoxDecorators />);
      expect(container).toMatchSnapshot();
    });
  });

  describe("Content validation", () => {
    it("should render 4 decorators", () => {
      const { container } = render(<BoxDecorators />)
      expect(container.querySelectorAll("div").length).toBe(4)
    })
  })
});
