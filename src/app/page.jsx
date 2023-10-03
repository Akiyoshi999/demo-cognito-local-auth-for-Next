"use client";
import { Button } from "@mui/material";

export default function Home() {
  const handleClick = () => {
    console.log(process.env.CLIENT_ID);
  };

  return (
    <>
      <Button>text</Button>
      <Button variant="contained" onClick={handleClick}>
        contained
      </Button>
      <Button variant="outlined">outlined</Button>
    </>
  );
}
