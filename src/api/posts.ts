import { fetchClient } from './fetch-client';

export type Post = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export const getPosts = () => fetchClient<Post[]>('/posts');
