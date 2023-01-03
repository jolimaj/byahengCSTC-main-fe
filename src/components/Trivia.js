import { React, useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import axios from "../config/axios";
const Trivia = () => {
  const [trivias, setTrivias] = useState([]);
  useEffect(() => {
    axios.get("/trivia").then((response) => {
      setTrivias(response.data);
    });
  }, []);
  return (
    <main>
      <Carousel cols={3} rows={1} gap={1} loop>
        {trivias.map((data, i) => (
          <Carousel.Item key={i}>
            <Card sx={{ m: 2, alignItems: "center" }}>
              <CardMedia
                component="img"
                height="500"
                image={data.images}
                alt={data.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </main>
  );
};
export default Trivia;
