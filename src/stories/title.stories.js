import React from 'react';

import { storiesOf } from '@storybook/react';
import { Title } from "../components/Title"

storiesOf('Title', module)
  .add('Default', () => <Title>Character Name</Title>)


