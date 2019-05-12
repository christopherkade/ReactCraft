import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: #FFC700;
  font-weight: 300;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: black;
  text-shadow: 1.2px 1.5px black;
  margin: 0;
`

const Title = ({ children }) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
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
