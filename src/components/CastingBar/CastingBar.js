import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { BoxDecorators } from "../BoxDecorators"

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: 1rem;
  position: relative;
  background-color: rgb(47, 27, 37, 0.8);
  box-shadow: inset 1px 1px 7rem 0rem black;
  border: 4px ridge #8C8C8C;
  text-align: center;
`

const Bar = styled.div`
  width: ${props => props.percent}%;
  height: 1rem;
  background-color: #B27A02;
  background: rgb(183,127,0);
  background: linear-gradient(90deg, rgba(183,127,0,1) 96%, rgba(254,255,127,1) 100%);
  box-shadow: inset 1px 1px 0.5rem 0rem black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const Label = styled.span`
  position: relative;
  margin-left: 2px;
  margin-top: 2px;
  color: white;
  z-index: 2;
  font-size: 1.2rem;
  top: -0.25rem;
`

const CastingBar = ({ width, text, percent }) => {
  return (
    <Wrapper width={width}>
      <Label>
        {text}
      </Label>
      <Bar percent={percent} />
      <BoxDecorators />
    </Wrapper>
  )
}

CastingBar.propTypes = {
  width: PropTypes.number,
  text: PropTypes.string,
  percent: PropTypes.number,
};

CastingBar.defaultProps = {
  width: 150,
  text: "Fireball",
  percent: 0,
};

export default CastingBar
