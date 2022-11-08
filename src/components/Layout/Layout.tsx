/** @jsxImportSource theme-ui */
import { memo } from 'react';

import { Settings } from './Settings';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export const Layout = memo<{ children: React.ReactNode }>(({ children }) => {
  return (
    <div
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        variant: 'layout.root',
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Settings />
      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';
