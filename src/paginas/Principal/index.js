import React, { Component } from "react";
import firebase from "../../Firebase";


class Principal extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      dataNascimento: ""
    }
  }

  async componentDidMount(){

    await firebase.auth().onAuthStateChanged( async (usuario) => {
      if(usuario){
        var uid = usuario.uid;

        await firebase.firestore().collection("usuario").doc(uid).get().then((retorno) => {
          this.setState({
            nome: retorno.data().nome,
            sobrenome: retorno.data().sobrenome,
            dataNascimento: retorno.data().dataNascimento
          });
        });
      }
    });
  }

  render(){
    return(
        <div>

          <h1>Página Principal</h1>
          <h2>Dados do usuário</h2>

          <div class="campoRecuperado">Nome:</div>
          <div class="valorRecuperado"> { this.state.nome } <br/> </div>
          
          <div class="campoRecuperado">Sobrenome:</div>
          <div class="valorRecuperado"> { this.state.sobrenome } <br/> </div>

          <div class="campoRecuperado">Data de nascimento:</div>
          <div class="valorRecuperado"> { this.state.dataNascimento } <br/> </div>

        </div>
    )
  }
  
}

export default Principal;