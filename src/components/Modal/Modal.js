import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"

import { Title } from "../Title"
import { Button } from "../Button"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(22, 17, 14, 0.6);
  text-align: center;
  padding: 0.5rem 4rem;
  box-shadow: inset 1px 1px 7rem 0rem black;
  border: 0.25rem ridge #8C8C8C;
  width: 500px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem 0 1rem 0;

  & > button {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`

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

const Modal = ({
  title,
  okText,
  cancelText,
  onOk,
  onCancel
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <ButtonWrapper>
        {okText ? <Button onClick={onOk}>{okText}</Button> : null}
        {cancelText ? <Button onClick={onCancel}>{cancelText}</Button> : null}
      </ButtonWrapper>

      <TopLeft />
      <TopRight />
      <BottomRight />
      <BottomLeft />
    </Wrapper>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  okText: PropTypes.string,
  onOk: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func
};

export default Modal
