// src/lib/formatDate.js
 
/**
 * Formatea una fecha para mostrarla en el blog
 * @param {string} publishedAt - Fecha en formato "YYYY-MM-DD"
 * @returns {string} - Fecha formateada: "Jan 1, 2024"
 */
export function formatDate(publishedAt) {
  return new Date(publishedAt + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}