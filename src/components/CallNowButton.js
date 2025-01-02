import React from "react";
import { Button, Link } from "@mui/material";

export default function CallNowButton() {
  return (
    <Link href="tel:+1234567890" underline="none">
      <Button variant="contained" color="warning">
        Call Now
      </Button>
    </Link>
  );
}
