import { Typography, Box, Stack, Container, Button } from "@mui/material";
import React from "react";

export default function Skills() {

  return (
    <>
      <Container sx={{ height: "85vh" }}>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10  }}>
          <Typography variant="h5" sx={{color:"#fff"}}>
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
                sx={{ display: "block", fontSize: 24, fontWeight: "bold" ,color:"#fff"}}
                variant="p"
              >
                Front End
              </Typography>
              <Button 
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}

                variant="outlined"
              >
                Html5
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Css3
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Bootstrap
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                JavaScript
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              >
                TypeScript
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Tailwind
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Angular
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                React
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Vue
              </Button>
            </Box>

            {/* front */}
            <Box sx={{ width: "60%" }}>
              <Typography
                sx={{ display: "block", fontSize: 24, fontWeight: "bold",color:"#fff" }}
                variant="p"
              >
                Back End
              </Typography>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Node Js
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Express
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                MongoDb
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                Nest Js
              </Button>
            </Box>
            {/* back */}
            <Box sx={{ width: "60%" }}>
              <Typography
                sx={{ display: "block", fontSize: 24, fontWeight: "bold" ,color:"#fff"}}
                variant="p"
              >
                Design
              </Typography>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
              >
                {" "}
                Adobe XD
              </Button>
              <Button
                sx={{ marginRight: 1, marginTop: 2,color: "orangered", borderColor: "orangered", '&:hover': {  borderColor: "orangered",background:"transparent" } }}
                variant="outlined"
              
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
              display: { xs: "none", sm: "none", md: "block" },
            }}
            alt="The house from the offer."
            src="/assets/Source_code-amico-removebg-preview.png"
          />
        </Stack>
      </Container>
    </>
  );
}
