"use client";
import { useVerifConfirm } from "./logic";

const {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} = require("@mui/material");

const Confirm = () => {
  const { confirmData, setConfirmData, handleChange, handleConfirm } =
    useVerifConfirm();
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
          Verify your account
        </Typography>
        {/* <Typography>
          検証コードを xxx@xxx
          にメールで送信しました。アカウントを確認するには、以下に検証コードを入力してください。
        </Typography> */}
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
            defaultValue={confirmData.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="verifCode"
            label="verifCode"
            name="verifCode"
            onChange={handleChange}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleConfirm}
          sx={{
            mt: 3,
            mb: 2,
          }}
        >
          Verify your account
        </Button>
      </Box>
    </Container>
  );
};
export default Confirm;
