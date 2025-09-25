"use client";

import { useEffect } from "react";
import { Formik, Form, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";

import useAuthStore from "@/stores/authStore";

import { create } from "@/services/blog/blog.service";

import { ICreateArticle } from "@/interfaces/article.interface";
import ArticleSchema from "./schema";

export default function ArticleView() {
  const { user_id, isLogin } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const initialValues = {
    title: "",
    content: "",
    description: "",
    image_path: "",
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin]);

  return (
    <div className="flex flex-col gap-12 items-center mt-20">
      <h1 className="text-4xl">Create Article Page</h1>
      <Formik<ICreateArticle>
        initialValues={initialValues}
        validationSchema={ArticleSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const slug = generateSlug(values.title);
            await create({ ...values, slug, user_id });

            enqueueSnackbar("Create Article Success", { variant: "success" });

            resetForm();
          } catch (err) {
            if (err instanceof Error) {
              enqueueSnackbar(err.message, { variant: "error" });
            } else {
              console.log(err);
              enqueueSnackbar("Something went wrong", { variant: "error" });
            }
          }
        }}
      >
        {(props: FormikProps<ICreateArticle>) => (
          <Form className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="title"
                name="title"
                value={props.values.title}
                onChange={props.handleChange}
              />
              {props.touched.title && props.errors.title && (
                <span className="text-xs text-red-500">
                  *{props.errors.title}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="description"
                name="description"
                value={props.values.description}
                onChange={props.handleChange}
              />
              {props.touched.description && props.errors.description && (
                <span className="text-xs text-red-500">
                  *{props.errors.description}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Image Path</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="image_path"
                name="image_path"
                value={props.values.image_path}
                onChange={props.handleChange}
              />
              {props.touched.image_path && props.errors.image_path && (
                <span className="text-xs text-red-500">
                  *{props.errors.image_path}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Content</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="content"
                name="content"
                value={props.values.content}
                onChange={props.handleChange}
              />
              {props.touched.content && props.errors.content && (
                <span className="text-xs text-red-500">
                  *{props.errors.content}
                </span>
              )}
            </div>
            <button
              className="border border-black rounded-md w-60 p-3 hover:bg-gray-300 mt-10"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
