import { Box, Select, SelectProps } from 'theme-ui';

import type { CurrencyCode } from '~/interfaces/ICurrency';
import { CURRENCY_CODES } from '~/const/currencyList';

interface CurrencySelectProps {
  currencyCodes?: CurrencyCode[];
}

export const CurrencySelect = ({
  currencyCodes = CURRENCY_CODES,
  ...props
}: CurrencySelectProps & SelectProps) => {
  return (
    <Box sx={{ minWidth: 'fit-content' }}>
      <Select {...props}>
        {currencyCodes.map((code) => (
          <option key={code}>{code}</option>
        ))}
      </Select>
    </Box>
  );
};
