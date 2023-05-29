import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ko_IE',
    url: 'https://pygmalihome.vercel.app/',
    siteName: 'PYGMALIHOME',
  },
  titleTemplate: '%s | 피그말리홈',
};

export default config;
