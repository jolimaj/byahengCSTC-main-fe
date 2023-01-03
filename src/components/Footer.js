// import * as React from "react";
// import { Box, Typography, Link } from "@mui/material";

// export default function FixedBottomNavigation() {
//   function Copyright() {
//     return (
//       <Typography variant="body2" color="secondary" align="center">
//         {" © "}
//         <Link
//           color="inherit"
//           underline="none"
//           href="https://byaheng-cstc.herokuapp.com/"
//         >
//           CSTC COLLEGE OF SCIENCES, TECHNOLOGY AND COMMUNICATIONS, INC.
//         </Link>{" "}
//         {new Date().getFullYear()}
//         {"."}
//       </Typography>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         bgcolor: "primary.main",
//         p: 2,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         mt: `auto`,
//         display: "flex",
//         flexDirection: "column",
//       }}
//       component="footer"
//     >
//       <Typography variant="h6" align="center" color="secondary" gutterBottom>
//         <Copyright />
//       </Typography>
//     </Box>
//   );
// }
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {" © "}
      <Link
        color="secondary"
        underline="none"
        href="https://byaheng-cstc.herokuapp.com/"
      >
        CSTC COLLEGE OF SCIENCES, TECHNOLOGY AND COMMUNICATIONS, INC.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "primary.main",
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
