import './index.css'
import Trash from '../../img/trash.png'

function Home() {
  //informações do BD
  const users = [
    {
      id: 3781381,
      name: 'João',
      age: '20',
      email: 'joao@gmail.com'
    },
    {
      id: 3788967,
      name: 'Pedro',
      age: '30',
      email: 'pedro@gmail.com'
    },
  ]

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários:</h1>

          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder='Digite seu nome' />

          <label htmlFor="age">Idade:</label>
          <input type="number" name="age" id="age" placeholder='Digite sua idade' />

          <label htmlFor="email">Email:</label> 
          <input type="email" name="email" id="email" placeholder='Digite seu email' />

          <button type="submit">Cadastrar</button>

        </form>

        <div className='container'>
          
          <div>
            <p>Nome:</p>
            <p>Idade:</p>
            <p>Email:</p>
          </div>

          <button>
            <img src={Trash} alt="Lixeira"/>
          </button>

        </div>

      </div>
    </>
  )
}

export default Home
