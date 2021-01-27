import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { fetchData } from "../redux/actionCreator";
const axios = require("axios");

const Main = (props) => {
  const [isWorking, setIsworking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      props.requestNewpage(props.page);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (props.page === -1) {
      props.requestNewpage(props.page);
    }
  }, []);

  return (
    <ScrollView>
      <StatusBar />
      <Table borderStyle={{ borderWidth: 1, borderColor: "#ffa1d2" }}>
        <Row
          data={props.headData}
          style={styles.head}
          textStyle={styles.text}
        />
      </Table>
      <Table>
        {props.rowData.map((row, index) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("details", {
                dataObj: props.dataArray[index],
              });
            }}
          >
            <Row
              key={index}
              data={row}
              style={[styles.row, index % 2 && { backgroundColor: "#ffffff" }]}
              textStyle={styles.text}
            />
          </TouchableOpacity>
        ))}
      </Table>
      <Text>last page no {props.page}</Text>
    </ScrollView>
  );
};

mapStateToProps = (state) => {
  return {
    dataArray: state.dataArray,
    headData: state.headData,
    rowData: state.rowData,
    page: state.page,
    errorMessage: state.errorMessage,
    limit: state.limit,
  };
};

mapDispatchToProps = (dispatch) => ({
  requestNewpage: (pg) => dispatch(fetchData(pg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#ffffff",
  },
  head: {
    height: 50,
    backgroundColor: "#6F7BD9",
  },
  text: {
    textAlign: "center",
    fontWeight: "200",
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    backgroundColor: "#F7F8FA",
  },
});
