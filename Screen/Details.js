import React from "react";
import { View, Text } from "react-native";

const Details = ({ route, navigation }) => {
  const { dataObj } = route.params;

  const data = dataObj;

  return (
    <View>
      <Text>title {data.title}</Text>
      <Text>url:{data.url}</Text>
      <Text>author:{data.author}</Text>
      <Text>created_at:{data.created_at}</Text>
      <Text>points:{data.points}</Text>
      <Text>story_text:{data.story_text}</Text>
      <Text>comment_text:{data.comment_text}</Text>
      <Text>num_comments:{data.num_comments}</Text>
      <Text>story_id:{data.story_id}</Text>
      <Text>story_title:{data.story_title}</Text>
      <Text>story_url:{data.story_url}</Text>
      <Text>parent_id:{data.parent_id}</Text>
      <Text>created_at_i:{data.created_at_i}</Text>
      <Text>Tags</Text>
      {data._tags.map((tag) => (
        <Text>{tag}</Text>
      ))}
      <Text>objectID:{data.objectID}</Text>
    </View>
  );
};

export default Details;
