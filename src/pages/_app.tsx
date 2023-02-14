import { Provider } from 'react-redux';
import { Router } from 'next/router';
import type { AppProps } from 'next/app';

import { store } from '../Store/store';

//@ts-ignore
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Footer from '@/Common/Footer';
import Navbar from '@/Common/Navbar';

import '@/styles/globals.css'

NProgress.configure({ showSpinner: false })
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
