import React from 'react'
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

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
      <Image alt="logo-imagen" src={People}/>

      <ContainerItens>
        <H1>Olá</H1>
        
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Digite seu nome"/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Digite sua idade"/>

        <Button>Cadastrar <img alt="seta" src={Arrow}/></Button>
      </ContainerItens>
      
    </Container>)
}

export default App