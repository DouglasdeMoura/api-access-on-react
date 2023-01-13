import { getPosts } from '../api/posts';
import { useFetch } from '../hooks/use-fetch';

export function ComHookCustomizado() {
  const {
    data: posts,
    error,
    isLoading,
  } = useFetch({ key: ['posts'], fetcher: getPosts });

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
