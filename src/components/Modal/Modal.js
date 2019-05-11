import React from "react"
import PropTypes from 'prop-types';

import { Title } from "../Title"
import { Button } from "../Button"
import "./Modal.css"

const Modal = ({
  title,
  okText,
  cancelText,
  onOk,
  onCancel
}) => {
  return (
    <div className="rc-modal">
      <Title>{title}</Title>

      <div className="rc-modal-button-container">
        {okText ? <Button onClick={onOk}>{okText}</Button> : null}
        {cancelText ? <Button onClick={onCancel}>{cancelText}</Button> : null}
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  okText: PropTypes.string,
  onOk: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func
};

export default Modal
