import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getDados from "../api/dados";

const ListaPost = ({ url }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      getDados(url, setPosts);
    }, [posts]);

    return (
        <section className="posts container">
        {
            posts.map((post) => {
                return (
                  <Link
                    to={`/posts/${post.id}`}
                    key={post.id}
                    className={`cartao-post cartao-post--${post.categoria}`}
                  >
                    <article>
                      <h3 className="cartao-post__titulo">{post.title}</h3>
                      <p className="cartao-post__meta">
                        {post.metadescription}
                      </p>
                    </article>
                  </Link>
                );
            })   
        }
        </section>
    );
}

export default ListaPost;