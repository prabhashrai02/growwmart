import Head from 'next/head';
import { GetServerSideProps } from 'next/types';

export default function Home() {
  return (
    <>
      <Head>
        <title>Growwmart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: any }> = async () => {

  return {
    redirect: {
      destination: '/allproducts',
      permanent: false,
    },
  }
}
