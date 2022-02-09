import { Container, CssBaseline } from "@mui/material";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component={'main'} maxWidth='xs'>
      <CssBaseline />
      
    </Container>
  )
}
