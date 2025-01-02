import { Box, Typography } from "@mui/material";
import React from "react";
import servicesImage from "../images/servicers.png";
import CallNowButton from "./CallNowButton";

export default function Service({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // height: "100vh",
        gap: 4,
      }}
    >
      <img src={servicesImage} alt="Services" style={{ width: "60%" }} />
      <Box sx={{display:'flex', flexDirection:'column', gap:3, textAlign: "left" }}>
        <Typography variant="h3" >
          {title}
        </Typography>
        <Typography variant="body1" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Typography>
        <Box sx={{ display: "flex", gap: 2 , alignItems: "center"}}>
        <CallNowButton />
        <Typography variant="caption">+1234567890</Typography></Box>
      </Box>
    
    </Box>
  );
}
