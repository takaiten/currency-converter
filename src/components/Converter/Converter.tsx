/** @jsxImportSource theme-ui */
import { memo, useCallback } from 'react';
import { Button, Grid, Text } from 'theme-ui';
import { SwapVert, Refresh } from 'emotion-icons/material';

import { useAppDispatch, useAppSelector } from '~/hooks/useTypedRedux';
import {
  fetchAndUpdateBaseCurrency,
  fetchCurrentCurrencyRates,
  selectIsDataLoading,
  switchAndFetchCurrency,
  updateBaseAmount,
  updateConvertedCurrency,
} from '~/app/slice';

import { Unit } from './Unit';
import { AmountControls } from './AmountControls';

export const Converter = memo(() => {
  const dispatch = useAppDispatch();
  const { exchange, rates } = useAppSelector((state) => state.converter);
  const { base, converted } = exchange;
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

  const handleSwitch = useCallback(() => {
    dispatch(switchAndFetchCurrency());
  }, [dispatch]);

  const handleUpdate = useCallback(() => {
    dispatch(fetchCurrentCurrencyRates());
  }, [dispatch]);

  return (
    <Grid gap={2} sx={{ height: '100%' }}>
      <Unit
        amount={base.amount}
        currency={base.currency}
        onAmountChange={handleBaseAmountChange}
        onCurrencyChange={handleBaseCurrencyChange}
        loading={loading}
      />
      <AmountControls
        amounts={[1, 100, 500, 1000, 2500, 5000]}
        onAmountSelect={handleBaseAmountChange}
      />
      <Grid columns={2} sx={{ py: 5, margin: '0 auto', '& svg': { height: 48, width: 48 } }}>
        <Button title="swap" disabled={loading} onClick={handleSwitch}>
          <SwapVert />
          <Text>SWITCH</Text>
        </Button>
        <Button title="update" disabled={loading} onClick={handleUpdate}>
          <Refresh />
          <Text>REFRESH</Text>
        </Button>
      </Grid>
      <Unit
        amount={converted.amount}
        currency={converted.currency}
        onCurrencyChange={handleConvertedCurrencyChange}
      />
      <Text>
        {`1 ${base.currency} = ${rates[base.currency][converted.currency]} ${converted.currency}`}
      </Text>
    </Grid>
  );
});

Converter.displayName = 'Converter';
