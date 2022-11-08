import { merge } from 'theme-ui';
import { deep } from '@theme-ui/presets';

export default merge(deep, {
  styles: {
    spinner: {
      color: 'purple',
    },
    divider: {
      margin: 0,
    },
  },
  buttons: {
    amount: {
      color: 'background',
      bg: 'secondary',
    },
    withDropShadow: {
      transition: 'filter 0.5s',
      filter: 'drop-shadow(-2px 2px 10px black)',
      '&:active': {
        filter: 'drop-shadow(0 0)',
      },
    },
    big: {
      width: 'auto',
      height: 'auto',
      fontSize: '4rem',
      '&:hover': {
        opacity: 0.9,
      },
      '&:active': {
        // transform: 'translateY(2px)',
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
      bg: 'highlight',
    },
    footer: {
      bg: 'highlight',
    },
    settings: {
      bg: 'highlight',
    },
  },
});
