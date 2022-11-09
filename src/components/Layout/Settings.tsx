/** @jsxImportSource theme-ui */
import { memo } from 'react';
import { Heading } from 'theme-ui';
import { useAppSelector } from '~/hooks';

import { CurrencyOverride } from '../Settings/CurrencyOverride';

export const Settings = memo(() => {
  const open = useAppSelector((state) => state.converter.settings.open);

  return (
    <div
      sx={{
        variant: 'layout.settings',
        transition: 'height 0.33s ease',
        height: open ? '200px' : '0px',
        overflow: 'hidden',
      }}
    >
      <Heading as="h2" sx={{ px: 2, py: 3 }}>
        Settings
      </Heading>
      <hr sx={{ variant: 'styles.divider' }} />
      <div sx={{ p: 2 }}>
        <CurrencyOverride />
      </div>
    </div>
  );
});

Settings.displayName = 'Settings';
