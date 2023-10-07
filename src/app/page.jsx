"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleRouter = (url = "") => {
    router.push(url);
  };

  return (
    <>
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
            Information
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}></Box>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleRouter("/signup")}
              >
                Click here to sign up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleRouter("/login")}
              >
                Click here to login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
