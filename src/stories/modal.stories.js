import React from 'react';

import { storiesOf } from '@storybook/react';
import { Modal } from "../components/Modal"

import '../index.css';

storiesOf('Modal', module)
  .add('with text', () => <Modal title="Logging in to game server" cancelText="Cancel" />)
