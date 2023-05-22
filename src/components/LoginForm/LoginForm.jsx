import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader';
import { errorMessage } from 'constants';
import * as S from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
  });
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

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

      <S.Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader width="15" height="15" color="#fff" /> : 'Sing in'}
      </S.Button>

      <S.Text>
        Don't have an account?
        <S.SignInLink to="/register">Sign up</S.SignInLink>
      </S.Text>
    </S.LoginForm>
  );
};
