import React, {useState, useRef} from 'react'
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
  // REACT HOOKS => FERRAMENTAS AUXILIARES
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  // Um estado no Raect é IMUTÁVEL

  function addNewUser(){
    setUsers([
      ...users, 
      {
        id: Math.random(), 
        name: inputName.current.value, 
        age: inputAge.current.value
      }
    ])
  }

  return (
    <Container>
      <Image alt="logo-imagen" src={People}/>

      <ContainerItens>
        <H1>Olá</H1>
        
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome"/>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua idade"/>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow}/>
        </Button>

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