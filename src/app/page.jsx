"use client";
import { Alert, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [alert, setAlert] = useState(false);
  const handleClick = () => {
    setAlert(!alert);
  };
  const handleClose = () => {
    setAlert(false);
  };
  const handleRouter = () => {
    const router = useRouter();
    router.push("/confirm");
  };

  return (
    <>
      {alert ? (
        <Alert severity="success" onClose={handleClose}>
          <Link href="/signup">SUCCESS</Link>
        </Alert>
      ) : (
        ""
      )}
      <Button>text</Button>
      <Button variant="contained" onClick={handleClick}>
        contained
      </Button>
      <Button variant="outlined" onClick={handleRouter}>
        confirm page GO
      </Button>
    </>
  );
}
