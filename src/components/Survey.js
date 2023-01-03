import { React, useState, useEffect } from "react";
import {
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Typography,
} from "@mui/material";
import axios from "../config/axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = {
  overrides: {
    MuiRadio: {
      root: {
        color: "#134611",
      },
      colorSecondary: {
        "&$checked": {
          color: "#134611",
        },
      },
    },
  },
};

const muiTheme = createTheme(theme);
export default function BasicRating(props) {
  console.log("🚀 ~ file: Survey.js ~ line 32  BasicRating ~ props", props);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([]);
  const [score, setScore] = useState(0);
  const [id, setId] = useState(1);
  const [display, setDisplay] = useState(1);
  console.log(
    "🚀 ~ file: Survey.js ~ line 34 ~ BasicRating ~ category",
    category.length,
    display,
    display === category.length + 1
  );
  useEffect(() => {
    axios.get("/survey").then((response) => {
      setCategory(response.data);
    });
  }, []);

  const handleSubmit = async () => {
    setValue(0);
    setDisplay(display + 1);
    const data = { score: parseInt(value) + parseInt(score) };
    axios.put(`/survey/${id}`, data).then((response) => {
      console.log(response);
    });
  };
  const handleChange = async (e) => {
    setValue(e.target.value);
  };
  const handleSet = async (val) => {
    setId(val.id);
    setScore(val.score);
  };

  return (
    // <ThemeProvider theme={muiTheme}>
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {display < category.length + 1 || display === 1 ? (
        <Box>
          {category.map((row) => (
            <Box key={row.id}>
              {
                <Box>
                  {display === row.id && (
                    <FormControl sx={{ color: "#134611" }}>
                      <FormLabel>{row.category}</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                        sx={{
                          color: "#134611",
                          "&.Mui-checked": {
                            color: "#134611",
                          },
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={
                            <Radio
                              sx={{
                                color: "#134611",
                                "&.Mui-checked": {
                                  color: "#134611",
                                },
                              }}
                              onChange={handleChange}
                              onClick={() => handleSet(row)}
                              disabled={props.value}
                            />
                          }
                          label="1"
                        />
                        <FormControlLabel
                          value={2}
                          control={
                            <Radio
                              sx={{
                                color: "#134611",
                                "&.Mui-checked": {
                                  color: "#134611",
                                },
                              }}
                              onChange={handleChange}
                              onClick={() => handleSet(row)}
                              disabled={props.value}
                            />
                          }
                          label="2"
                        />
                        <FormControlLabel
                          value={3}
                          control={
                            <Radio
                              sx={{
                                color: "#134611",
                                "&.Mui-checked": {
                                  color: "#134611",
                                },
                              }}
                              onChange={handleChange}
                              onClick={() => handleSet(row)}
                              disabled={props.value}
                            />
                          }
                          label="3"
                        />
                        <FormControlLabel
                          value={4}
                          control={
                            <Radio
                              sx={{
                                color: "#134611",
                                "&.Mui-checked": {
                                  color: "#134611",
                                },
                              }}
                              onChange={handleChange}
                              onClick={() => handleSet(row)}
                              disabled={props.value}
                            />
                          }
                          label="4"
                        />
                      </RadioGroup>
                    </FormControl>
                  )}
                </Box>
              }
            </Box>
          ))}

          <Button
            sx={{ my: 2, backgroundColor: "#134611", display: "block" }}
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            disabled={value === 0}
          >
            Submit Survey
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5" gutterBottom>
            Thank you for your feedback.
          </Typography>
          <Typography variant="subtitle1">Have a great day.</Typography>
        </Box>
      )}
      {/* {display < category.length + 1 && ( )} */}
      {/* {display === category.length + 1 ? (
          <Box>
            <Typography variant="h5" gutterBottom>
              Thank you for your feedback.
            </Typography>
            <Typography variant="subtitle1">Have a great day.</Typography>
          </Box>
        ) : null} */}
    </Box>
  );
}
