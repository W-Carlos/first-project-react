import React from 'react'

import {Container, H1, P} from './styles'

// JSX = Mistura html com javascript
const App = () => {
  const hello = "Hello React"

  return (
    <Container>
      <H1>{hello}</H1>
      <P>Meu primeiro projeto com ReactJS</P>
      <P>Meu segundo paragrafo</P>
    </Container>)
}

export default App