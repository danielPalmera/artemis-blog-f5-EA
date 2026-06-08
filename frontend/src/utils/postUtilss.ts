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

export async function getRelatedPostByFirstTag(tags: string): Promise<Post[] | null> {
    const firstTag = String(tags).split(',')[0].trim().toLowerCase();
    const relatedPosts = (await getPosts()).filter(articulo => articulo.tags !== tags && String(articulo.tags).split(',').map(trozo => trozo.trim().toLowerCase()).includes(firstTag)).slice(0, 3);
    return relatedPosts;
}