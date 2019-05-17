import React from 'react';

import { storiesOf } from '@storybook/react';
import { ProgressBar } from "../components/ProgressBar"

storiesOf('ProgressBar', module)
  .add('Default', () => <ProgressBar text="XP 13000/20000" />)
  .add('25%', () => <ProgressBar text="XP 13000/20000" percent={25} />)
  .add('50%', () => <ProgressBar text="XP 13000/20000" percent={50} />)
  .add('75%', () => <ProgressBar text="XP 13000/20000" percent={75} />)
  .add('100%', () => <ProgressBar text="XP 13000/20000" percent={100} />)
  .add('No separators', () => <ProgressBar text="XP 13000/20000" percent={25} separators={false} />)
  .add('Custom size', () => <ProgressBar text="XP 13000/20000" percent={25} width={50} />)
