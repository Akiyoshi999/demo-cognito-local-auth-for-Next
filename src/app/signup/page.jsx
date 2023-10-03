"use client";
import { useRouter } from "next/navigation";

const {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} = require("@mui/material");

const Signup = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/confirm");
  };

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
          Sign up
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
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleClick}
          sx={{
            mt: 3,
            mb: 2,
          }}
        >
          Sign up
        </Button>

        <Grid container>
          <Grid item>
            <Typography>
              Already have an account?
              <Link href="/login" variant="body2" sx={{ ml: 2 }}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Signup;
