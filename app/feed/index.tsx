import { Text, View } from "react-native";
import React, { useRef } from "react";
import FeedList from "../../components/Composite/Lists/FeedList";
import Story from "../../components/Composite/Cards/Story";
import { dummyVideos } from "../../constants/dummy_Data";
import Video, { VideoRef } from "react-native-video";

const Feed = () => {
  const videoRef = useRef<VideoRef>(null);

  function onError() {
    console.log("onError");
  }
  function onBuffer() {
    console.log("onBuffer");
  }
  return (
    <View>
      <Text>Home </Text>
        videoUrl={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        }
      />
      <Video
        // Can be a URL or a local file.
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        }}
        // Store reference
        ref={videoRef}
        // Callback when remote video is buffering
        onBuffer={onBuffer}
        // Callback when video cannot be loaded
        onError={onError}
        style={{ flex: 1 }}
      /> */}
      <FeedList />
    </View>
  );
};

export default Feed;
