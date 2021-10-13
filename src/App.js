import React from 'react'
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import {
  Container, 
  Image, 
  ContainerItens,
  H1, 
  InputLabel, 
  Input,
  Button,
  User,
} from './styles'

// JSX = Mistura html com javascript
const App = () => {
  const users = [
    {id: Math.random(), name: "Carlos", age: 25}, 
    {id: Math.random(), name: "Maria", age: 30}]

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

        <ul>
          { users.map((user) => (
            // Para iterar itens no react é necessario ter uma key
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button><img src={Trash} alt="deletar"/></button>
            </User>
          ))}
        </ul>

      </ContainerItens>
      
    </Container>)
}

export default App