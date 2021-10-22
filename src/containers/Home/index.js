import React, {useState, useRef} from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button' 

import {
  Container, 
  Image, 
  InputLabel, 
  Input,
} from './styles'

// JSX = Mistura html com javascript
const App = () => {
  // REACT HOOKS => FERRAMENTAS AUXILIARES
  const [users, setUsers] = useState([])
  const history = useHistory()
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

    history.push('/usuarios')

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

      </ContainerItens>
      
    </Container>)
}

export default App