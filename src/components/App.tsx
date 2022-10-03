/** @jsxImportSource theme-ui */
import { memo } from 'react';
import { Link, Spinner } from 'theme-ui';

import { selectIsDataLoading } from '~/app/slice';
import { useAppSelector } from '~/hooks/useTypedRedux';

import { Converter } from './Converter';

export const App = memo(() => {
  const loading = useAppSelector(selectIsDataLoading);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        variant: 'layout.root',
      }}
    >
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          variant: 'layout.header',
          px: 4,
          py: 2,
        }}
      >
        <h3>Currency Converter</h3>
        {loading && <Spinner />}
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main',
        }}
      >
        <div
          sx={{
            maxWidth: 768,
            mx: 'auto',
            px: 3,
            variant: 'layout.container',
          }}
        >
          <Converter />
        </div>
      </main>
      <footer
        sx={{
          width: '100%',
          variant: 'layout.footer',
        }}
      >
        Made by <Link href="https://t.me/takaiten">takaiten</Link>, 2022
      </footer>
    </div>
  );
});

App.displayName = 'App';
