export interface Post {
  id: string;
  title: string;
  slug: string;
  html: string;
  markdown: string;
  excerpt: string;
  feature_image: string;
  featured: boolean;
  page: boolean;
  status: string;
  language: string;
  visibility: string;
  meta_title: string;
  meta_description: string;
  author_id: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  published_at: string;
  published_by: string;
}