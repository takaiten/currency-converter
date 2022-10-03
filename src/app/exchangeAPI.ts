export interface ExchangeRatesResponse {
  result: 'success';
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  time_eol_unix: 0;
  base_code: string;
  rates: Record<string, number>;
}

export async function fetchExchangeRates(currency: string): Promise<ExchangeRatesResponse> {
  const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
  const result = await response.json();

  return result;
}
