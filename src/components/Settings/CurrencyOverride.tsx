/** @jsxImportSource theme-ui */
import { memo, useCallback } from 'react';
import { Flex, Input, Switch } from 'theme-ui';
import { SwapHoriz } from 'emotion-icons/material';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { toggleCurrencyRateOverride, updateCurrencyRateOverride } from '~/app/slice';

export const CurrencyOverride = memo(() => {
  const dispatch = useAppDispatch();

  const { base, converted } = useAppSelector((state) => state.converter.exchange);
  const override = useAppSelector((state) => state.converter.override);
  const rates = useAppSelector((state) => state.converter.rates);

  const handleOverrideToggle = useCallback(() => {
    dispatch(toggleCurrencyRateOverride());
  }, [dispatch]);
  const handleOverrideRateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateCurrencyRateOverride(event.target.value));
    },
    [dispatch],
  );

  return (
    <div>
      <div sx={{ py: 3 }}>
        <Switch onChange={handleOverrideToggle} label="Currency exchange rate override?" />
      </div>
      <Flex>
        <Input disabled value={1} />
        <Input sx={{ width: 200 }} disabled value={base.currency} />
        <SwapHoriz sx={{ minWidth: 64, height: 64 }} />
        <Input
          type="number"
          onChange={handleOverrideRateChange}
          value={
            override[base.currency]?.[converted.currency] ??
            rates[base.currency]?.[converted.currency] ??
            0
          }
        />
        <Input sx={{ width: 200 }} disabled value={converted.currency} />
      </Flex>
    </div>
  );
});

CurrencyOverride.displayName = 'CurrencyOverride';
