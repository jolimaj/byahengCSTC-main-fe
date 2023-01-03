import { React, useState } from "react";
import Header from "./Header";
import Trivia from "./Trivia";
import NavBar from "./NavBar";
import Cover from "../img/cover.jpg";
import { Grid, Container } from "@mui/material";

export default function Home() {
  let [nav, setNav] = useState(0);
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
      <NavBar navClick={handleNav} />
      <Header name="home" imageHeader={Cover} />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          my: 10,
        }}
      >
        <Grid item xs={12}>
          <Container fixed>
            <Trivia />
          </Container>
        </Grid>
      </Grid>
    </main>
  );
}
