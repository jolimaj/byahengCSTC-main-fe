import { React, useState } from "react";
import axios from "../config/axios";
import Header from "./Header";
import Survey from "./Survey";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Cover from "../img/contact.jpg";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [survey, setSurvey] = useState(true);

  const handleSubmit = async () => {
    const data = {
      ...email,
      ...name,
      ...subject,
      ...message,
    };
    axios.post("/contact", data).then((response) => {
      console.log(response);
    });
  };
  const handleAddSurvey = async (e) => {
    e.preventDefault();
    setSurvey(!survey);
  };
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
      <NavBar value="http://localhost:3001" navClick={handleNav} />
      <Header name="contact" imageHeader={Cover} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 12 }}
        sx={{ px: 10 }}
      >
        <Grid item xs={12} sm={12} md={12} sx={{ mb: 5 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            style={{ fontFamily: "PoppinsBold" }}
          >
            Email us with any questions or inquiries or call (042) 329-0850 /
            719-2805. We would be happy to answer your questions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <form onSubmit={handleSubmit}>
            <Grid container columns={{ xs: 12, sm: 12, md: 6 }} sx={{ mb: 5 }}>
              <Typography
                variant="h6"
                color="primary"
                style={{ fontFamily: "PoppinsBold" }}
              >
                Contact Us
              </Typography>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Name"
                  type="text"
                  fullWidth
                  onChange={(e) => setName({ name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  onChange={(e) => setEmail({ email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Subject"
                  type="text"
                  fullWidth
                  onChange={(e) => setSubject({ subject: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(e) => setMessage({ message: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Grid container center>
                  <Button
                    sx={{ my: 2, mr: 2, display: "flex" }}
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    sx={{ my: 2, display: "flex" }}
                    variant="outlined"
                    type="submit"
                    onClick={handleAddSurvey}
                  >
                    Add Survey
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container columns={{ xs: 12, sm: 12, md: 6 }} sx={{ my: 2 }}>
            <Typography
              variant="h6"
              color="primary"
              style={{ fontFamily: "PoppinsBold" }}
            >
              Survey
            </Typography>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Survey value={survey} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}

export default Contact;
