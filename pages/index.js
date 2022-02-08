import Head from 'next/head';
import ButtonAppBar from '../components/ButtonAppBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatter</title>
        <meta name='description' content='Chatting App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ButtonAppBar />
    </>
  );
}
