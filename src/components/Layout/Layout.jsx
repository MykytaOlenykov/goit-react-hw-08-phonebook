import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar';
import * as S from './Layout.styled';

export const Layout = () => (
  <div style={{ padding: '0 20px' }}>
    <S.Container>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>

      <Toaster position="top-center" reverseOrder={false} />
    </S.Container>
  </div>
);
