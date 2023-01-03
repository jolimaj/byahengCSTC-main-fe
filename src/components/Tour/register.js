import { React, useState, useEffect } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  Container,
  Radio,
  RadioGroup,
  Alert,
  Paper,
  Link,
} from "@mui/material";
import Logo from "../../img/logo.png";
import BG from "../../img/cover.jpg";
import axios from "../../config/axios";
import Terms from "./TermsAndCondition";

export default function SignUp() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [roleID, setRoleID] = useState(0);
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [open, setOpen] = useState(true);

  function handleChange(e) {
    if (e.target.name === "first_name") {
      setFirstname(e.target.value);
    } else if (e.target.name === "last_name") {
      setLastname(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "mobile") {
      setMobile(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  }
  function handleLogin() {
    window.location.href = "/tour/signin";
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/signup", {
        first_name,
        last_name,
        roleID,
        address,
        mobile,
        email,
      });
      setResult(res.data.message);
    } catch (error) {
      setErrorMsg(error.response.data.error[0]);
    }
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
          {result === "" ? (
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
                autoComplete="given-name"
                name="first_name"
                required
                fullWidth
                id="first_name"
                label="First Name"
                autoFocus
                value={first_name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="family-name"
                value={last_name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                value={address}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="mobile"
                value={mobile}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
              />
              <Grid container justifyContent="center">
                <Grid item>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          value="2"
                          onChange={(e) => {
                            setRoleID(e.target.value);
                          }}
                        />
                      }
                      label="Student"
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          value="3"
                          onChange={(e) => {
                            setRoleID(e.target.value);
                          }}
                        />
                      }
                      label="Visitor"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item sx={{ marginRight: 1 }}>
                  Already have an account?
                </Grid>
                <Grid item>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={handleLogin}
                    color="primary"
                    underline="none"
                  >
                    Sign In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          ) : isAgree ? (
            <Box sx={{ my: 20, backgroundColor: "white", padding: 5 }}>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                textAlign="center"
                fontWeight="PoppinsBold"
              >
                You account successfully created.
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                To set up your password please check the instruction on your
                email. Have a great day.
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
          ) : (
            <Box sx={{ my: 20, backgroundColor: "white", padding: 5 }}>
              <Terms agree={setIsAgree} isOpen={setOpen} isOvenValue={open} />
            </Box>
          )}
        </Box>
      </Container>
    </Paper>
  );
}
