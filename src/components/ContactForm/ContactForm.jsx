import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact } from 'redux/operations';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './ContactForm.styled';

const validatePattern = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  number:
    /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
};

const errorMessage = {
  name: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  number:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  number: yup
    .string()
    .matches(validatePattern.number, errorMessage.number)
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    if (contactValidationByName(name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const contactValidationByName = newName => {
    return contacts.some(({ name }) => name === newName);
  };

  return (
    <S.ContactForm
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Label>
        Name
        <S.Input {...register('name')} type="text" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        Number
        <S.Input {...register('number')} type="tel" />
        {errors.number && <S.ErrorText>{errors.number?.message}</S.ErrorText>}
      </S.Label>

      <S.Button type="submit" disabled={isLoading}>
        Add contact
      </S.Button>
    </S.ContactForm>
  );
};
