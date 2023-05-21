import { useForm } from 'react-hook-form';
import { validatePattern, errorMessage } from 'constants';
import * as S from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password }) => {
    console.log(1);
    // if (validationFormData(data)) {
    //   toast.error(`Enter valid values.`);
    //   return;
    // }

    // reset();
  };

  //   const validationFormData = newData => {};

  return (
    <S.LoginForm
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Title>Enter your email and password to sign in</S.Title>

      <S.Label>
        <S.TextLabel>Email</S.TextLabel>
        <S.Input
          {...register('email')}
          type="email"
          required
          placeholder="Your email address"
        />
        {errors.email && <S.ErrorText>{errors.email?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Password</S.TextLabel>
        <S.Input
          {...register('password')}
          type="password"
          minlength="8"
          title={errorMessage.password}
          required
          placeholder="Your password"
        />
      </S.Label>

      <S.Button type="submit">Sing up</S.Button>

      <S.Text>
        Don't have an account?
        <S.SignInLink to="/register">Sign up</S.SignInLink>
      </S.Text>
    </S.LoginForm>
  );
};
