import React from 'react';

import { storiesOf } from '@storybook/react';
import { CastingBar } from "../components/CastingBar"

storiesOf('CastingBar', module)
  .add('Default', () => <CastingBar text="Fireball" />)
  .add('25%', () => <CastingBar text="Fireball" percent={25} />)
  .add('50%', () => <CastingBar text="Fireball" percent={50} />)
  .add('75%', () => <CastingBar text="Fireball" percent={75} />)
  .add('100%', () => <CastingBar text="Fireball" percent={100} />)
  .add('Custom width (500px)', () => <CastingBar text="Fireball" percent={25} width={500} />)
