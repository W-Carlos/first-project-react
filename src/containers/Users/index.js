import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom"

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'

import {
  Container, 
  Image,  
  Button,
  User,
} from './styles'

// JSX = Mistura html com javascript
const Users = () => {
  // REACT HOOKS => FERRAMENTAS AUXILIARES
  const [users, setUsers] = useState([])
  // Um estado no Raect é IMUTÁVEL

  const history = useHistory()

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

  // Deletar usuarios
  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers)

  }

  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>
      <Image alt="logo-imagen" src={Avatar}/>

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

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

        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow}/> Voltar 
        </Button>

      </ContainerItens>
      
    </Container>)
}

export default Users