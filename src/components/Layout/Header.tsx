/** @jsxImportSource theme-ui */
import { memo, useCallback } from 'react';
import { IconButton, Heading } from 'theme-ui';

import { Settings as SettingsIcon } from 'emotion-icons/material';

import { toggleSettingsDisplay } from '~/app/slice';
import { useAppDispatch } from '~/hooks';

export const Header = memo(() => {
  const dispatch = useAppDispatch();

  const toggleSettings = useCallback(() => {
    dispatch(toggleSettingsDisplay());
  }, [dispatch]);

  return (
    <header
      sx={{
        variant: 'layout.header',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        px: 2,
      }}
    >
      <Heading sx={{ py: 3 }}>Currency Converter</Heading>
      <IconButton sx={{ height: 48, width: 48 }} onClick={toggleSettings}>
        <SettingsIcon />
      </IconButton>
    </header>
  );
});

Header.displayName = 'Header';
