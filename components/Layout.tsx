import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      {children}
    </>
  );
}
