import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { dummyVideos } from "../../../constants/dummy_Data";
import Story from "../Cards/Story";

const FeedList = () => {
  return (
    <View style={{ backgroundColor: "blue" }}>
      <FlashList
        style={{ backgroundColor: "pink" }}
        data={dummyVideos}
        renderItem={({ item, index }) => <Story videoUrl={item?.videoUrl} />}
        estimatedItemSize={3}
      />
    </View>
  );
};

export default FeedList;

const styles = StyleSheet.create({});
