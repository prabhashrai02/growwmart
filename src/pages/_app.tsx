import Navbar from '@/Common/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { store } from '../Store/store';
import { Provider } from 'react-redux';
import Footer from '@/Common/Footer';

//@ts-ignore
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
