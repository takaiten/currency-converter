import { CURRENCY_LIST } from '~/const/currencyList';

export type CurrencyCode = keyof typeof CURRENCY_LIST;

export interface CurrencyData {
  code: CurrencyCode;
  name: string;
  symbol: string;
}

export interface ExchangeRate {
  date: string;
  base: CurrencyCode;
  rates: Partial<Record<CurrencyCode, number>>;
}
