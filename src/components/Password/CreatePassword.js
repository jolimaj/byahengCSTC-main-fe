import { React, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Alert,
  Grid,
  Paper,
} from "@mui/material";
import Logo from "../../img/logo.png";
import BG from "../../img/cover.jpg";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

export default function CreatePassword() {
  let { id, token } = useParams();
  const [password, setPassword] = useState("");
  const [notsend, setnotsend] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.put(`/signin/password-reset/${id}/${token}`, {
        password,
      });
      console.log(
        "🚀 ~ file: NewPassword.js ~ line 29 ~ handleSubmit ~ res",
        res
      );
      setnotsend(!notsend);
      window.location.href = "/tour/signin";
    } catch (error) {
      if (password === "") {
        setErrorMsg(error.response.data.error[0]);
      } else {
        setErrorMsg(error.response.data.message);
      }
    }
  }
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
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
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </main>
  );
}
