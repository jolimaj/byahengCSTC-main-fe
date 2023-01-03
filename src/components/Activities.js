import { React, useState, useEffect } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import NavBar from "./NavBar";
import axios from "../config/axios";

export default function Activity() {
  let [nav, setNav] = useState(0);
  const [activities1, setActivities1] = useState([]);
  const [activities2, setActivities2] = useState([]);
  const [activities3, setActivities3] = useState([]);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  async function getCampus1() {
    const campus = await axios.get("/activities/1");
    setActivities1(campus.data);
  }
  async function getCampus2() {
    const campus = await axios.get("/activities/2");
    setActivities2(campus.data);
  }
  async function getCampus3() {
    const campus = await axios.get("/activities/3");
    setActivities3(campus.data);
  }

  useEffect(() => {
    getCampus1();
    getCampus2();
    getCampus3();
  }, []);
  const handleNav = (event, index) => {
    switch (index) {
      case 1:
        window.location.href = "/about";
        break;
      case 2:
        window.location.href = "/activity";
        break;
      case 3:
        window.location.href = "/faq";
        break;
      case 4:
        window.location.href = "/contact";
        break;
      default:
        window.location.href = "/";
    }
    setNav(event.target.value);
  };
  return (
    <main>
      <NavBar value="http://localhost:3001" navClick={handleNav} />
      <Grid
        container
        spacing={2}
        sx={{
          my: 10,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12}>
          <Container fixed>
            <Typography
              component="h3"
              variant="h3"
              color="primary"
              style={{
                fontWeight: "bold",
                align: "center",
              }}
            >
              CSTC Main Campus Sariaya Quezon
            </Typography>
            <ImageList variant="standard" cols={3} gap={8}>
              {activities1.map((item) => (
                <ImageListItem key={item.images}>
                  <img
                    src={`${item.images}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    width={250}
                    height={250}
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={`${
                      month[new Date(item.date).getMonth()]
                    } ${new Date(item.date).getDate()}, ${new Date(
                      item.date
                    ).getFullYear()}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container fixed>
            <Typography
              component="h3"
              variant="h3"
              color="primary"
              style={{
                fontWeight: "bold",
                align: "center",
              }}
            >
              CSTC Atimonan
            </Typography>
            <ImageList variant="standard" cols={3} gap={8}>
              {activities2.map((item) => (
                <ImageListItem key={item.images}>
                  <img
                    src={`${item.images}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    width={250}
                    height={250}
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={`${
                      month[new Date(item.date).getMonth()]
                    } ${new Date(item.date).getDate()}, ${new Date(
                      item.date
                    ).getFullYear()}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container fixed>
            <Typography
              component="h3"
              variant="h3"
              color="primary"
              style={{
                fontWeight: "bold",
                align: "center",
              }}
            >
              CSTC Lucena
            </Typography>
            <ImageList variant="standard" cols={3} gap={8}>
              {activities3.map((item) => (
                <ImageListItem key={item.images}>
                  <img
                    src={`${item.images}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    width={250}
                    height={250}
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={`${
                      month[new Date(item.date).getMonth()]
                    } ${new Date(item.date).getDate()}, ${new Date(
                      item.date
                    ).getFullYear()}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Grid>
      </Grid>
      {/* <Box sx={{ py: 5, px: 10, mt: 10 }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          <ImageListItem key="Subheader" cols={2}>
            <Typography
              component="h3"
              variant="h3"
              color="primary"
              style={{
                fontWeight: "bold",
                align: "center",
              }}
            >
              CSTC Activities
            </Typography>
          </ImageListItem>
          {activities.map((item) => (
            <ImageListItem key={item.images}>
              <img
                src={`${item.images}?w=248&fit=crop&auto=format`}
                srcSet={`${item.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
                width={250}
                height={250}
              />
              <ImageListItemBar
                title={item.name}
                subtitle={`${month[new Date(item.date).getMonth()]} ${new Date(
                  item.date
                ).getDate()}, ${new Date(item.date).getFullYear()}`}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box> */}
    </main>
  );
}
