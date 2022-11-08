/** @jsxImportSource theme-ui */
import { memo, useCallback, useState } from 'react';
import { Heading, IconButton } from 'theme-ui';

export const Settings = memo(() => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return (
    <div
      sx={{
        variant: 'layout.settings',
        width: '100%',
      }}
    >
      <div
        sx={{
          transition: '0.333s',
          height: open ? '75vh' : '56px',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          bg: 'gray',
        }}
      >
        <Heading as="h3" sx={{ px: 2, py: 3 }}>
          Settings
        </Heading>
        <hr sx={{ variant: 'styles.divider' }} />
        <div
          sx={{
            position: 'absolute',
            top: -32,
            right: 0,
            left: 'auto',
            width: 72,
            height: 72,
            borderRadius: '50%',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            bg: 'gray',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton variant="big" onClick={toggleOpen}>
            {open ? '↧' : '↥'}
          </IconButton>
        </div>
      </div>
    </div>
  );
});

Settings.displayName = 'Settings';
