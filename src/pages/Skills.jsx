import { Typography, Box, Stack, Container, Button } from "@mui/material";
import React from "react";

export default function Skills() {
  return (
    <>
      <Container sx={{ height: "85vh" }}>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <Typography variant="h5">
            Skills
            <Box
              sx={{ width: "auto  ", background: "orangered", height: "2px" }}
            ></Box>
          </Typography>
          {/* ////////////////////skills */}
        </Box>
        <Stack
          sx={{ marginTop: 8 }}
          alignItems="center"
          direction="row"
          spacing={6}

        >
          <Stack spacing={4}>
            <Box sx={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
              <Typography
                sx={{ display: "block", fontSize: 24, fontWeight: "bold" }}
                variant="p"
              >
                Front End
              </Typography>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Html5
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Css3
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Bootstrap
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                JavaScript
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                TypeScript
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Tailwind
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Angular
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                React
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Vue
              </Button>
            </Box>

            {/* front */}
            <Box sx={{ width: "60%" }}>
              <Typography
                sx={{ display: "block", fontSize: 24, fontWeight: "bold" }}
                variant="p"
              >
                Back End
              </Typography>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Node Js
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Express
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                MongoDb
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Nest Js
              </Button>
            </Box>
            {/* back */}
            <Box sx={{ width: "60%" }}>
              <Typography
                sx={{ display: "block", fontSize: 24, fontWeight: "bold" }}
                variant="p"
              >
                Design
              </Typography>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                {" "}
                Adobe XD
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2 }}
                variant="outlined"
                color="success"
              >
                Figma
              </Button>
            </Box>
          </Stack>

          <Box
            component="img"
            sx={{
              width: "40%",
              height: "400px",
              display:{xs: "none", sm: "none" , md:"block" }
            }}
            alt="The house from the offer."
            src="/assets/Coding.gif"
          />
        </Stack>
      </Container>
    </>
  );
}
