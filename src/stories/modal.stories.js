import React from 'react';
import { storiesOf } from '@storybook/react';

import { Modal } from "../components/Modal"

storiesOf('Modal', module)
  .add('With cancel button', () => <Modal title="Logging in to game server" cancelText="Cancel" />)
  .add('With ok button', () => <Modal title="Logging in to game server" okText="Alright" />)
  .add('With both buttons', () => <Modal title="Logging in to game server" okText="Alright" cancelText="Cancel" />)
