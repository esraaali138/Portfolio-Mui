import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Link } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function Home() {
  return (
    <>
      <Container>
        <Stack alignItems="center" sx={{overflow:"hidden"}}>
          <Box noWrap>
            <img
              src="/assets/WhatsApp_Image_2024-05-09_at_10.19.29_AM-removebg-preview.png"
              alt=""
              style={{
                width: "230px",
                height: "250px",
                marginTop: "60px",
                border: "1px solid transparent",
                borderRadius: "50%",
              }}
            />
          </Box>

          <Box noWrap>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              <span>
                <WavingHandIcon sx={{ color: "orange" }}></WavingHandIcon>
              </span>
              <span style={{ color: "#818589", fontWeight: 700 }}>
                Hi, I'm Esraa Ali <br />
              </span>
            </Typography>
            <Typography
              noWrap
              sx={{ marginTop: 4, color: "#818589", textAlign: "center" }}
            >
              Proactive{" "}
              <span style={{ color: "orangered", fontWeight: 700 }}>
                Front-End Developer{" "}
              </span>{" "}
              committed to learning <br />
              about software engineering with a focus on personal and technical
              development.
            </Typography>
            <Box sx={{ marginTop: 4, textAlign: "center"}}>
              <Button
                sx={{
                  width: "auto",
                  background: "orangered",
                  borderColor:"orangered",
                  '&:hover': {  borderColor: "orangered",background:" rgb(250, 77, 9)"}    }}
                  variant="outlined"

              >
                
                <a
                  className="btnDownload"
                  style={{ textDecoration: "none", color: "#fff"}}
                  href="/Esraa Ali.pdf"
                  target="_blank"
                  download
                >
                  Download Cv
                </a>
                <span>
                  <ArrowDownwardIcon sx={{ color: "#fff", marginTop: "4px" }} />
                </span>
              </Button>
            </Box>
            {/*  */}
            <Box
              sx={{
                width: "600px",
                marginTop: 6,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                component="a"
                target="blank"
                href="https://www.linkedin.com/in/esraa-ali-a01b57277/"
              >
                <LinkedInIcon
                  sx={{
                    cursor: "pointer",
                    color: "black",
                    "&:hover": { color: "orangered" },
                  }}
                />
              </Typography>
              <Typography
                component="a"
                href="https://github.com/esraaali138"
                target="blank"
              >
                <GitHubIcon
                  sx={{
                    ml: 2,
                    cursor: "pointer",
                    color: "black",
                    "&:hover": { color: "orangered" },
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
