import { React, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/config/theme";
import Tour from "./components/Tour";
import SignUp from "./components/Tour/register";
import SignIn from "./components/Tour/login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import CreatePassword from "./components/Password/CreatePassword";
import PasswordReset from "./components/Password/PasswordReset";
import PreEnroll from "./components/PreEnroll";
import FAQ from "./components/FAQ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="activity" element={<Activities />} />
          <Route exact path="faq" element={<FAQ />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="tour/signup" element={<SignUp />} />
          <Route exact path="tour/signin" element={<SignIn />} />
          <Route exact path="tour/signin" element={<SignIn />} />
          <Route exact path="tour" element={<Tour />} />
          <Route
            exact
            path={`signin/password-reset/:id/:token`}
            element={<CreatePassword />}
          />
          <Route
            exact
            path={`signin/password-setup/:id/:token`}
            element={<CreatePassword />}
          />
          <Route
            exact
            path="tour/signin/forgot-password"
            element={<PasswordReset />}
          />
          <Route exact path="tour/pre_enroll" element={<PreEnroll />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
