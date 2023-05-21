import { useForm } from 'react-hook-form';
import { userNameNormalization } from 'utils';
import * as S from './RegisterForm.styled';

const validatePattern = {
  name: "^s*[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]*)*s*$",
  password: '^(?=.*[A-Z])(?=.*[a-z])(?=.*d)[A-Za-zd]{8,}$',
};

const errorMessage = {
  name: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  email:
    'Please enter a valid email address. Only alphanumeric characters, underscores, periods, hyphens, and the @ symbol are allowed.',
  password:
    'Please enter a password that is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, and one digit.',
};

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
    console.log(1);
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
          pattern={validatePattern.password}
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
