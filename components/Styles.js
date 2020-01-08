import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 200px;
  margin: auto;

  /*All inputs that are child of a Card should get these styles*/
  input {
    width: 90%;
    margin: auto;
    background: yellow;
    font-size: 24px;
  }
`
