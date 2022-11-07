import { merge } from 'theme-ui';
import { deep } from '@theme-ui/presets';

export default merge(deep, {
  styles: {
    spinner: {
      color: 'purple',
    },
  },
  buttons: {
    amount: {
      color: 'background',
      bg: 'secondary',
    },
  },
  forms: {
    input: {
      fontSize: '1.25em',
      height: 64,
    },
    select: {
      fontSize: '1.25em',
      height: 64,
    },
  },
  layout: {
    header: {
      backgroundColor: 'highlight',
    },
    footer: {
      backgroundColor: 'highlight',
    },
  },
});
