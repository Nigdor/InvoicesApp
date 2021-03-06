import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import ReactPDF from "@react-pdf/renderer";
// import ReactDOM from "react-dom";
import styled from "styled-components";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
const AdressSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
//  ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
export const Pdf = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);
