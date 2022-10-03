import { ThemeProvider } from 'theme-ui';
import { Provider } from 'react-redux';

import theme from '~/theme';
import store from '~/app/store';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
