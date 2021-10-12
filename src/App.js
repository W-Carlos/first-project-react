import React from 'react'

import {
  Container, 
  Image, 
  ContainerItens,
  H1, 
  InputLabel, 
  Input,
  Button,
} from './styles'

// JSX = Mistura html com javascript
const App = () => {

  return (
    <Container>
      <Image></Image>

      <ContainerItens>
        <H1>Olá</H1>
        
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Digite seu nome"/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Digite sua idade"/>

        <Button>Cadastrar</Button>
      </ContainerItens>
      
    </Container>)
}

export default App