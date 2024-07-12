import { useEffect, useState } from 'react';
import { getPosts, Post } from '../api/posts';

export function ComUseEffectEAwait() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const makeRequest = async () => {
    setIsLoading(true);

    try {
      const response = await getPosts();
      setPosts(response);
    } catch (e) {
      setError(e?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      makeRequest();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h2>
        Listando posts com <code>fetch</code> usando <code>await</code>
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
