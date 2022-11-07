import { memo, useCallback } from 'react';
import { Button, Grid } from 'theme-ui';

interface AmountControlsProps {
  amounts?: number[];
  onAmountSelect: (amount: string) => void;
}

export const AmountControls = memo<AmountControlsProps>(({ amounts, onAmountSelect }) => {
  const handleAmountClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { amount } = (event.target as any).dataset || {};
      onAmountSelect(amount);
    },
    [onAmountSelect],
  );

  return (
    <Grid onClick={handleAmountClick} columns={amounts.length}>
      {amounts.map((amount) => (
        <Button variant="amount" key={amount} data-amount={amount}>
          {amount}
        </Button>
      ))}
    </Grid>
  );
});

AmountControls.displayName = 'AmountControls';
