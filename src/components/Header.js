import React from "react";
import { Card, CardMedia, Typography, Box, Grid, Paper } from "@mui/material";

export default function Headers(props) {
  let name;
  switch (props.name) {
    case "home":
      name = "Byaheng CSTC";
      break;
    case "about":
      name = "About";
      break;
    case "contact":
      name = "Contact";
      break;
    case "faq":
      name = "Frequently Ask Question";
      break;
    default:
      name = "Byaheng CSTC";
  }
  return (
    <main>
      <Paper
        sx={{
          position: "relative",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${props.imageHeader})`,
          height: 500,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={props.imageHeader} />}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={12}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                mt: 15,
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                style={{ fontFamily: "PoppinsBold" }}
              >
                {name}
              </Typography>
              <Box>
                <Typography variant="h4" color="inherit" paragraph>
                  Virtual Campus Tour
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  College of Science Technology and Communications, Inc. Campus
                  Tour
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* <Card
        style={{
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          alt="Header"
          image={Header}
          title="Header"
          width={`100%`}
          height="500"
        />
        <Typography
          color="primary"
          gutterBottom
          variant="h1"
          component="h1"
          style={{
            position: "absolute",
            top: "35%",
            width: "100%",
            textAlign: "center",
            fontFamily: "'Arial'",
            fontSize: "80px",
            letterSpacing: "5px",
            lineHeight: "80px",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
      </Card> */}
    </main>
  );
}
