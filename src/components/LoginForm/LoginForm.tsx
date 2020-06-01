import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
type LoginFormProps = {
  onSubmit: (data: any) => void;
};

function LoginForm({ onSubmit }: LoginFormProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input name="email" type="email" ref={register({ required: true })} />
      </div>
      <div>
        <input
          name="password"
          type="password"
          ref={register({ required: true })}
        />
      </div>
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
