import React from 'react'
import styled from 'styled-components'
import { Card } from './Styles'

const LandingStyles = styled.div`
  background: grey;
  height: 100vh;
  width: 100vw;

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
