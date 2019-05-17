import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon } from "../components/Icon"

storiesOf('Icon', module)
  .add('Default size', () => <Icon name="https://image.flaticon.com/icons/svg/785/785116.svg" />)
  .add('Custom size', () => <Icon name="https://image.flaticon.com/icons/svg/785/785116.svg" width={150} height={150} />)
