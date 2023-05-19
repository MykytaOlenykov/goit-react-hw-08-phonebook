import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { GlobalStyle } from 'components/GlobalStyle';
import * as S from './App.styled';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <S.Container>
      <GlobalStyle />

      <S.PrimaryTitle>Phonebook</S.PrimaryTitle>
      <ContactForm />

      <S.SecondaryTitle>Contacts</S.SecondaryTitle>
      <Filter />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList contacts={items} />
    </S.Container>
  );
};
