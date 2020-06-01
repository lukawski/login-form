import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TextField, FormGroup, Button, FormControl } from "@material-ui/core";

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormGroup>
        <TextField
          required
          name="email"
          type="email"
          label="Email"
          margin="dense"
          inputRef={register()}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          required
          name="password"
          type="password"
          label="Password"
          margin="dense"
          inputRef={register()}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <FormControl margin="normal">
          <Button
            variant="contained"
            type="submit"
            size="small"
            color="primary"
            disabled={!!(errors.email || errors.password)}
          >
            Sign In
          </Button>
        </FormControl>
      </FormGroup>
    </form>
  );
}

export default LoginForm;
