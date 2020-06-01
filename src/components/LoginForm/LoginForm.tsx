import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type UserLoginData = {
  email: string;
  password: string;
};
type LoginFormProps = {
  onSubmit: (data: UserLoginData) => void;
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});

function LoginForm({ onSubmit }: LoginFormProps) {
  const { register, handleSubmit, errors } = useForm<UserLoginData>({
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input name="email" type="email" ref={register()} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input name="password" type="password" ref={register()} />
        <p>{errors.password?.message}</p>
      </div>
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
