import React from 'react';

import { storiesOf } from '@storybook/react';
import { Modal } from "../components/Modal"

import '../index.css';

storiesOf('Modal', module)
  .add('with cancel button', () => <Modal title="Logging in to game server" cancelText="Cancel" />)
  .add('with ok button', () => <Modal title="Logging in to game server" okText="Alright" />)
  .add('with both buttons', () => <Modal title="Logging in to game server" okText="Alright" cancelText="Cancel" />)
