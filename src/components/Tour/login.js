import { React, useState, useEffect } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
  Link,
  Paper,
  Alert,
} from "@mui/material";
import Logo from "../../img/logo.png";
import BG from "../../img/cover.jpg";
import axios from "../../config/axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/signin", { email, password });
      window.localStorage.setItem("session", JSON.stringify(res.data));
      window.location.href = "/tour";
    } catch (error) {
      if (email === "" || password === "") {
        console.log("catch", error.response.data.error[0]);
        setErrorMsg(error.response.data.error[0]);
      } else {
        setErrorMsg(error.response.data.message);
      }
    }
  }
  function handleForgotPassword(e) {
    e.preventDefault();
    console.log(
      "🚀 ~ file: Login.js ~ line 50 ~ handleForgotPassword ~ handleForgotPassword"
    );
    window.location.replace("/tour/signin/forgot-password");
  }
  function handleRegister(e) {
    e.preventDefault();
    window.location.replace("/tour/signup");
  }
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("session")) !== null) {
      window.location.href = "/tour";
    }
  }, []);

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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item sx={{ marginRight: 1 }}>
                Not yet Register?
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  onClick={handleRegister}
                  color="primary"
                  underline="none"
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  onClick={handleForgotPassword}
                  color="error"
                  underline="none"
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}
