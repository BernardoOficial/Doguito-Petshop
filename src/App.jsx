import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import './assets/css/base/base.css'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Erro404 from './paginas/Erro404'
import Post from "./paginas/Post";
import Cabecalho from './components/Cabecalho'
import Categoria from './paginas/Categoria'
import SubCategoria from './paginas/SubCategoria'

function App() {

  return (
    <>
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/categorias/:categoria">
          <Categoria />
        </Route>
        <Route exact path="/categorias/categoria/:subcategoria">
          <SubCategoria />
        </Route>
        <Route path="*">
          <Erro404 />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App
