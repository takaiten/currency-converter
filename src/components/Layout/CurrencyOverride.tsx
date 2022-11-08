/** @jsxImportSource theme-ui */
import { memo } from 'react';
import { Heading, Input, Switch } from 'theme-ui';
import { useAppSelector } from '~/hooks';

export const CurrencyOverride = memo(() => {
  const { base, converted } = useAppSelector((state) => state.converter.exchange);
  const override = useAppSelector((state) => state.converter.override);

  const hasOverride = override[base.currency] != null;

  return (
    <div>
      <Switch label="Currency exchange rate override?" />
      <Heading as="h3" sx={{ py: 3 }}>
        Currency exchange rate override? {hasOverride ? 'Yes' : 'No'}
      </Heading>
      <div>
        <Input disabled value={`1 ${base.currency}`} />
        =
        <Input disabled value={`1 ${base.currency}`} />
      </div>
    </div>
  );
});

CurrencyOverride.displayName = 'CurrencyOverride';
