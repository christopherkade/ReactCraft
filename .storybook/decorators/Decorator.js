import React from 'react';

import { createGlobalStyle } from 'styled-components';

import font from '../../src/fonts/FrizQuadrataTT.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Friz Quadrata";
    src: local('Friz Quadrata'), url('${font}') format("truetype");
  }

  body {
    margin: 3rem;
  }

  * {
    font-family: "Friz Quadrata";
  }
`

const Decorator = storyFn => (
  <React.Fragment>
    <GlobalStyle />
    {storyFn()}
  </React.Fragment>
);

export default Decorator
