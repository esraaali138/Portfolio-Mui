import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <Stack spacing={4} sx={{ background: "#272829" , marginTop:10,height:"200px"}}>
        <Box sx={{textAlign:"center", display: "flex", justifyContent: "center",padding:2 , gap:6}}>
          <Typography sx={{ color: "#fff", fontSize: "20px" }}>Home</Typography>
          <Typography sx={{ color: "#fff", fontSize: "20px" }}>
            About
          </Typography>{" "}
          <Typography sx={{ color: "#fff", fontSize: "20px" }}>
            Skills
          </Typography>{" "}
          <Typography sx={{ color: "#fff", fontSize: "20px" }}>
            Projects
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>
            <FacebookIcon
              sx={{
                ml: 2,
                cursor: "pointer",
                color: "#fff",
                "&:hover": { color: "green" },
              }}
            />
          </Typography>
          <Typography>
            <TwitterIcon
              sx={{
                ml: 2,
                cursor: "pointer",
                color: "#fff",
                "&:hover": { color: "green" },
              }}
            />
          </Typography>
          <Typography>
            <InstagramIcon
              sx={{
                ml: 2,
                cursor: "pointer",
                color: "#fff",
                "&:hover": { color: "green" },
              }}
            />
          </Typography>
          <Typography>
            <LinkedInIcon
              sx={{
                ml: 2,
                cursor: "pointer",
                color: "#fff",
                "&:hover": { color: "green" },
              }}
            />
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{color:"#fff"}}>&copy; 2024 Your Website. All rights reserved.</Typography>

        </Box>
      </Stack>
    </>
  );
}
