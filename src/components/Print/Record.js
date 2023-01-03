import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#3778C2",
  },
});

export default function InvoiceItemsTable(props) {
  const datas = props.value.data;
  const date = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <View>
      <View
        style={{
          margin: 20,
          fontSize: 25,
          textAlign: "center",
          color: "#134611",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        <Text>Pre-Enrollment Form</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          display: "flex",
          flexDirection: "row",
          fontSize: 14,
        }}
      >
        <View
          style={{
            textTransform: "capitalize",
            float: "right",
            marginRight: "50%",
            fontSize: 14,
          }}
        >
          <Text>{`Enroll As: ${datas.enroll_as}`}</Text>
        </View>
        <View
          style={{ textTransform: "capitalize", float: "left", fontSize: 14 }}
        >
          <Text>{`Date: ${
            month[date.getMonth()]
          } ${date.getDay()}, ${date.getFullYear()}`}</Text>
        </View>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Name: ${datas.first_name} ${datas.last_name}`}</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Birthday: ${
          month[new Date(datas.birthdate).getMonth()]
        } ${new Date(datas.birthdate).getDay()}, ${new Date(
          datas.birthdate
        ).getFullYear()}`}</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Gender: ${datas.gender}`}</Text>{" "}
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Address: ${datas.address}`}</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Mobile Number: ${datas.phone}`}</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Email Address: ${datas.email}`}</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Guardian: ${datas.guardian}`}</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`School Last Attended: ${datas.school_last_attended}`}</Text>
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Campus: ${datas.campus}`}</Text>{" "}
      </View>
      <View
        style={{
          textTransform: "capitalize",
          fontSize: 14,
          paddingRight: "20%",
        }}
      >
        <Text>{`Course: ${datas.course}`}</Text>
      </View>
    </View>
  );
}
