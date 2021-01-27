import React, { useEffect } from "react";
import { ScrollView,StyleSheet,TouchableOpacity } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";
import {fetchData} from "../Redux/actionCreator";

const TableComponent = (props) => {

useEffect(()=>{
    const inteval = setInterval(()=>{
        fetchData(props.currentPage)
    },10000);
    return function cleanup () {inteval};
});

useEffect(()=>{
    if(props.pageLimit===-1){
        fetchData(props.currentPage);
    }
},[])

  return (
    <ScrollView style={styles.container}>
        <StatusBar />
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={props.headerData}
          style={styles.head}
          textStyle={styles.text}
        />
      </Table>
      <Table>
          {props.rowsData.map((rowData,index)=>{
              <TouchableOpacity onPress={()=>{props.navigation.navigate("details",{data:rowData[index]})}}>
                  <Row
                        data={rowData}
                        style={styles.row}
                        textStyle={styles.text}
                    />
              </TouchableOpacity>
          })}
      </Table>
        <Rows data={props.rowsData} textStyle={styles.text} />
      
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
    return {
    currentPage:state.currentPage,
    errorMessage=state.errorMessage,
    headerData=state.headerData,
    rowsData=state.rowsData,
    dataArray=state.dataArray,
    pageLimit=state.pageLimit
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchData = (pg) => dispatch(fetchData(pg))
});

export default connect (mapStateToProps,mapDispatchToProps) (TableComponent);
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
