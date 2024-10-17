import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "./pages/Login.jsx"
import CadastroProduto from "./pages/CadastroProduto.jsx"
import Produto from "./pages/Produto.jsx"

import NavBarr from "./components/NavBarr.jsx"

function App() {
  return (
    <div className="App">
      {/* pra colocar cor back style={{backgroundColor: "green", minHeight:"100vh"}} */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastroProduto' element={<CadastroProduto/>}/>
        <Route path='/produto' element={<Produto/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
