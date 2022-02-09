import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Container, CssBaseline, Typography } from '@mui/material';

export default function SignIn() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <Container component={'main'} maxWidth={'xs'}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component={'h1'} variant={'h5'}>
          Sign in
        </Typography>
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}></Box>
      </Box>
    </Container>
  );
}
