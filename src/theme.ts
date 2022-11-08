import { merge } from 'theme-ui';
import { roboto } from '@theme-ui/presets';

// console.log(roboto);

export default merge(roboto, {
  styles: {
    spinner: {
      color: 'muted',
    },
    divider: {
      margin: 0,
    },
  },
  buttons: {
    amount: {
      fontWeight: 'bold',
      px: 0,
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
      bg: 'muted',
    },
  },
  layout: {
    header: {
      color: 'muted',
      bg: 'primary',
    },
    main: {
      backgroundColor: 'muted',
    },
    settings: {
      bg: 'primary',
      color: 'muted',
    },
  },
});
