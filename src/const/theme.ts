import { merge } from 'theme-ui';
import { roboto } from '@theme-ui/presets';

export default merge(roboto, {
  colors: {
    text: '#fffcf2',
    background: '#252422',
    primary: '#eb5e28',
    secondary: '#403d39',
    muted: '#ccc5b9',
  },
  styles: {
    spinner: {
      color: 'muted',
    },
    divider: {
      borderColor: 'muted',
      margin: 0,
    },
  },
  buttons: {
    amount: {
      bg: 'secondary',
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
    primary: {
      '&:hover': {
        opacity: 0.85,
      },
      '&:active': {
        opacity: 0.65,
      },
      '&:disabled': {
        bg: 'disabled',
        filter: 'sepia(50%) contrast(50%)',
        opacity: '1 !important',
      },
    },
    icon: {
      color: 'text',
      '& svg': {
        width: '100%',
        height: '100%',
      },
      '&:hover': {
        opacity: 0.85,
      },
      '&:active': {
        opacity: 0.65,
      },
    },
  },
  forms: {
    input: {
      fontSize: '1.25em',
      height: 56,
    },
    select: {
      fontSize: '1.25em',
      height: 56,
      background: 'none',
    },
  },
  layout: {
    header: {
      color: 'primary',
      bg: 'secondary',
    },
    main: {
      bg: 'muted',
    },
    footer: {
      color: 'muted',
      bg: 'secondary',
    },
    settings: {
      color: 'muted',
    },
  },
});
