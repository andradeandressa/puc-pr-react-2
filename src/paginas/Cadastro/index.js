import React, {Component} from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import "../../Estilos.css";


class Cadastro extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      cadastroRealizado: "Já possui cadastro? "
    }

    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
  }

  async cadastrarUsuario(){

    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(async (retorno) => {
      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento
      })
    });
    this.setState({cadastroRealizado:"Cadastro realizado com sucesso! "});
  }

  render(){
    return(
      <div>

        <h1>Cadastro</h1>

          <form className="formCadastro">

            <div class="campo">
              <label class="valorInput">
                <input type="text" required onChange={(e) => this.setState({email: e.target.value})} />
                <span class="tituloCampo">E-mail</span>
              </label>
            </div>

            <div class="campo">
              <label class="valorInput">
                <input type="password" required onChange={(e) => this.setState({senha: e.target.value})} />
                <span class="tituloCampo">Senha</span>
              </label>
            </div>

            <div class="campo">
              <label class="valorInput">
                <input type="text" required onChange={(e) => this.setState({nome: e.target.value})} />
                <span class="tituloCampo">Nome</span>
              </label>
            </div>

            <div class="campo">
              <label class="valorInput">
                <input type="text" required onChange={(e) => this.setState({sobrenome: e.target.value})} />
                <span class="tituloCampo">Sobrenome</span>
              </label>
            </div>

            <div class="campo">
              <label class="valorInput">
                <input type="date" required  onChange={(e) => this.setState({dataNascimento: e.target.value})} />
                <span class="tituloCampo">Data de nascimento</span>
              </label>
            </div>

          </form>

        <button onClick={this.cadastrarUsuario}>Cadastrar</button>

        

        <div class="redirecionar">
        <label name="label">{this.state.cadastroRealizado}</label>
        Vá para a área de <Link to="/login">login</Link>.</div>

      </div>
    )
  }


}


export default Cadastro;