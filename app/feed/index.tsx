import { Text, View } from "react-native";
import React from "react";
import FeedList from "../../components/Composite/Lists/FeedList";
import Story from "../../components/Composite/Cards/Story";
import { dummyVideos } from "../../constants/dummy_Data";

const Feed = () => {
  return (
    <View>
      <Text>Home </Text>
      <Story
        videoUrl={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        }
      />
      {/* <FeedList /> */}
    </View>
  );
};

export default Feed;
