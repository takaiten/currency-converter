import { memo } from 'react';
import { Heading } from 'theme-ui';

export const Header = memo(() => {
  return <Heading>Currency Converter</Heading>;
});

Header.displayName = 'Header';
