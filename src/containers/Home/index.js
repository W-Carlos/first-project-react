import React, {useState, useRef} from 'react'

import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

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
  // REACT HOOKS => FERRAMENTAS AUXILIARES
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  // Um estado no Raect é IMUTÁVEL


  async function addNewUser(){

    // Conectando com o Back-and
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value, 
      age: inputAge.current.value
    })

    setUsers([...users, newUser])

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

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow}/>
        </Button>

      </ContainerItens>
      
    </Container>)
}

export default App