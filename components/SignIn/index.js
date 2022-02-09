import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
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
          sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='password'
            type={'password'}
            id='password'
            autoComplete='current-password'
          />
        </Box>
      </Box>
    </Container>
  );
}
