import { Container, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Education() {
  
  return (
    <>
      <Container sx={{ height: "90vh" }}>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <Typography variant="h5">
            Education
            <Box
              sx={{ width: "auto", background: "green", height: "2px" }}
            ></Box>
          </Typography>
          {/* ////////////////////education */}
        </Box>
        {/* ///////////// */}
        <Stack alignItems="center" direction="row" spacing={6} >
          <Box sx={{ width:{xs:"100%" }}}>
            <Card sx={{ maxWidth: 600, boxShadow: "   gray", marginTop: 8 }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                  9-Months Diploma in Web and User Interface Development
                </Typography>
                <Typography sx={{ mb: 2 }} color="text.secondary">
                  Institution: ITI
                </Typography>
                <Typography variant="body2" sx={{ color: "green" }}>
                  Oct. 2023 - Present
                </Typography>
              </CardContent>
            </Card>
            {/* card 1 */}
            <Card sx={{  maxWidth: 600, boxShadow: "   gray", marginTop: 6 }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                  Bachelor’s Degree in Turkish Language
                </Typography>
                <Typography sx={{ mb: 2 }} color="text.secondary">
                  University: Tanta{" "}
                </Typography>
                <Typography variant="body2" sx={{ color: "green" }}>
                  Sept. 2017 - Jul. 2022{" "}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/*  */}
          <Box
            component="img"
            sx={{ width: "35%", height: "400px" , 
              display:{xs:"none" , sm:"none" , md: "block"}
             }}
             src="/assets/Learning.gif"
             alt="education"
          />
        </Stack>
      </Container>
    </>
  );
}
