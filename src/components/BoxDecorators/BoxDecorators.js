import React from "react"
import styled from "styled-components"

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #8C8C8C;
  z-index: 100;
  transform: rotate(45deg) translate(-10px);
  border: 2px ridge #8C8C8C;
`

const TopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #8C8C8C;
  z-index: 100;
  transform: rotate(45deg) translateY(-10px);
  border: 2px ridge #8C8C8C;
`

const BottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #8C8C8C;
  z-index: 100;
  transform: rotate(45deg) translate(10px);
  border: 2px ridge #8C8C8C;
`

const BottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #8C8C8C;
  z-index: 100;
  transform: rotate(45deg) translateY(10px);
  border: 2px ridge #8C8C8C;
`

const BoxDecorators = () => {
  return (
    <>
      <TopLeft />
      <TopRight />
      <BottomRight />
      <BottomLeft />
    </>
  )
}

export default BoxDecorators
