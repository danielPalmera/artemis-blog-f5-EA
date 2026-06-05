// src/lib/postUtils.js
// Extrae estas funciones de [slug].astro para poder testearlas con Vitest
 
/**
 * Obtiene el primer tag de un post (normalizado a minúsculas y sin espacios)
 * @param {string|string[]} tags
 * @returns {string}
 */
export function getFirstTag(tags) {
  return String(tags).split(',')[0].trim().toLowerCase();
}
 
/**
 * Filtra los posts relacionados: mismo primer tag, distinto slug, máximo 3
 * @param {Object} currentPost - Post actual
 * @param {Object[]} allPosts - Todos los posts
 * @returns {Object[]}
 */
export function getRelatedPosts(currentPost, allPosts) {
  const firstTag = getFirstTag(currentPost.tags);
  return allPosts
    .filter(p =>
      p.slug !== currentPost.slug &&
      String(p.tags).split(',').map(t => t.trim().toLowerCase()).includes(firstTag)
    )
    .slice(0, 3);
}