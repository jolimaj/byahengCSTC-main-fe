import { React, useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Card,
  CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "../config/axios";
import NavBar from "./NavBar";
import Header from "./Header";
import Cover from "../img/cover.jpg";

function FAQ() {
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
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    axios.get("/faq").then((response) => {
      setFaqs(response.data);
    });
  }, []);

  return (
    <main>
      <NavBar value="http://localhost:3001" navClick={handleNav} />
      <Header name="faq" imageHeader={Cover} />
      <Box
        sx={{
          flexGrow: 1,
          mx: 10,
          py: 5,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={2}>
          <Grid item sx={12}>
            <Container fixed>
              <Box>
                {faqs.map((data, i) => (
                  <Accordion
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                    key={i}
                    disableGutters
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${i}bh-content`}
                      id={`panel${i}bh-header`}
                    >
                      <Typography
                        color="primary"
                        sx={{
                          width: "33%",
                          flexShrink: 0,
                          fontWeight: "bold",
                        }}
                      >
                        {data.question}{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          color: "text.secondary",
                        }}
                      >
                        {data.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
              {/* </Box> */}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default FAQ;
