import Head from 'next/head';
import { Converter } from '~/components/Converter';
import { Layout } from '~/components/Layout';

export default function AppCore({ content }) {
  return (
    <Layout>
      <Head>
        <title>Currency Converter</title>
      </Head>
      <Converter />
    </Layout>
  );
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
