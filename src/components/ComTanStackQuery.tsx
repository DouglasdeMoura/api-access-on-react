// ATENÇÃO: repare que eu coloquei o provider do @tanstack/query
// no arquivo main.tsx

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/posts';

export function ComTanStackQuery() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div>
      <h2>
        Listando posts com <code>TanStack Query</code>
      </h2>
      {error && <p>{error.message}</p>}
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
