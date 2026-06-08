import type { Post } from "../types/post";

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(import.meta.env.PUBLIC_API_BASE + "/api/v1/posts");
    if (!res.ok) {
      throw new Error(`Error al obtener los posts: ${res.status} ${res.statusText}`);
    }
    
    const posts: Post[] = await res.json();
    return posts;
  } catch (error) {
    console.error("Error en getPosts:", error);
    return []; 
  }
}