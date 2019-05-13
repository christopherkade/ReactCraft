import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from "../components/Button"

storiesOf('Button', module)
  .add('With text', () => <Button>Enter World</Button>)
