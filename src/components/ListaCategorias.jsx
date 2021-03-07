import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getDados from '../api/dados';

import "../assets/css/blog.css";

const ListaCategorias = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getDados('/categorias', setCategorias)
            .catch((erro) => {
                console.log(erro);
            });
    }, [categorias])

    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria, id) => (
                    <Link to={`/categorias/${categoria.id}`} key={id} >
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`} >
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    );
}

export default ListaCategorias