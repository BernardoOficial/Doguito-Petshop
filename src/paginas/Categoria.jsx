import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';

import getDados from '../api/dados';
import SubCategoria from './SubCategoria';

const Categoria = () => {

    let { categoria } = useParams();
    const { url, path } = useRouteMatch();
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
      
      getDados(`/categorias/${categoria}`, (categoria) => {
        setSubcategorias(categoria.subcategorias);
      })

    }, [categoria]);

    return (
      <main>
        <div className="container">
          <h2 className="titulo-pagina">Pet notícias</h2>
        </div>

        <ListaCategorias />

        <ul className="lista-categorias container flex">
          {
            subcategorias.map((subcategoria) => (
              <li
                className={`lista-categorias__categoria lista-categorias__categoria--${categoria}`}
                key={subcategoria}
              >
                <Link to={`${url}/${subcategoria}`}>
                  {subcategoria}
                </Link>
              </li>
            ))
          }
        </ul>

        <Switch>
          <Route exact path={`${path}`}>
            <ListaPost url={`/posts?categoria=${categoria}`} />
          </Route>

          <Route exact path={`${path}/:subcategoria`}>
            <SubCategoria />
          </Route>
        </Switch>
        
      </main>
    );
}

export default Categoria;