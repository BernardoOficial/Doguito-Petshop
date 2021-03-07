import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import getDados from '../api/dados'

import '../assets/css/post.css'

const Post = () => {

    const [postAtual, setPostAtual] = useState({});
    let { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getDados(`/posts/${id}`, setPostAtual)
          .catch((erro) => {
            console.log(erro);
            history.push('/*');
          })
    }, [id])

    return (
      <main className="container flex flex--centro">
          <article className="cartao post">
            <h3 className="cartao__titulo">{postAtual.title}</h3>
            <p className="cartao__texto">{postAtual.body}</p>
          </article>
      </main>
    );
}

export default Post