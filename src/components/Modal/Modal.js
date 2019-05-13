import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"

import { Title } from "../Title"
import { Button } from "../Button"
import { BoxDecorators } from "../BoxDecorators"

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
      <BoxDecorators />
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
