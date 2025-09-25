import axios from "axios";

import { IArticle } from "@/interfaces/article.interface";

export async function fetchAll(): Promise<IArticle[]> {
  try {
    const { data } = await axios.get(
      "https://evidentbeginner-us.backendless.app/api/data/article?pageSize=30"
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function create(params: IArticle) {
  try {
    const { data } = await axios.post(
      "https://evidentbeginner-us.backendless.app/api/data/article",
      { ...params }
    );

    return data;
  } catch (err) {
    throw err;
  }
}
