import React from "react"
import PropTypes from 'prop-types';

import "./Title.css"

const Title = ({ children }) => {
  return (
    <h1 className="rc-title">
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Title.defaultProps = {
  children: '',
};

export default Title
