import type { AppProps } from 'next/app'

import GlobalStyles from 'common/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
