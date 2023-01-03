import { React, useState, useEffect } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import PDF from "./index";
import BG from "../../img/cover.jpg";
import { PDFViewer } from "@react-pdf/renderer";

export default function pdf(props) {
  console.log("🚀 ~ file: PDF.js ~ line 8 ~ pdf ~ props", props);
  return (
    <main
    // style={{
    //   backgroundImage: `url(${BG})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center center",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <Container component="main">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
            marginTop: 10,
          }}
        >
          <CssBaseline />{" "}
          <PDFViewer style={{ height: 500, width: "100%" }}>
            <PDF value={props.value} />
          </PDFViewer>
        </Box>
      </Container>
    </main>
  );
}
