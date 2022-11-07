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
    bigIcon: {
      width: 'auto',
      height: 'auto',
      fontSize: 72,
      '&:hover': {
        opacity: 0.9,
      },
      '&:active': {
        transform: 'translateY(5px)',
        opacity: 0.6,
      },
      '&:disabled': {
        filter: 'blur(3px) sepia(40%)',
      },
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
