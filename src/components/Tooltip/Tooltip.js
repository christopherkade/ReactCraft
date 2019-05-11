import React, { useState } from "react"
import PropTypes from "prop-types"

import "./Tooltip.css"

const Tooltip = ({ children, delay, text }) => {
  const [show, setShow] = useState(false);
  const [delayTimer, setDelayTimer] = useState(null);

  const handleEnter = () => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);
    setDelayTimer(timer);
  };

  const handleLeave = () => {
    clearTimeout(delayTimer);
    setShow(false);
  };

  return (
    <div className="rc-tooltip" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {show ? <div class="rc-tooltip-text">{text}</div> : null}
      {children}
    </div >
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  delay: PropTypes.number,
};

Tooltip.defaultProps = {
  delay: 150,
  text: "Tooltip",
};

export default Tooltip
