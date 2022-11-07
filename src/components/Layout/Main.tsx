/** @jsxImportSource theme-ui */
import { memo } from 'react';

export const Main = memo<{ children: React.ReactNode }>(({ children }) => {
  return (
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
  );
});

Main.displayName = 'Footer';
