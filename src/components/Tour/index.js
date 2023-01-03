import { React, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CssBaseline,
  Box,
  Container,
  Button,
  Paper,
} from "@mui/material";
import BG from "../../img/cover.jpg";
import axios from "../../config/axios";
import NavBar from "./NavBar";
import Carousel from "react-grid-carousel";

export default function Index() {
  const [tour, setTour] = useState([]);
  const role = JSON.parse(localStorage.getItem("session"));
  useEffect(() => {
    axios.get("/campus").then((response) => {
      setTour(response.data);
    });
  }, []);
  console.log(
    "🚀 ~ file: index.js ~ line 25 ~ useEffect ~ useEffect",
    role.data.roleID
  );

  return (
    <main>
      <Paper
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${BG})`,
        }}
      >
        <NavBar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <Box sx={{ my: 20, padding: 5 }} xs={12}>
              <Carousel cols={1} rows={1} gap={1} loop>
                {tour.map((data, i) => (
                  <Carousel.Item key={i}>
                    <Card sx={{ m: 2, alignItems: "center", height: 500 }}>
                      <CardMedia
                        component="img"
                        height="350"
                        image={data.images}
                        alt={data.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {data.name}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          href={data.tour_url}
                        >
                          Tour
                        </Button>
                      </CardActions>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>
          </Box>
        </Container>
      </Paper>
    </main>
  );
}
