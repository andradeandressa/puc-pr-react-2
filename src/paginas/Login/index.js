import React, { Component} from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import "../../Estilos.css";


class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      senha: ""
    }

    this.acessar = this.acessar.bind(this);
  }

  async acessar(){

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then(() => {
      window.location.href = "./principal";
    })
    .catch((erro) => {
      console.log(erro)
            alert("Usuário não cadastrado ou dados inválidos!")
    });
  }

  render(){
    return(
      <div>

        <h1>Login</h1>

          <form className="formLogin">

          <div class='campo'>
            <label class='valorInput'>
              <input type='text' required onChange={(e) => this.setState({email: e.target.value})} />
              <span class='tituloCampo'>E-mail</span>
            </label>
          </div>
          
          <div class='campo'>
            <label class='valorInput'>
              <input type='password' required onChange={(e) => this.setState({senha: e.target.value})}/>
              <span class='tituloCampo'>Senha</span>
            </label>
          </div>
        
        </form>

        <button onClick={this.acessar}>Acessar</button>

        <div class="redirecionar">Ainda não possui cadastro? <Link to="/login">Cadastre-se</Link>.</div>

      </div>

      
    )
  }
}


export default Login;