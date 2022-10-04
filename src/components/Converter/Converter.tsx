/** @jsxImportSource theme-ui */
import { memo, useCallback } from 'react';
import { Divider, Grid } from 'theme-ui';

import { useAppDispatch, useAppSelector } from '~/hooks/useTypedRedux';
import {
  fetchAndUpdateBaseCurrency,
  selectIsDataLoading,
  updateBaseAmount,
  updateConvertedCurrency,
} from '~/app/slice';

import { Unit } from './Unit';

export const Converter = memo(() => {
  const dispatch = useAppDispatch();
  const { base, converted } = useAppSelector((state) => state.converter.exchange);
  const loading = useAppSelector(selectIsDataLoading);

  const handleBaseCurrencyChange = useCallback(
    (currency: string) => {
      dispatch(fetchAndUpdateBaseCurrency(currency));
    },
    [dispatch],
  );

  const handleBaseAmountChange = useCallback(
    (amount: string) => {
      dispatch(updateBaseAmount(amount));
    },
    [dispatch],
  );

  const handleConvertedCurrencyChange = useCallback(
    (currency: string) => {
      dispatch(updateConvertedCurrency(currency));
    },
    [dispatch],
  );

  return (
    <Grid gap={2} sx={{ height: '100%' }}>
      <Unit
        amount={base.amount}
        currency={base.currency}
        onAmountChange={handleBaseAmountChange}
        onCurrencyChange={handleBaseCurrencyChange}
        loading={loading}
      />
      <div sx={{ py: 5 }} />
      <Unit
        amount={converted.amount}
        currency={converted.currency}
        onCurrencyChange={handleConvertedCurrencyChange}
      />
    </Grid>
  );
});

Converter.displayName = 'Converter';
