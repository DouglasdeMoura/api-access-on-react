import { useState } from 'react';
import { getPosts, Post } from '../api/posts';

export function ComLazyStateInitialization() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState<Post[]>(() => {
    setIsLoading(true);

    getPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return [];
  });

  return (
    <div>
      <h2>
        Listando posts com <code>fetch</code> usando <code>.then</code>
      </h2>
      {error && <p>{error}</p>}
      {isLoading && <p>Carregando...</p>}
      {posts?.map((post) => (
        <article key={post.id}>
          <header>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </header>
        </article>
      ))}
    </div>
  );
}
