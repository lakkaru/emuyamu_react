import { Box, Typography } from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function AboutUs({headLine, description}) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-start", alignItems: 'flex-start', gap: 2 , my: 2}}
    >
      <Box>
        <CheckCircleRoundedIcon
          sx={{
            color: "teal", // Icon color
            fontSize: "25px", // Icon size
          }}
        />
      </Box>
      <Box>
        <Typography variant="h6">{headLine}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}
