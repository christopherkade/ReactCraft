import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from "../components/Tooltip"

storiesOf('Tooltip', module)
  .add('Default', () => <Tooltip text="It works !">Hover me</Tooltip>)
  .add('With longer delay', () => <Tooltip text="It works !" delay={1000}>Hover me for 1 second</Tooltip>)
