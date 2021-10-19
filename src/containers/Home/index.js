import React, {useState, useRef, useEffect} from 'react'

import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

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

  

  //React Hook UseEffect. 
  // Chamando todos os usuarios quando a aplicação é iniciada.
  useEffect(() => {
    // Recuperando usuarios no backend
    async function fatchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fatchUsers()

  }, [])

  async function addNewUser(){

    // Conectando com o Back-and
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value, 
      age: inputAge.current.value
    })

    setUsers([...users, newUser])

  }

  // Deletar usuarios
  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers)

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
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="deletar"/>
              </button>
            </User>
          ))}
        </ul>

      </ContainerItens>
      
    </Container>)
}

export default App