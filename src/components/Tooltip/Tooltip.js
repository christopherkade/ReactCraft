import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: default;
  white-space: nowrap;
`

const Tip = styled.div`
  background-color: rgb(47, 27, 37, 0.8);
  color: white;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
  text-shadow: 1.2px 1.5px black;
  border: 1px solid rgb(209, 207, 208);
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  position: absolute;
  top: -30px;
  right: -50px;
  text-align: center;
  z-index: 100;
  box-shadow: inset 1px 1px 1rem 0rem black;
`

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
    <Wrapper onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {show ? <Tip>{text}</Tip> : null}
      {children}
    </Wrapper>
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
