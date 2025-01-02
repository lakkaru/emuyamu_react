import React from 'react'
import { Box, Link, Typography } from "@mui/material";
import logo from "../images/logo-rbg.webp";
import CallNowButton from "../components/CallNowButton";

export default function TopNav() {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "75px",
      padding: "0 16px", 
      boxSizing: "border-box",
      marginBottom: "20px",
    }}
  >
    <img src={logo} alt="Logo" style={{ width: "75px" }} />
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
      }}
    >
      {[...Array(5)].map((_, i) => (
        <Link key={i} href="/features" color="inherit" underline="none">
          Features
        </Link>
      ))}
    </Box>
    <Box>
      <CallNowButton />
      <Typography variant="caption">+1234567890</Typography>
    </Box>
  </Box>

  )
}
