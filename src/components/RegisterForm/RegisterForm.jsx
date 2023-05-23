import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { register as registerUser } from 'redux/auth/operations';
import { Loader } from 'components/Loader';
import { useAuth } from 'hooks';
import { getNormalizedName } from 'utils';
import { validatePattern, errorMessage } from 'constants';
import * as S from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
  });
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const onSubmit = ({ name, email, password }) => {
    const normalizedName = getNormalizedName(name);

    dispatch(registerUser({ name: normalizedName, email, password }));
    reset();
  };

  return (
    <S.RegisterForm
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Title>Register</S.Title>

      <S.Label>
        <S.TextLabel>Name</S.TextLabel>
        <S.Input
          {...register('name')}
          type="text"
          pattern={validatePattern.name}
          title={errorMessage.name}
          required
          placeholder="Your full name"
        />
      </S.Label>

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
        {isLoading ? <Loader width="15" height="15" color="#fff" /> : 'Sing up'}
      </S.Button>

      <S.Text>
        Already have an account?
        <S.SignInLink to="/login">Sign in</S.SignInLink>
      </S.Text>
    </S.RegisterForm>
  );
};
