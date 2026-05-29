export interface CoverImage {
  src: string;
  alt: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  tags: string;
  coverImage: CoverImage;
  readingTime: number;
}
