import * as Yup from "yup";

const ArticleSchema = Yup.object({
  title: Yup.string().required("Title cannot be empty"),
  content: Yup.string().required("Content cannot be empty"),
  description: Yup.string().required("Description cannot be empty"),
  image_path: Yup.string().required("Image path cannot be empty"),
});

export default ArticleSchema;
