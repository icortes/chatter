import { Button, Container, Grid } from '@mui/material';
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
      <Container maxWidth='md'>
        <Grid
          container
          spacing={0}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Button variant='outlined' href='/login'>
            Login
          </Button>
          <Button variant='outlined' href='/signup'>
            Sign Up
          </Button>
        </Grid>
      </Container>
    </>
  );
}
