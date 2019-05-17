import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  width: ${props => props.width}%;
  height: 0.5rem;
  position: relative;
  background-color: rgb(47, 27, 37, 0.8);
  border: 1px solid #8C8C8C;
  text-align: center;
  border-radius: 3px;
`

const Bar = styled.div`
  width: ${props => props.percent}%;
  height: 0.5rem;
  background-color: #074FB3;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const SeparatorWrapper = styled.div`
  position: relative;
  display: flex;
`

const Separator = styled.div`
  position: relative;
  height: 0.5rem;
  width: 5%;
  border-right: 1px solid #8D959C;
  z-index: 2;
  top: -1.2rem;
`

const Label = styled.span`
  position: relative;
  color: white;
  z-index: 3;
  font-size: 0.6rem;
  top: -0.5rem;
`

const ProgressBar = ({ width, percent, text, separators }) => {
  let allSeparators = []
  
  // Create 20 Separators for our progress bar
  for (let i = 0; i < 19; i++) {
    allSeparators.push(<Separator key={i} />)
  }

  return (
    <Wrapper width={width}>
      <Label>
        {text}
      </Label>
      <Bar percent={percent} />

      {
        separators ?
          <SeparatorWrapper>
            {allSeparators.map(separator => separator)}
          </SeparatorWrapper>
          : null
      }
    </Wrapper>
  )
}

ProgressBar.propTypes = {
  width: PropTypes.number,
  text: PropTypes.string,
  percent: PropTypes.number,
  separators: PropTypes.bool,
};

ProgressBar.defaultProps = {
  width: 100,
  text: "XP",
  percent: 0,
  separators: true
};


export default ProgressBar
