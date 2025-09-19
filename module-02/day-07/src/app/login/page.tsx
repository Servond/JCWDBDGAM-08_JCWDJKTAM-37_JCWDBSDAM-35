"use client";

import { Formik, Form, FormikProps } from "formik";
import axios from "axios";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const login = async (values: ILogin) => {
    try {
      let isExist: boolean = false;
      const { data }: { data: ILogin[] } = await axios.get(
        "https://evidentbeginner-us.backendless.app/api/data/user"
      );

      for (const user of data) {
        if (user.email === values.email && user.password === values.password) {
          isExist = true;
          break;
        }
      }

      if (isExist) {
        alert("Login success");
      } else {
        throw new Error("User not found");
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[80px] gap-[40px]">
      <h1 className="font-bold text-4xl">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: ILogin) => {
          login(values);
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
