import { React, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
  Alert,
  Typography,
  Paper,
} from "@mui/material";
import Logo from "../../img/logo.png";
import BG from "../../img/cover.jpg";
import axios from "../../config/axios";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [notsend, setnotsend] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/signin/forgot_password", { email });
      setnotsend(!notsend);
    } catch (error) {
      if (email === "") {
        setErrorMsg(error.response.data.error[0]);
      } else {
        setErrorMsg(error.response.data.message);
      }
    }
  }
  const handleChange = (e) => {
    setErrorMsg("");
    setEmail(e.target.value);
  };
  function handleLogin() {
    window.location.href = "/tour/signin";
  }
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${BG})`,
      }}
    >
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
          {notsend ? (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ my: 20, backgroundColor: "white", padding: 5 }}
            >
              <Box sx={{ width: "50%", height: "50%", mb: 3 }}>
                <img src={Logo} alt="Logo" />
              </Box>
              {errorMsg && (
                <Alert severity="error" fullWidth>
                  {errorMsg}
                </Alert>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Button variant="text" color="primary" onClick={handleLogin}>
                  Back to login page
                </Button>
              </Container>
            </Box>
          ) : (
            <Box sx={{ my: 20, backgroundColor: "white", padding: 5 }}>
              <Typography
                variant="h5"
                color="primary"
                gutterBottom
                textAlign="center"
              >
                Forgot password
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                You have successfully submitted your request to reset password.
                Please check your email for instructions.
              </Typography>
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Button variant="text" color="primary" onClick={handleLogin}>
                  Back to login page
                </Button>
              </Container>
            </Box>
          )}
        </Box>
      </Container>
    </Paper>
  );
}
