/** @jsxImportSource theme-ui */
import { memo } from 'react';
import { Divider, Heading, Spinner } from 'theme-ui';

import { selectIsDataLoading } from '~/app/slice';
import { useAppSelector } from '~/hooks';

export const Header = memo(() => {
  const loading = useAppSelector(selectIsDataLoading);

  return (
    <header
      sx={{
        variant: 'layout.header',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
        width: '100%',
        px: 4,
        py: 3,
      }}
    >
      <Heading sx={{ p: 0 }}>Currency Converter</Heading>
      {loading && <Spinner variant="styles.spinner" size={48} strokeWidth={5} />}
    </header>
  );
});

Header.displayName = 'Header';
