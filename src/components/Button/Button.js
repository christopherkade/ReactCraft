import React from "react"
import PropTypes from 'prop-types';

import "./Button.css"

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="rc-button">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'Enter World',
  onClick: () => { },
};

export default Button
