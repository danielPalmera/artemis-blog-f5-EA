// src/lib/postUtils.test.js
import { describe, it, expect } from 'vitest';
import { getFirstTag, getRelatedPosts } from './postUtils';

// ─── Datos de prueba ──────────────────────────────────────────────────────────

const postA = {
  slug: 'viaje-a-marte',
  title: 'Viaje a Marte',
  tags: 'space, science, nasa',
  excerpt: 'Un viaje épico.',
  publishedAt: '2024-01-01',
  coverImage: { src: '/img/marte.jpg', alt: 'Marte' },
  author: 'Artemis',
  content: '<p>Contenido</p>',
};

const postB = {
  slug: 'vida-en-la-luna',
  title: 'Vida en la Luna',
  tags: 'space, moon',
  excerpt: 'La Luna es increíble.',
  publishedAt: '2024-02-01',
  coverImage: { src: '/img/luna.jpg', alt: 'Luna' },
  author: 'Artemis',
  content: '<p>Contenido</p>',
};

const postC = {
  slug: 'recetas-de-cocina',
  title: 'Recetas de Cocina',
  tags: 'food, cooking',
  excerpt: 'Cocina deliciosa.',
  publishedAt: '2024-03-01',
  coverImage: { src: '/img/cocina.jpg', alt: 'Cocina' },
  author: 'Chef',
  content: '<p>Contenido</p>',
};

const postD = {
  slug: 'explorando-saturno',
  title: 'Explorando Saturno',
  tags: 'space, saturn',
  excerpt: 'Saturno y sus anillos.',
  publishedAt: '2024-04-01',
  coverImage: { src: '/img/saturno.jpg', alt: 'Saturno' },
  author: 'Artemis',
  content: '<p>Contenido</p>',
};

const postE = {
  slug: 'nebulosas',
  title: 'Nebulosas del universo',
  tags: 'space, nebula',
  excerpt: 'Nubes de gas.',
  publishedAt: '2024-05-01',
  coverImage: { src: '/img/nebulosa.jpg', alt: 'Nebulosa' },
  author: 'Artemis',
  content: '<p>Contenido</p>',
};

const allPosts = [postA, postB, postC, postD, postE];

// ─── Tests: getFirstTag ───────────────────────────────────────────────────────

describe('getFirstTag', () => {
  it('devuelve el primer tag de una cadena con varios tags', () => {
    expect(getFirstTag('space, science, nasa')).toBe('space');
  });

  it('normaliza a minúsculas', () => {
    expect(getFirstTag('SPACE, Science')).toBe('space');
  });

  it('elimina espacios en blanco alrededor del tag', () => {
    expect(getFirstTag('  space  , moon')).toBe('space');
  });

  it('funciona con un solo tag', () => {
    expect(getFirstTag('food')).toBe('food');
  });

  it('funciona cuando tags es un array (lo convierte a string)', () => {
    expect(getFirstTag(['space', 'moon'])).toBe('space');
  });

  it('devuelve string vacío si tags está vacío', () => {
    expect(getFirstTag('')).toBe('');
  });
});

// ─── Tests: getRelatedPosts ───────────────────────────────────────────────────

describe('getRelatedPosts', () => {
  it('devuelve posts que comparten el primer tag', () => {
    const related = getRelatedPosts(postA, allPosts);
    // postA tiene primer tag "space"; postB, postD, postE también tienen "space"
    expect(related.map(p => p.slug)).toEqual(
      expect.arrayContaining(['vida-en-la-luna', 'explorando-saturno', 'nebulosas'])
    );
  });

  it('no incluye el post actual en los relacionados', () => {
    const related = getRelatedPosts(postA, allPosts);
    const slugs = related.map(p => p.slug);
    expect(slugs).not.toContain('viaje-a-marte');
  });

  it('no incluye posts con tags completamente distintos', () => {
    const related = getRelatedPosts(postA, allPosts);
    const slugs = related.map(p => p.slug);
    expect(slugs).not.toContain('recetas-de-cocina');
  });

  it('devuelve un máximo de 3 posts relacionados', () => {
    // postA tiene 3 relacionados (postB, postD, postE), no debe devolver más
    const related = getRelatedPosts(postA, allPosts);
    expect(related.length).toBeLessThanOrEqual(3);
  });

  it('devuelve array vacío si no hay posts relacionados', () => {
    const related = getRelatedPosts(postC, allPosts);
    // postC tiene tag "food", ningún otro post lo comparte
    expect(related).toHaveLength(0);
  });

  it('devuelve array vacío si solo existe el post actual', () => {
    const related = getRelatedPosts(postA, [postA]);
    expect(related).toHaveLength(0);
  });

  it('maneja correctamente tags con espacios irregulares', () => {
    const postRaro = { ...postA, slug: 'raro', tags: '  space  ,moon' };
    const related = getRelatedPosts(postRaro, allPosts);
    expect(related.length).toBeGreaterThan(0);
  });
});