import React from 'react'
import styled from 'styled-components'
import { Card } from './Styles'

const LandingStyles = styled.div`
  background: grey;
  height: 100vh;
  width: 100vw;

  /*This input style overrides the input style in Card imported from ./Styles*/
  input {
    background: red;
  }
`

const Landing = () => {
  return (
    <LandingStyles>
      This is the landing page.
      <Card>
        <input type='email' />
      </Card>
    </LandingStyles>
  )
}

export default Landing
