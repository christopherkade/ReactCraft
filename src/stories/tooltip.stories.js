import React from 'react';

import { storiesOf } from '@storybook/react';
import { Tooltip } from "../components/Tooltip"

import '../index.css';

storiesOf('Tooltip', module)
  .add('default', () => <Tooltip text="It works !">Hover me!</Tooltip>)
  .add('with longer delay', () => <Tooltip text="It works !" delay={2000}>Hover me for 2 seconds</Tooltip>)
