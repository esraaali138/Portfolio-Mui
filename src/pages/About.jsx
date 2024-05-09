import { Container, Stack, Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
export default function About() {
  return (
    <Container>
      <Stack alignItems="center" direction="row">
      <Box
          component="img"
          sx={{
            width: "500px",
            height: "500px",
            display:{ xs: "none" , sm: "none" , md:"block"},
          
          }}
          alt="The house from the offer."
          src="assets/WhatsApp_Image_2024-02-22_at_1.02.53_PM-removebg-preview (1).png"
           />

        <Box sx={{ marginTop:4}}>
          <Typography
            variant="p"
            sx={{
              fontWeight: 700,
              color: "green",
            }}
          >
            MY INTRO
          </Typography>
          <Typography
            variant="h4"
            noWrap
            sx={{
              fontWeight: 500,
              marginTop: 2,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="span"
            sx={{
              fontWeight: 500,
              lineHeight: 2,
              color: "#818589	",
            }}
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </Typography>

          <Box sx={{ marginTop: 6 }}>
            <Stack alignItems="center" direction="row" spacing={2}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 700,
                    marginTop: 2,
                    fontSize: "1.3rem",
                  }}
                >
                  Name:
                  <Typography
                    variant="span"
                    sx={{ color: "green", marginLeft: 10 }}
                  >
                    Esraa Ali
                  </Typography>
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 700,
                    marginTop: 2,
                    fontSize: "1.3rem",
                  }}
                >
                  Date of birth:
                  <Typography
                    variant="span"
                    sx={{ color: "green", marginLeft: 2 }}
                  >
                    August 13/1999
                  </Typography>
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 700,
                    marginTop: 2,
                    fontSize: "1.3rem",
                  }}
                >
                  Address:
                  <Typography
                    variant="span"
                    sx={{ color: "green", marginLeft: 7.5 }}
                  >
                    Cairo , Egypt
                  </Typography>
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 700,
                    marginTop: 2,
                    fontSize: "1.3rem",
                  }}
                >
                  Email:
                  <Typography
                    variant="span"
                    sx={{ color: "green", marginLeft: 10 }}
                  >
                    esraaali1999138@gmail.com
                  </Typography>
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 700,
                    marginTop: 2,
                    fontSize: "1.3rem",
                  }}
                >
                  Phone:
                  <Typography
                    variant="span"
                    sx={{ color: "green", marginLeft: 10 }}
                  >
                    (+20)1064340080
                  </Typography>
                </Typography>
              </Box>
            </Stack>
          </Box>
       
        </Box>
      </Stack>
    </Container>
  );
}
