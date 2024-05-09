import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Link } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Home() {
  return (
    <>
      <Container >
        <Stack
          alignItems="center"
          direction="row"
          spacing={4}
          sx={{ height: "100vh" , overflowX:"hidden" }}
        >
          <Box sx={{position:"relative" , zIndex:2 }}>
            <Typography
              variant="h4"
              sx={{
                
                marginTop: 20,
                color: "#818589	",
              }}
            >
              Hi <br />
              <span style={{ color: "green", fontWeight: 700 }}>
                I'm Esraa <br />
              </span>
              Web & Ui Developer <br />
            </Typography>
            <Typography noWrap sx={{ marginTop: 4, color: "#818589	" }}>
              Front-End Developer committed to learning Proactive <br />
              about software engineering with a focus on personal and technical
              development.
            </Typography>
            <Box sx={{ marginTop: 4 , }}>
              <Button
                sx={{ width: "140px"  }}
                variant="contained"
                color="success"
              >
                    <a style={{textDecoration:"none", color:"#fff"}} href="public/Esraa ali.pdf" target="_blank" download>
                    Download Cv

                    </a>

              </Button>
              <Button
                sx={{
                  ml: 2,
                  width: "100px",
                }}
                variant="outlined"
                color="success"
              >
                Hire me
              </Button>
            </Box>
            {/*  */}
            <Box sx={{ width: "100px", marginTop: 6 }}>
              <Typography
                component="a"
                target="blank"
                href="https://www.linkedin.com/in/esraa-ali-a01b57277/"
              >
                <LinkedInIcon sx={{ cursor: "pointer",color:"black" ,"&:hover" : { color: "green"} }} />
              </Typography>
              {/*  */}
              <Typography
                component="a"
                href="https://github.com/esraaali138"
                target="blank"
              >
                <GitHubIcon sx={{ ml: 2, cursor: "pointer", color:"black" ,"&:hover" : { color: "green"} }} />
              </Typography>
            </Box>
          </Box>
          <Box
            component="img"
            sx={{
              width: "130px",
              height: "150px",
              border: "1px solid white",
              boxShadow: " 0 2px 2px 1px green",
              borderRadius: "50%", 
            }}
            // width={100}
            alt="The house from the offer."
            src="/assets/WhatsApp_Image_2024-05-09_at_10.19.29_AM-removebg-preview.png "/>
          <Box
       
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <circle cx="120" cy="20" r="5" fill="green" />
            <circle cx="100" cy="30" r="3" fill="green" />
            <circle cx="150" cy="50" r="6" fill="green" />
            <circle cx="120" cy="90" r="5" fill="green" />
            <circle cx="80" cy="80" r="3" fill="green" />
            <circle cx="120" cy="60" r="5" fill="green" />
            <circle cx="40" cy="60" r="4" fill="green" />
            <circle cx="60" cy="30" r="4" fill="green" />
            <circle cx="120" cy="60" r="4" fill="green" />

          </svg>
          </Box>


        </Stack>
      </Container>
    </>
  );
}
