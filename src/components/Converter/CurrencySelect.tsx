import { useMemo } from 'react';
import { Box, Select, SelectProps } from 'theme-ui';

import { CURRENCY_LIST } from '~/const/currencyList';
import { CurrencyData, CurrencyCode } from '~/interfaces/ICurrency';

interface CurrencySelectProps {
  currencies?: Record<CurrencyCode, CurrencyData>;
}

export const CurrencySelect = ({ currencies, ...props }: CurrencySelectProps & SelectProps) => {
  const options = useMemo(() => Object.keys(currencies ?? CURRENCY_LIST), []);

  return (
    <Box sx={{ minWidth: 'fit-content' }}>
      <Select {...props}>
        {options.map((code) => (
          <option key={code}>{code}</option>
        ))}
      </Select>
    </Box>
  );
};
