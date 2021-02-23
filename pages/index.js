import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Link from 'next/link';
import Form from '../components/form';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <CssBaseline />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Form />
      </section>
    </Layout>
  );
}
