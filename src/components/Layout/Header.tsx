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
        width: '100%',
        py: 3,
        px: 2,
      }}
    >
      <Heading sx={{ p: 0 }}>Currency Converter</Heading>
      {loading && <Spinner variant="styles.spinner" size={30} strokeWidth={4} />}
    </header>
  );
});

Header.displayName = 'Header';
