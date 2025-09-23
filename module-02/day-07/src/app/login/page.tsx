"use client";

import { Formik, Form, FormikProps } from "formik";
// import { useAuth } from "@/context/authContext";
import { useAuthZustand } from "@/stores/useAuthZustand";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  // const { login } = useAuth(); untuk usecontext
  const { login } = useAuthZustand();

  return (
    <div className="flex flex-col items-center justify-center mt-[80px] gap-[40px]">
      <h1 className="font-bold text-4xl">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: ILogin) => {
          login(values.email, values.password);
        }}
      >
        {(props: FormikProps<ILogin>) => {
          const { values, handleChange } = props;

          return (
            <Form>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email:</label>
                <input
                  className="border border-black rounded-s-sm"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password:</label>
                <input
                  className="border border-black rounded-s-sm"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
