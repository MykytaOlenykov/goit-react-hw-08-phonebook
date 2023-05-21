import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useAddContactMutation } from 'redux/contacts/slice';
import { ButtonLoader } from 'components/Loaders';
import { ErrorMessage } from 'components/ErrorMessage';
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

export const ContactForm = ({ contacts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const [addContact, { isLoading: isAdding, isError, error }] =
    useAddContactMutation();

  const onSubmit = async ({ name, number }) => {
    if (contactValidationByName(name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    await addContact({ name, number });
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

      <S.Button type="submit" disabled={isAdding}>
        {isAdding && <ButtonLoader />} Add contact
      </S.Button>

      {isError && <ErrorMessage errorText={`Error: ${error.status}`} />}
    </S.ContactForm>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
