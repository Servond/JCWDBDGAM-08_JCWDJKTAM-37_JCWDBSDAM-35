"use client";

import { Formik, Form, FormikProps } from "formik";
import axios from "axios";

interface IRegister {
  email: string;
  password: string;
}

export default function Register() {
  const register = async (values: IRegister) => {
    try {
      const { data } = await axios.post(
        "https://evidentbeginner-us.backendless.app/api/data/user",
        {
          ...values,
        }
      );
      console.log(data);

      alert("success");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-[40px] justify-center mt-[80px]">
      <h1 className="text-4xl font-bold">Register</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: IRegister) => {
          register(values);
        }}
      >
        {(props: FormikProps<IRegister>) => {
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
