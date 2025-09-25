"use client";

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

import { fetchAll } from "@/services/blog/blog.service";

import BlogCard from "./components/blogCard";

import { IArticle } from "@/interfaces/article.interface";

export default function BlogPreviewSection() {
  const [articles, setArticles] = useState<IArticle[]>([]);

  const { enqueueSnackbar } = useSnackbar();

  const fetchArticles = async () => {
    try {
      const articles = await fetchAll();

      setArticles(articles);
    } catch (err) {
      if (err instanceof Error) {
        enqueueSnackbar(err.message, { variant: "error" });
      } else {
        enqueueSnackbar("Something went wrong", { variant: "error" });
        console.log("Unknown Error", err);
      }
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="items-center grid grid-cols-3 gap-6">
      {articles.length > 0 &&
        articles.map((article) => (
          <BlogCard
            key={article.slug}
            title={article.title}
            slug={article.slug}
            content={article.content}
            description={article.description}
            image_path={article.image_path}
          />
        ))}
    </div>
  );
}
