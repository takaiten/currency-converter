import { App } from '~/components/App';

export default function AppCore({ content }) {
  return <App />;
}

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Currency Converter',
      },
    },
  };
}
