"use client";

import { Formik, Form, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";

import useAuthStore from "@/stores/authStore";

import { login } from "@/services/auth/auth.service";

import { ILogin } from "@/interfaces/auth.interface";
import LoginSchema from "./schema";

export default function LoginView() {
  const { login: loginStore } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const initialValues = { email: "", password: "" };
  return (
    <div className="flex flex-col gap-12 items-center mt-20">
      <h1 className="text-4xl">Login Page</h1>
      <Formik<ILogin>
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          try {
            const res = await login(values);

            if (res.length > 0) {
              loginStore(res[0].email, res[0].objectId);
              enqueueSnackbar("Login Success", { variant: "success" });

              router.push("/");
            } else {
              throw new Error("User not found");
            }
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
        {(props: FormikProps<ILogin>) => (
          <Form className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
              />
              {props.touched.email && props.errors.email && (
                <span className="text-xs text-red-500">
                  *{props.errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="password"
                name="password"
                value={props.values.password}
                onChange={props.handleChange}
              />
              {props.touched.password && props.errors.password && (
                <span className="text-xs text-red-500">
                  *{props.errors.password}
                </span>
              )}
            </div>
            <button
              className="border border-black rounded-md w-60 p-3 hover:bg-gray-300 mt-10"
              type="submit"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
