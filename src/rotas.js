import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Principal from "./paginas/Principal";


const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Login/>} />
        <Route exact={true} path="/cadastro" element={<Cadastro/>} />
        <Route exact={true} path="/login" element={<Login/>} />
        <Route exact={true} path="/principal" element={<Principal/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default Rotas;