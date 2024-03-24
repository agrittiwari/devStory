import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Video, { VideoRef } from "react-native-video";
import { VideoDataType } from "../../../constants/dummy_Data";

type StoryCardProps = {} & VideoDataType;

const Story = ({ title, videoUrl }: StoryCardProps) => {
  const videoRef = useRef<VideoRef>(null);

  function onError() {
    console.log("onError");
  }
  function onBuffer() {
    console.log("onBuffer");
  }
  return (
    <View style={{ backgroundColor: "pink", height: 400 }}>
      <Text>{title}</Text>
      <Video
        // Can be a URL or a local file.
        source={{
          uri: videoUrl,
        }}
        // Store reference
        ref={videoRef}
        // Callback when remote video is buffering
        onBuffer={onBuffer}
        // Callback when video cannot be loaded
        onError={onError}
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 200,
    width: 200,

    backgroundColor: "blue",
    position: "absolute",
  },
});
