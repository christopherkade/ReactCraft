import { configure, addParameters, addDecorator } from '@storybook/react';

import Decorator from "./decorators/Decorator"
import theme from "./theme"

addDecorator(Decorator)

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: theme,
    showPanel: false,
  },
});

configure(loadStories, module);
