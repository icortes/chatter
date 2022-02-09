import { Container, Grid } from '@mui/material';
import Head from 'next/head';
import ButtonAppBar from '../components/ButtonAppBar';
import SignIn from '../components/SignIn';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatter</title>
        <meta name='description' content='Chatting App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ButtonAppBar />
      <Container maxWidth='md'>
        <Grid
          container
          spacing={0}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <SignIn />
          </Grid>
      </Container>
    </>
  );
}
