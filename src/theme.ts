import { merge } from 'theme-ui';
import { roboto } from '@theme-ui/presets';

const colors = {
  flame: {
    text: '#252422',
    background: '#fffcf2',
    primary: '#eb5e28',
    secondary: '#403d39',
    muted: '#ccc5b9',
  },
  liver: {
    text: '#283d3b',
    background: '#fffcf2',
    primary: '#772e25',
    secondary: '#c44536',
    accent: '#197278',
    muted: '#edddd4',
    disabled: '#c2c2c2',
  },
};

export default merge(roboto, {
  colors: colors.liver,
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
      bg: 'muted',
    },
  },
  layout: {
    header: {
      color: 'white',
      bg: 'primary',
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
      bg: 'accent',
    },
  },
});
