import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../img/logo.png";
import Record from "./Record";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: "column",
    width: 20,
  },
  logo: {
    width: 300,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const MyDocument = (props) => (
  <Document title="Pre-Enrollment form download">
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 0,
          backgroundColor: "white",
        }}
      >
        <Image style={styles.logo} src={logo} />
        <Record value={props.value} />
      </View>
    </Page>
  </Document>
);

export default MyDocument;
