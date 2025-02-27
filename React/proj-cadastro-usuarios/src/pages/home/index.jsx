import './index.css'
import Trash from '../../img/trash.png'
import api from  '../../services/api'
import { useEffect, useState, useRef } from 'react'


function Home() {
  //informações do BD
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef() 


  //Buscar usuários
  async function getUsers () {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }
  
  //Cadastrar usuário  
  async function createUsers () {
    await api.post('/usuarios', { 
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    //chamando a função para atualizar os usuários automaticamente
    getUsers ()
  }

  useEffect(() => {
    getUsers ()
  }, [])

  //Deletar usuário
  async function deleteUsers (id) {
    const usersFromApi = await api.delete(`/usuarios/${id}`)
    //chamando a função para atualizar os usuários automaticamente
    getUsers ()
  }

  //html
  return (
    <>
      <div className='container'>
        <form>
          <h2>Cadastro de Usuários:</h2>

          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder='Digite seu nome' ref={inputName} />

          <label htmlFor="age">Idade:</label>
          <input type="text" name="age" id="age" placeholder='Digite sua idade' ref={inputAge} />

          <label htmlFor="email">Email:</label> 
          <input type="email" name="email" id="email" placeholder='Digite seu email' ref={inputEmail} />

          <button type="submit" onClick={createUsers}>Cadastrar</button>

        </form>

        {users.map((user) => (        
          <div key={user.id} className='card'> 
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>

            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} alt="Lixeira"/>
            </button>
          </div>
        ))}

      </div>
    </>
  )
}

export default Home
