import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader';
import { validatePattern, errorMessage } from 'constants';
import * as S from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsAdding } from 'redux/contacts/selectors';
import { clearError } from 'redux/contacts/slice';
import { addContact } from 'redux/contacts/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(255)
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  number: yup
    .string()
    .max(20)
    .matches(validatePattern.number, errorMessage.number)
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const AddContactForm = ({ contacts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const isAdding = useSelector(selectIsAdding);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(
        'Something went wrong while adding a contact, please try again later.'
      );
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const onSubmit = async ({ name, number }) => {
    const normalizedName = name.trim();

    if (contactValidationByName(normalizedName)) {
      toast.error(`${normalizedName} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: normalizedName, number }));

    reset();
  };

  const contactValidationByName = newName => {
    return contacts.some(({ name }) => name === newName);
  };

  return (
    <S.ContactForm
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Label>
        <S.TextLabel>Name</S.TextLabel>
        <S.Input {...register('name')} type="text" placeholder="Full name" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Number</S.TextLabel>
        <S.Input
          {...register('number')}
          type="tel"
          placeholder="Phone number"
        />
        {errors.number && <S.ErrorText>{errors.number?.message}</S.ErrorText>}
      </S.Label>

      <S.Button type="submit" disabled={isAdding}>
        {isAdding ? (
          <Loader width="15" height="15" color="#fff" />
        ) : (
          'Add contact'
        )}
      </S.Button>
    </S.ContactForm>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
