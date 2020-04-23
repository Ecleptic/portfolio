import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: { backgroundColor: "tomato" },
  section: { color: "white", textAlign: "center", margin: 30 },
})

const Resume = ({ pageContext }) => {
  const portfolio = pageContext.portfolio
  //   https://react-pdf.org/styling
  return (
    <PDFViewer style={{ minWidth: "100%", minHeight: "95vh" }} title="Cameron Green's Resume" author="Cameron Green">
      <Document title="Cameron Green's Resume" author="Cameron Green">
        <Page size="A4">
          <View style={{ width: "100%" }}>
            <Text>{portfolio.name}</Text>
            <Text>{portfolio.title}</Text>
          </View>
          <View>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default Resume
