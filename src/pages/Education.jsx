import { Container, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Education() {
  
  return (
    <>
      <Container sx={{ height: "90vh" }}>
        <Box sx={{ display: "flex", justifyContent: "center" , marginTop: 10 }}>
          <Typography variant="h5" sx={{color:"#fff"}}>
            Education
            <Box
              sx={{ width: "auto", background: "orangered", height: "2px" }}
            ></Box>
          </Typography>
          {/* ////////////////////education */}
        </Box>
        {/* ///////////// */}
        <Stack alignItems="center"   >
          <Box sx={{ width:{xs:"100%" }}}>
            <Card sx={{ maxWidth: 600, boxShadow: "black", marginTop: 8 ,background:"transparent"}}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2,color:"#fff" }}>
                  9-Months Diploma in Web and User Interface Development
                </Typography>
                <Typography sx={{ mb: 2 }} color="gray">
                  Institution: ITI
                </Typography>
                <Typography variant="body2" sx={{ color: "orangered" }}>
                  Oct. 2023 - Present
                </Typography>
              </CardContent>
            </Card>
            {/* card 1 */}
            <Card sx={{  maxWidth: 600, boxShadow: "   gray", marginTop: 6 ,background:"transparent"}}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2 ,color:"#fff"}}>
                  Bachelor’s Degree in Turkish Language
                </Typography>
                <Typography sx={{ mb: 2 }} color="gray">
                  University: Tanta{" "}
                </Typography>
                <Typography variant="body2" sx={{ color: "orangered" }}>
                  Sept. 2017 - Jul. 2022{" "}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/*  */}
          {/* <Box
            component="img"
            sx={{ width: "35%", height: "400px" , 
              display:{xs:"none" , sm:"none" , md: "block"}
             }}
             src="/assets/Learning (1).gif"
             alt="education"
          /> */}
        </Stack>
      </Container>
    </>
  );
}
