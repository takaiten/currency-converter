/** @jsxImportSource theme-ui */
import { memo } from 'react';
import { Link } from 'theme-ui';

export const Footer = memo(() => {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        width: '100%',
        px: 1,
        py: 1,
      }}
    >
      Made by <Link href="https://t.me/takaiten">takaiten</Link>, 2022
    </footer>
  );
});

Footer.displayName = 'Footer';
