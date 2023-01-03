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
  InputLabel,
  Select,
  MenuItem,
  InputBase,
  FormControl,
} from "@mui/material";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PDF from "../Print/PDF";
import Logo from "../../img/logo.png";
import BG from "../../img/cover.jpg";
import axios from "../../config/axios";
import NavBar from "../Tour/NavBar";
import { styled } from "@mui/material/styles";

export default function SignUp() {
  const role = JSON.parse(localStorage.getItem("session"));
  const [fname, setFname] = useState(role.data.first_name);
  const [lname, setLname] = useState(role.data.last_name);
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [courseID, setCourses] = useState("");
  const [campusID, setCampuses] = useState("");
  const [school_last_attended, setSchool] = useState("");
  const [birthday, setdate] = useState(new Date("2022-08-18T21:11:54"));
  const [note, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [campus, setCampus] = useState([]);
  const birthdate = birthday.toISOString().split("T")[0];
  useEffect(() => {
    axios.get("/courses").then((response) => {
      setCourse(response.data);
    });
    axios.get("/campus").then((response) => {
      setCampus(response.data);
    });
  }, []);
  function handleChange(e) {
    console.log(
      "🚀 ~ file: index.js ~ line 95 ~ handleChange ~ e.target.name ",
      e.target.name
    );
    if (e.target.name === "first_name") {
      setFirstname(e.target.value);
    } else if (e.target.name === "last_name") {
      setLastname(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name === "school_last_attended") {
      setSchool(e.target.value);
    } else if (e.target.name === "courseID") {
      setCourses(e.target.value);
    } else if (e.target.name === "campusID") {
      setCampuses(e.target.value);
    } else if (e.target.name === "note") {
      setNotes(e.target.value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = {
        birthdate,
        courseID,
        campusID,
        gender,
        status,
        first_name,
        last_name,
        address,
        mobile,
        school_last_attended,
        note,
      };
      const res = await axios.post("/user/pre_enrollment", data);
      setResult(res.data);
    } catch (error) {
      if (error.response) {
        if (
          first_name === "" ||
          last_name === "" ||
          address === "" ||
          mobile === "" ||
          courseID === "" ||
          campusID === "" ||
          note === "" ||
          school_last_attended === "" ||
          gender === "" ||
          status === ""
        ) {
          setErrorMsg("Please complete all fields.");
        } else {
          setErrorMsg(error.response.data.error);
        }
      }
    }
  }
  const handleDate = (e) => {
    setdate(e);
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
        <NavBar />
        {result === "" ? (
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
                noValidate
                onSubmit={handleSubmit}
                sx={{ my: 20, backgroundColor: "white", padding: 5 }}
              >
                <Box sx={{ width: "50%", height: "50%", mb: 3 }}>
                  <img src={Logo} alt="Logo" />
                </Box>
                <Typography
                  variant="h4"
                  color="primary"
                  gutterBottom
                  textAlign="center"
                  fontFamily="PoppinsBold"
                >
                  Pre-Enrollment
                </Typography>
                {errorMsg && (
                  <Alert severity="error" fullWidth>
                    {errorMsg}
                  </Alert>
                )}

                <Grid item xs={12}>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="0"
                          control={
                            <Radio
                              value="0"
                              onChange={(e) => {
                                setStatus(parseInt(e.target.value));
                              }}
                            />
                          }
                          label="New Student"
                        />
                        <FormControlLabel
                          value="1"
                          control={
                            <Radio
                              value="1"
                              onChange={(e) => {
                                setStatus(parseInt(e.target.value));
                              }}
                            />
                          }
                          label="Old Student"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    autoComplete="given-name"
                    name="fname"
                    required
                    fullWidth
                    id="fname"
                    label="First Name"
                    autoFocus
                    value={fname}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lname"
                    label="Last Name"
                    name="lname"
                    autoComplete="family-name"
                    value={lname}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    autoComplete="given-name"
                    name="first_name"
                    required
                    fullWidth
                    id="first_name"
                    label="Guardian First Name"
                    autoFocus
                    value={first_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="last_name"
                    label="Guardian Last Name"
                    name="last_name"
                    autoComplete="family-name"
                    value={last_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    margin="normal"
                  >
                    <DesktopDatePicker
                      id="date"
                      name="date"
                      label="Date"
                      inputFormat="MM/dd/yyyy"
                      required
                      fullWidth
                      value={birthday}
                      onChange={handleDate}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="school_last_attended"
                    label="School Last Attended"
                    name="school_last_attended"
                    autoComplete="school_last_attended"
                    value={school_last_attended}
                    onChange={handleChange}
                  />
                </Grid>
                <FormControl margin="normal" fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Course or Strand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={courseID}
                    name="courseID"
                    label="Course or Strand"
                    onChange={handleChange}
                  >
                    {course.map((page) => (
                      <MenuItem value={page.id} key={page.id}>
                        {`${page.courseCode} (${page.slot})`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl margin="normal" fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Campus
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={campusID}
                    name="campusID"
                    label="Campus"
                    onChange={handleChange}
                  >
                    {campus.map((page) => (
                      <MenuItem value={page.id} key={page.id}>
                        {page.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="note"
                    label="Note"
                    name="notes"
                    rows={4}
                    value={note}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="0"
                          control={
                            <Radio
                              value="0"
                              onChange={(e) => {
                                setGender(parseInt(e.target.value));
                              }}
                            />
                          }
                          label="Female"
                        />
                        <FormControlLabel
                          value="1"
                          control={
                            <Radio
                              value="1"
                              onChange={(e) => {
                                setGender(parseInt(e.target.value));
                              }}
                            />
                          }
                          label="Male"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
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
        ) : (
          <PDF value={result} />
        )}
      </Paper>
    </main>
  );
}
