import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { getPosts } from '../api/posts';

export function ComTanStackQueryESuspense() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    suspense: true,
  });

  return (
    <div>
      <h2>
        Listando posts com <code>TanStack Query</code> e <code>Suspense</code>
      </h2>
      <Suspense fallback={<p>Carregando...</p>}>
        <>
          {error && <p>{error.message}</p>}
          {posts?.map((post) => (
            <article key={post.id}>
              <header>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </header>
            </article>
          ))}
        </>
      </Suspense>
    </div>
  );
}
