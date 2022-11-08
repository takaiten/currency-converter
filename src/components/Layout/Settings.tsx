/** @jsxImportSource theme-ui */
import { memo, useCallback, useState } from 'react';
import { Heading, IconButton } from 'theme-ui';

import { ArrowUpward, ArrowDownward } from 'emotion-icons/material';

import { CurrencyOverride } from './CurrencyOverride';

export const Settings = memo(() => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return (
    <div
      sx={{
        width: '100%',
        zIndex: 10,
      }}
    >
      <div
        sx={{
          variant: 'layout.settings',
          transition: '0.333s',
          height: open ? '75vh' : '0px',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Heading as="h2" sx={{ px: 2, py: 3 }}>
          Settings
        </Heading>
        <hr sx={{ variant: 'styles.divider' }} />
        <div sx={{ p: 2 }}>
          <CurrencyOverride />
        </div>
        <div
          sx={{
            variant: 'layout.settings',
            zIndex: -1,
            position: 'absolute',
            top: -80,
            right: 0,
            left: 'auto',
            width: 80,
            height: 80,
            borderRadius: '50%',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            filter: 'drop-shadow(0px 2px 4px black)',
            willChange: 'filter',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton sx={{ height: 64, width: 64 }} onClick={toggleOpen}>
            {open ? <ArrowDownward /> : <ArrowUpward />}
          </IconButton>
        </div>
      </div>
    </div>
  );
});

Settings.displayName = 'Settings';
