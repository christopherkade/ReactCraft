import React from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from "../components/Input"

import '../index.css';

storiesOf('Input', module)
  .add('Default', () => <Input />)
