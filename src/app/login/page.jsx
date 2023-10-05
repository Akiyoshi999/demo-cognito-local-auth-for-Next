"use client";

import { useLoginForm } from "./logic";

const {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} = require("@mui/material");

const Login = () => {
  const { loginData, setLoginData, handleChange, handleLogin } = useLoginForm();

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            defaultValue={loginData.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            defaultValue={loginData.password}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            mt: 3,
            mb: 2,
          }}
        >
          Login
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forget password
            </Link>
          </Grid>

          <Grid item>
            <Link href="/signup" variant="body2">
              Sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
