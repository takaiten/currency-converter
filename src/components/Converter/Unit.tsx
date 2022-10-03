/** @jsxImportSource theme-ui */
import { ChangeEvent, memo, useCallback } from 'react';
import { Input } from 'theme-ui';

import { CurrencySelect } from './CurrencySelect';

export interface IUnit {
  amount: number;
  onAmountChange?: (amount: string) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  loading?: boolean;
}

export const Unit = memo<IUnit>(
  ({ amount, onAmountChange, currency, onCurrencyChange, loading }) => {
    const handleAmountChange = useCallback(
      ({ target }: ChangeEvent<HTMLInputElement>) => void onAmountChange?.(target.value),
      [onAmountChange],
    );

    const handleCurrencyChange = useCallback(
      ({ target }: ChangeEvent<HTMLSelectElement>) => void onCurrencyChange(target.value),
      [onCurrencyChange],
    );

    return (
      <div sx={{ display: 'flex', flexDirection: 'row' }}>
        <Input
          type="number"
          disabled={loading}
          value={amount}
          onChange={handleAmountChange}
          readOnly={!onAmountChange}
        />
        <CurrencySelect disabled={loading} value={currency} onChange={handleCurrencyChange} />
      </div>
    );
  },
);

Unit.displayName = 'Unit';
