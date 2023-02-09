import Navbar from '@/Common/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { store } from '../Store/store';
import { Provider } from 'react-redux';
import Footer from '@/Common/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
