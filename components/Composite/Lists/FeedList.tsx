import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { dummyVideos } from "../../../constants/dummy_Data";
import Story from "../Cards/Story";
import Layout from "../../../constants/Layout";

const FeedList = () => {
  return (
    <View style={{ backgroundColor: "blue", height: Layout.window.height }}>
      <FlashList
        contentContainerStyle={{ padding: 10 }}
        style={{ backgroundColor: "yellow" }}
        data={dummyVideos}
        renderItem={({ item, index }) => (
          <Story key={item?.id} title={item?.title} videoUrl={item?.videoUrl} />
        )}
        estimatedItemSize={3}
      />
    </View>
  );
};

export default FeedList;

const styles = StyleSheet.create({});
