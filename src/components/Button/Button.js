import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  font-size: 1rem;
  background-color: #710504;
  color: #FFC700;
  padding: 0.25rem 2.5rem;
  border-radius: 6px;
  border: 2px ridge #6A686A;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  text-shadow: 1px 1.5px 1px black;
  box-shadow: inset -3px 3px 5px rgba(255, 255, 255, 0.077), inset 5px -5px 5px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
    color: white;
    background: linear-gradient(90deg, rgba(135,6,6,1) 6%, rgba(231,21,6,1) 46%, rgba(135,6,6,1) 92%);
  }

  &:focus {
    outline: transparent;
  }

  &:active {
    box-shadow: inset 0px 3px 2px black, inset -3px 0px 2px black, inset 1px 0px 2px black;
  }
`

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <span>
        {children}
      </span>
    </StyledButton>
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
