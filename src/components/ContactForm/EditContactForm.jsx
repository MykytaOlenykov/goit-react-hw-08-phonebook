import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader';
import { validatePattern, errorMessage } from 'constants';
import * as S from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError } from 'redux/contacts/selectors';
import { clearError } from 'redux/contacts/slice';
import { updateContact } from 'redux/contacts/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(255)
    .matches(validatePattern.name, errorMessage.name),
  number: yup
    .string()
    .max(20)
    .matches(validatePattern.number, errorMessage.number),
});

const initialValues = {
  name: '',
  number: '',
};

export const EditContactForm = ({ id, name: oldName, number: oldNumber }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(
        'Something went wrong while updating the contact, please try again later.'
      );
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const onSubmit = async ({ name, number }) => {
    setIsUpdating(true);

    const normalizedName = name.trim();

    let data = {};

    if (normalizedName) {
      if (contactValidationName(normalizedName)) {
        return;
      }
      data.name = normalizedName;
    }

    if (number) {
      data.number = number;
    }

    await dispatch(updateContact({ id, data }));

    reset();
    setIsUpdating(false);
  };

  const contactValidationName = newName => {
    if (contacts.some(({ name }) => name === newName)) {
      toast.error(`${newName} is already in contacts.`);
      return true;
    }

    return false;
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
        <S.TextLabel>Current name: {oldName}</S.TextLabel>
        <S.Input {...register('name')} type="text" placeholder="New name" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Current number: {oldNumber}</S.TextLabel>
        <S.Input
          {...register('number')}
          type="tel"
          placeholder="New phone number"
        />
        {errors.number && <S.ErrorText>{errors.number?.message}</S.ErrorText>}
      </S.Label>

      <S.Button type="submit" disabled={isUpdating}>
        {isUpdating ? (
          <Loader width="15" height="15" color="#fff" />
        ) : (
          'Edit contact'
        )}
      </S.Button>
    </S.ContactForm>
  );
};

EditContactForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
