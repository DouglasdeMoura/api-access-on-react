import useSWR from 'swr';
import { getPosts } from '../api/posts';

export function ComUseSWRESuspense() {
  const { data: posts, error } = useSWR(['posts'], getPosts, {
    suspense: true,
  });

  return (
    <div>
      <h2>
        Listando posts com <code>useSWR</code> e <code>Suspense</code>
      </h2>
        {error && <p>{error?.message}</p>}
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
