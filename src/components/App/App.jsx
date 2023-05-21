import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useFetchContactsQuery } from 'redux/contacts/slice';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loaders';
import { ErrorMessage } from 'components/ErrorMessage';
import { GlobalStyle } from 'components/GlobalStyle';
import * as S from './App.styled';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('pages/Home/Home'));

const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

const RegisterPage = lazy(() => import('pages/Register/Register'));

const LoginPage = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

// return (
//   <S.Container>
//     <GlobalStyle />
//

//     <S.PrimaryTitle>Phonebook</S.PrimaryTitle>

//     <ContactForm contacts={data} />

//     <S.TitleBox>
//       <S.SecondaryTitle>Contacts</S.SecondaryTitle>
//       {isFetching && <Loader />}
//     </S.TitleBox>

//     <Filter />

//     {isError && <ErrorMessage errorText={`Error: ${error.status}`} />}
//     {isSuccess && <ContactList contacts={data} />}
//   </S.Container>
// );
