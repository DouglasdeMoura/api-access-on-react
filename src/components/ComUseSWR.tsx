import useSWR from 'swr';
import { getPosts } from '../api/posts';

export function ComUseSWR() {
  const { data: posts, error, isLoading } = useSWR(['posts'], getPosts);

  return (
    <div>
      <h2>
        Listando posts com <code>useSWR</code>
      </h2>
      {error && <p>{error?.message}</p>}
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
