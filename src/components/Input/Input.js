import React from "react"
import styled from "styled-components"

import { BoxDecorators } from "../BoxDecorators"

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 0.1875rem ridge darkgrey;
`

const Label = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  color: white;
  margin-left: 0.5rem;
  margin-top: 5px;
  font-weight: lighter;
  z-index: 100;
`

const InputBox = styled.input`
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: inset 1px 1px 7rem 0rem black;
  background-color: rgb(47, 27, 37, 0.8);
  color: white;
  border-radius: 0.125rem;
  padding: 0.125rem 0.125rem 0.125rem 2.5rem;
  font-size: 1rem;

  &:focus {
    outline: transparent;
  }
`

const Input = () => {
  return (
    <Wrapper>
      <Label htmlFor="input">Say: </Label>
      <InputBox name="input" />
      <BoxDecorators />
    </Wrapper>
  )
}

export default Input
