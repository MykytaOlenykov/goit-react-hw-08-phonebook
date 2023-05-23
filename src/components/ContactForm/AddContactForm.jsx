import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useAddContactMutation } from 'redux/contacts/slice';
import { Loader } from 'components/Loader';
import { validatePattern, errorMessage } from 'constants';
import { userNameNormalization } from 'utils';
import * as S from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const AddContactForm = ({ contacts }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
  });
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  const contactValidationByName = newName => {
    return contacts.some(({ name }) => name === newName);
  };

  const onSubmit = async ({ name, number }) => {
    const normalizedName = userNameNormalization(name);

    if (contactValidationByName(normalizedName)) {
      toast.error(`${normalizedName} is already in contacts.`);
      return;
    }

    await addContact({ name: normalizedName, number });
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
        <S.TextLabel>Name</S.TextLabel>
        <S.Input
          {...register('name')}
          type="text"
          pattern={validatePattern.name}
          title={errorMessage.name}
          placeholder="Full name"
          required
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>Number</S.TextLabel>
        <S.Input
          {...register('number')}
          type="tel"
          pattern={validatePattern.number}
          title={errorMessage.number}
          placeholder="Phone number"
          maxLength="20"
          required
        />
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
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
