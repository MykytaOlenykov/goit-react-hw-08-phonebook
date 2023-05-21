import { useForm } from 'react-hook-form';
import { userNameNormalization } from 'utils';
import { validatePattern, errorMessage } from 'constants';
import * as S from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = ({ name, email, password }) => {
    const normalizedName = userNameNormalization(name);
    console.log({ name, email, password });
    // if (validationFormData(data)) {
    //   toast.error(`Enter valid values.`);
    //   return;
    // }

    // reset();
  };

  //   const validationFormData = newData => {};

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
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

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
        Already have an account?
        <S.SignInLink to="/login">Sign in</S.SignInLink>
      </S.Text>
    </S.RegisterForm>
  );
};