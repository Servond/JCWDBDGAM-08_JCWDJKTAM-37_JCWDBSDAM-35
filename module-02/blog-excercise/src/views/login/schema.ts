import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email cannot be empty"),
  password: Yup.string().trim().required("Password cannot be empty"),
});

export default LoginSchema;
