/** @jsxImportSource theme-ui */
import { memo, useCallback } from 'react';
import { Button, Flex, Grid, Spinner, Text } from 'theme-ui';
import { SwapVert, Refresh } from 'emotion-icons/material';

import { useAppDispatch, useAppSelector } from '~/hooks/useTypedRedux';
import {
  fetchAndUpdateBaseCurrency,
  fetchCurrentCurrencyRates,
  selectCurrentExchangeRate,
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
  const rate = useAppSelector(selectCurrentExchangeRate);
  const loading = useAppSelector(selectIsDataLoading);

  const { base, converted } = exchange;

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
      <Flex
        sx={{
          py: 5,
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': { height: 48, width: 48 },
        }}
      >
        <Button title="swap" disabled={loading} onClick={handleSwitch}>
          <SwapVert />
          <Text>SWITCH</Text>
        </Button>
        <Spinner
          sx={{ visibility: loading ? 'initial' : 'hidden', mx: 5 }}
          size={48}
          strokeWidth={4}
        />
        <Button title="update" disabled={loading} onClick={handleUpdate}>
          <Refresh />
          <Text>REFRESH</Text>
        </Button>
      </Flex>
      <Unit
        amount={converted.amount}
        currency={converted.currency}
        onCurrencyChange={handleConvertedCurrencyChange}
      />
      <Text>{`1 ${base.currency} = ${rate} ${converted.currency}`}</Text>
    </Grid>
  );
});

Converter.displayName = 'Converter';
