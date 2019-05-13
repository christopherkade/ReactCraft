import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  display: inline-flex;
  border: 0.125rem ridge #696967;
  border-radius: 0.25rem;
`

const StyledIcon = styled.i`
  display: inline-block;
  background-image: url('${({ name }) => name}');;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid #CACBCA;
  border-radius: 3px;
`;

const Icon = ({ name, width, height }) => (
  <Wrapper width={width} height={height}>
    <StyledIcon name={name} width={width} height={height} />
  </Wrapper>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  width: 32,
  height: 32,
};

export default Icon
