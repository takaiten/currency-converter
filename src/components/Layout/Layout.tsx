/** @jsxImportSource theme-ui */
import { memo, ReactNode } from 'react';
import { Divider } from 'theme-ui';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = memo<{ children: ReactNode }>(({ children }) => {
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
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          variant: 'layout.main',
        }}
      >
        <div
          sx={{
            width: '100%',
            maxWidth: 768,
            px: 3,
            variant: 'layout.container',
          }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';
