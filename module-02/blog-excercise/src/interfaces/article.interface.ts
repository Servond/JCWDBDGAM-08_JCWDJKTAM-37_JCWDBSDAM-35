export interface IArticle {
  title: string;
  slug: string;
  content: string;
  description: string;
  image_path: string;
  user_id?: string;
}

export interface ICreateArticle {
  title: string;
  content: string;
  description: string;
  image_path: string;
}
