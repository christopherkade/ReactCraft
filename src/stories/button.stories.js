import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from "../components/Button"

import '../index.css';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={() => console.log("Hello")}>Enter World</Button>)
