import Layout from '@/components/layouts/Layout';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SEO from '../../next-seo.config';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <ToastContainer position="top-center" theme="dark" />
      </Layout>
    </QueryClientProvider>
  );
}
