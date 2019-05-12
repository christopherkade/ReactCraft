import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: themes.dark,
    showPanel: false,
  },
});

configure(loadStories, module);
