import React from 'react';

import { storiesOf } from '@storybook/react';
import { ProgressBar } from "../components/ProgressBar"

import '../index.css';

storiesOf('ProgressBar', module)
  .add('Default', () => <ProgressBar text="Fireball" />)
  .add('25%', () => <ProgressBar text="Fireball" percent={25} />)
  .add('50%', () => <ProgressBar text="Fireball" percent={50} />)
  .add('75%', () => <ProgressBar text="Fireball" percent={75} />)
  .add('100%', () => <ProgressBar text="Fireball" percent={100} />)
  .add('Custom width (500px)', () => <ProgressBar text="Fireball" percent={25} width={500} />)
