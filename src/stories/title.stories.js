import React from 'react';

import { storiesOf } from '@storybook/react';
import { Title } from "../components/Title"

import '../index.css';

storiesOf('Title', module)
  .add('Default', () => <Title>Character Name</Title>)


