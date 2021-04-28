import Head from 'next/head'
import BannerOne from '../components/BannerOne'

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerOne />
      </main>

      <footer>
        Footer
      </footer>
    </>
  )
}
