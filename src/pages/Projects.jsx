import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  CardActionArea,
  Container,
  Box,
  Typography,
  Stack,
} from "@mui/material";
export default function Projects() {
  const styles = {
    style: {},
  };
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Typography variant="h5">
          Projects
          <Box sx={{ width: "auto", background: "green", height: "2px" }}></Box>
        </Typography>
        {/* ////////////////////projects */}
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={8}
        alignItems="center"
        sx={{ width: { xs: "100%", marginTop: 20 } }}
      >
        <Box sx={{ width: { xs: "100%" } }}>
          <Card
            sx={{ width: { xs: "100%", lg: "350px" }, position: "relative" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image="/assets/istockphoto-626669886-612x612.jpg"
                alt="green iguana"
              />
            </CardActionArea>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 0,
                transition: "opacity 0.3s",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <Box
                sx={{ color: "white", textAlign: "center", marginTop: "50%" }}
              >
                <Typography variant="h6">
                  Blog Website Using React , NodeJs
                </Typography>
                <Typography
                  sx={{ color: "green", fontSize: "20px" }}
                  component="a"
                  target="blank"
                  href="https://github.com/esraaali138/Blog-app-react"
                >
                  Github
                </Typography>
                <br />
                <Typography
                  sx={{ color: "green", fontSize: "20px" }}
                  component="a"
                  target="blank"
                  href="https://blog-app-react-two.vercel.app/"
                >
                  Live demo
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
{/*  */}
<Box sx={{ width: { xs: "100%" } }}>
          <Card
            sx={{ width: { xs: "100%", lg: "350px" }, position: "relative" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image="/assets/ECOMMERCE_SHUTTER5.jpg"
                alt="green iguana"
              />
            </CardActionArea>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 0,
                transition: "opacity 0.3s",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <Box
                sx={{ color: "white", textAlign: "center", marginTop: "50%" }}
              >
                <Typography variant="h6">
                  E-commerce Using Angular , NodeJs
                </Typography>
                <Typography
                  sx={{ color: "green", fontSize: "20px" }}
                  component="a"
                  target="blank"
                  href="https://github.com/Web-UI-Development-Team/E-Commerce-Angular"
                >
                  Github
                </Typography>
                <br />
                <Typography
                  sx={{ color: "green", fontSize: "20px" }}
                  component="a"
                  target="blank"
                  href="https://e-commerce-sable-sigma.vercel.app/user/home"
                >
                  Live demo
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
        {/*  */}
        <Box sx={{ width: { xs: "100%" } }}>
          <Card
            sx={{ width: { xs: "100%", lg: "350px" }, position: "relative" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image="/assets/5fbc29f4d2ead110351988.webp"
                alt="green iguana"
              />
            </CardActionArea>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 0,
                transition: "opacity 0.3s",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <Box
                sx={{ color: "white", textAlign: "center", marginTop: "50%" }}
              >
                <Typography variant="h6">
                  Examnation System Using JavaScript
                </Typography>
                <Typography
                  sx={{ color: "green", fontSize: "20px" }}
                  component="a"
                  target="blank"
                  href="https://github.com/esraaali138/Examnation-system-js"
                >
                  Github
                </Typography>
                <br />
                <Typography
                  sx={{ color: "green", fontSize: "20px" }}
                  component="a"
                  target="blank"
                  href="https://esraaali138.github.io/Examnation-system-js/"
                >
                  Live demo
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
}
