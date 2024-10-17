import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';

import Nav from "react-bootstrap/Nav"

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/teste"

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
   
  
    // variaveis pro alerta 
    const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
    const [alertaMensagem, setAlertMensagem] = useState("")
    const [alertaVariant, setAlertaVariant] = useState("danger")
  
    // lista de usuarios 
    const [usuarios, setUsuarios] = useState([])
  
  
    // resgate de dados da api 
    useEffect(() => {
      async function fetchData() {
        try{
          const res = await fetch(url)
          const users = await res.json()
          setUsuarios(users)
        }
        catch (error){
          console.log(error.messagem)
        }
        
      }
      fetchData()
      console.log(usuarios)
    }, [])
  
    const gravarLocalStorage = (usuario) =>{
      localStorage.setItem("userName", usuario.nome)
      localStorage.setItem("userEmail", usuario.email)
    }
  
  
    const handleLogin = async (e) =>{
      e.preventDefault()
  
      const user = { email, senha}
  
      const userToFind = usuarios.find(
        (userFind) => userFind.email == user.email 
      )
  
      if(email != ""){
        if(senha != ""){
          if(userToFind != undefined && userToFind.senha == senha){
            console.log(userToFind)
            console.log("Entrou")
            setAlertaClass("mb-3")
            gravarLocalStorage(userToFind)
            setAlertMensagem("Login efetuado com Sucesso")
            setAlertaVariant("success")
            navigate('/produto')
            
          }else{
            setAlertaClass("mb-3")
            setAlertMensagem("ta errado burro(a)")
          }
  
        }
        else{
          setAlertaClass("mb-3")
          setAlertMensagem("O campo senha não pode ser vazio")
        }
  
      }
      else{
        setAlertaClass("mb-3")
        setAlertMensagem("O campo email não pode ser vazio")
      }
    }
  
    return (
      <div>
        <Container>
        <span class="material-symbols-outlined" style={{fontSize: "100px"}}>
  Login
  </span>
  
          <form onSubmit={handleLogin}>
         
                {/* caixinha do email  */}
  <FloatingLabel
          controlId="floatingInputEmail"
          label="Email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) =>{setEmail(e.target.value)}} />
        </FloatingLabel>
  
        {/* caixinha da senha  */}
        <FloatingLabel controlId="floatingPassword" label="Senha" className='mb-3'>
          <Form.Control type="password" placeholder="Password" value={senha} onChange={(e) =>{setSenha(e.target.value)}}/>
        </FloatingLabel>
  
             
  
        <Alert key="danger" variant={alertaVariant} className={alertaClass}>{alertaMensagem}</Alert>
  
        <Button variant="primary" type='submit'>Login</Button>{' '}
        </form>
  
        <p>Faça seu Login</p>
        </Container></div>
  )
}

export default Login