import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native";

const SubArray = ({ arr }) => {
  const subarr = arr.map((item) => {
    <Text>{item}</Text>;
  });

  return subarr;
};

const Details = (props) => {
  const data = props.data;
  const name = Object.keys(data);
  const val = Object.values(data);

  const output = name.map((item, index) => {
    if (item === "_tags") {
      return <SubArray arr={item} />;
    } else {
      return (
        <Text>
          {item} : {val[index]}
        </Text>
      );
    }
  });

  return <ScrollView>{output}</ScrollView>;
};

export default Details;
