import { ThemeProvider } from 'theme-ui';
import { Provider } from 'react-redux';

import theme from '~/const/theme';
import store from '~/app/store';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
