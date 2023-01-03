import { React, useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Box,
  Container,
  Card,
  CardMedia,
} from "@mui/material";
import axios from "../config/axios";
import NavBar from "./NavBar";
import Header from "../img/front.jpg";

function About() {
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
      <Box sx={{ flexGrow: 1, mx: 10, py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={5}>
            <Container fixed sx={{  mt: 10 }}>
              <Card
                style={{
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  alt="Header"
                  image={Header}
                  title="Header"
                  width={`100%`}
                  height="500"
                />
              </Card>
            </Container>
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
            <Container fixed sx={{ justifyContent: "flex-end", mt: 10 }}>
              <Typography
                component="h3"
                variant="h3"
                color="primary"
                fontFamily="PoppinsBold"
              >
                Our History
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                CSTC’s humble beginnings trace back on January 1991
              </Typography>
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                style={{
                  fontWeight: "400",

                  align: "justify",
                }}
              >
                This ideal has enthused Mr. Nelson Diasanta Mendoza, Founder,
                President and CEO of CSTC Inc., to take passion in establishing
                an educational institution that would cater to the needs of
                aspiring students and would-be professionals, technocrats and
                service people.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                style={{
                  fontWeight: "400",
                  align: "justify",
                }}
              >
                CSTC’s humble beginnings trace back on January 1991 when it
                offered its first Computer Literacy Program (CLP) under the
                Department of Education, Culture and Sports (DECS), in
                partnership with Holy Rosary Academy in Sta. Rosa, Laguna. The
                pioneering years were very challenging yet a promising one.
                After two years, in 1993, CSTC offered another Computer Literacy
                Awareness Program (CLAP), in partnership with Leon Guinto
                Memorial College in Atimonan, Quezon. In 1996, the CLAP expanded
                to Sariaya, Quezon in partnership with Lutucan National High
                School, Canda National High School, Sariaya Institute and
                Sariaya East Central School. From 1991 to 1997, CSTC under the
                banner of CSTC Computer Systems Technology Center, became a
                training provider of Computer Literacy Program under DECS.
              </Typography>
              {/* </Box> */}
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Container fixed>
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                style={{
                  fontWeight: "400",

                  align: "justify",
                }}
              >
                On July 7, 1997, CSTC Computer Systems Technology Center was
                officially registered and recognized as a TVET Provider under
                the Technical Education and Skills Development Authority
                (TESDA). Since then, CSTC continues to move forward and farther
                at a pace fast enough to be at the forefront of the technical
                education development and progress. From 1997 to 2003, CSTC
                Computer Systems Technology Center continued to flourish as a
                TESDA Registered Training Center, with branches in Atimonan and
                Sariaya, Quezon.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                style={{
                  fontWeight: "400",

                  align: "justify",
                }}
              >
                In 2004, as it offered long-term technological courses. CSTC
                changed its name to CSTC Computer Systems Technological College.
                During this period, CSTC began to make noise as a pacesetter not
                only in the field of technical education and training, but in
                skills excellence as well. CSTC had the privilege to participate
                in different skills competitions locally and internationally.
                From provincial to regional level, zonal to national
                competitions, and up to competing at World Skills Asean
                Competition as a Philippine representative. Proud CSTCians
                continue to rise up with the challenges of global demands in
                skills competency, bringing home the glory and victory.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                style={{
                  fontWeight: "400",

                  align: "justify",
                }}
              >
                In the year 2011, CSTC was blessed to open Higher Education
                Degree Programs under the Commission on Higher Education (CHED),
                offering following courses; BSED Bachelor of Secondary
                Education, BSIT Bachelor of Information Technology, BSBA
                Bachelor of Business Administration, BSHRM Bachelor of Science
                in Hotel and Restaurant Management. CSTC was consistently ranked
                among the 2017, 2018 and 2019 Best Philippine Schools to study
                SECONDARY TEACHER EDUCATION based on overall board exam
                performance, number of examinees, top performing examinees,
                accreditation status, and faculty-student ratio. CSTC also
                prospered in the field of Information Technology, Business
                Administration and Tourism and Hospitality Management Education,
                with several winnings in various Regional and National
                Competitions participated by both professionals and students.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                style={{
                  fontWeight: "400",

                  align: "justify",
                }}
              >
                In 2013, CSTC launched Junior High School Program under the
                Department of Education (DepEd). Later in 2016, the Senior High
                School Program was eventually offered in response for the
                implementation of the K to 12 Program and became the home of the
                most numbered of senior high school students in the province.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                style={{
                  fontWeight: "400",

                  align: "justify",
                }}
              >
                In 2015, with its rapid growth that underscore its vision of
                becoming a top transformational learning institution, CSTC
                formerly known as CSTC Computer Systems Technological College,
                Inc., changed its name to the CSTC College of Sciences,
                Technology and Communications, Inc., to continuously build its
                quality standard which is defined in its ultimate goal:
                BESTFORMS.
              </Typography>
              {/* </Box> */}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default About;
