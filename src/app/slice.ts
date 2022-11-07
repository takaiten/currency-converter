import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { CurrencyCode, ExchangeRate } from '~/interfaces';
import type { AppState, AppThunk } from './store';

import { fetchExchangeRates } from './exchangeAPI';
import { round } from '~/helpers';

export interface ConverterState {
  exchange: {
    base: {
      currency: CurrencyCode;
      amount: number;
    };
    converted: {
      currency: CurrencyCode;
      amount: number;
    };
  };
  rates: Partial<Record<CurrencyCode, Partial<Record<CurrencyCode, number>>>>;
  override: Partial<Record<CurrencyCode, ExchangeRate>>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ConverterState = {
  exchange: {
    base: {
      currency: 'USD',
      amount: 1,
    },
    converted: {
      currency: 'RUB',
      amount: 1,
    },
  },
  rates: {
    USD: {
      RUB: 58,
    },
  },
  override: {},
  status: 'idle',
};

export const getExchangeRates = createAsyncThunk(
  '@@converter/fetchExchangeRates',
  async (currency: string) => {
    return await fetchExchangeRates(currency);
  },
);

const getBaseToConvertedRate = ({ exchange, rates }: ConverterState): number => {
  return rates[exchange.base.currency]?.[exchange.converted.currency] || 0;
};

const recalculateAmount = (state: ConverterState) => {
  return round(state.exchange.base.amount * getBaseToConvertedRate(state), 3);
};

export const converterSlice = createSlice({
  name: '@@converter',
  initialState,
  reducers: {
    updateBaseCurrency: (state, { payload: currency }: PayloadAction<CurrencyCode>) => {
      state.exchange.base.currency = currency;
      state.exchange.converted.amount = recalculateAmount(state);
    },
    updateBaseAmount: (state, { payload: newAmount }: PayloadAction<string>) => {
      state.exchange.base.amount = +newAmount;
      state.exchange.converted.amount = recalculateAmount(state);
    },
    updateConvertedCurrency: (state, { payload: currency }: PayloadAction<string>) => {
      state.exchange.converted.currency = currency as CurrencyCode;
      state.exchange.converted.amount = recalculateAmount(state);
    },
    recalculate: (state) => {
      state.exchange.converted.amount = recalculateAmount(state);
    },
    swapCurrencies: (state) => {
      const temp = state.exchange.base;
      state.exchange.base = state.exchange.converted;
      state.exchange.converted = temp;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExchangeRates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getExchangeRates.fulfilled, (state, { payload: data }) => {
        state.rates[data.base_code] = data.rates;
        state.status = 'idle';
      })
      .addCase(getExchangeRates.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export const {
  updateBaseAmount,
  updateBaseCurrency,
  updateConvertedCurrency,
  swapCurrencies,
  recalculate,
} = converterSlice.actions;

// Selectors
export const selectConverterState = (state: AppState) => state.converter;
export const selectIsDataLoading = (state: AppState) => state.converter.status === 'loading';

// Thunks
export const fetchAndUpdateBaseCurrency =
  (currency: string): AppThunk =>
  async (dispatch) => {
    await dispatch(getExchangeRates(currency));
    dispatch(updateBaseCurrency(currency as CurrencyCode));
  };

export const switchAndFetchCurrency = (): AppThunk => async (dispatch, getState) => {
  const { converted } = getState().converter.exchange;
  await dispatch(getExchangeRates(converted.currency));
  dispatch(swapCurrencies());
};

export const fetchCurrentCurrencyRates = (): AppThunk => async (dispatch, getState) => {
  const { base } = getState().converter.exchange;
  await dispatch(getExchangeRates(base.currency));
  dispatch(recalculate());
};

export default converterSlice.reducer;
