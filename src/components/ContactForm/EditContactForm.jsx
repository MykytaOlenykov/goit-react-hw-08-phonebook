import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  useUpdateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/slice';
import { BtnLoader } from 'components/BtnLoader';
import { validatePattern, errorMessage } from 'constants';
import { userNameNormalization } from 'utils';
import * as S from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const EditContactForm = ({ id, name: oldName, number: oldNumber }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
  });
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const contactValidationName = newName => {
    if (newName === oldName) {
      toast.error('You entered the old name.');
      return true;
    }

    if (contacts.some(({ name }) => name === newName)) {
      toast.error(`${newName} is already in contacts.`);
      return true;
    }

    return false;
  };

  const contactValidationNumber = newNumber => {
    if (newNumber === oldNumber) {
      toast.error('You entered the old phone number.');
      return true;
    }

    return false;
  };

  const onSubmit = async ({ name, number }) => {
    const normalizedName = userNameNormalization(name);

    let data = {};

    if (normalizedName) {
      if (contactValidationName(normalizedName)) {
        return;
      }
      data.name = normalizedName;
    }

    if (number) {
      if (contactValidationNumber(number)) {
        return;
      }
      data.number = number;
    }

    await updateContact({ id, data });

    reset();
  };

  return (
    <S.ContactForm
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Label>
        <S.TextLabel>Current name: {oldName}</S.TextLabel>
        <S.Input
          {...register('name')}
          type="text"
          pattern={validatePattern.name}
          title={errorMessage.name}
          placeholder="New name"
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>Current number: {oldNumber}</S.TextLabel>
        <S.Input
          {...register('number')}
          type="tel"
          pattern={validatePattern.number}
          title={errorMessage.number}
          placeholder="New phone number"
        />
      </S.Label>

      <S.Button type="submit" disabled={isUpdating}>
        {isUpdating ? (
          <BtnLoader width="15" height="15" color="#fff" />
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
