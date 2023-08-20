import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TriggerCard from "../Cards/TriggerCard";
import { Divider } from "react-native-paper";

// FIXME: sync it with grafbase schema
export type Trigger = {
  id: number;
  about: string;
  by: string;
  poked: string[];
};

const TriggersList = () => {
  function renderItem({ item, index }: { item: Trigger; index: number }) {
    return (
      <TriggerCard
        trigger={item?.about}
        triggeredDevs={item?.poked}
        triggeredby={item?.by}
        key={item?.id}
      />
    );
  }

  const triggerData: Trigger[] = [
    {
      id: 1,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 2,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 3,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 4,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 5,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 1,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 2,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 3,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 8,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 10,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 1,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 2,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 3,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 12,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 15,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 1,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 2,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 3,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 16,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 20,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 1,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 2,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 3,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 24,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
    {
      id: 25,
      about: "Typescript is hard than learning JS",
      by: "PrimeAgen",
      poked: ["Trash", "Theo"],
    },
  ];
  return (
    <FlatList
      data={triggerData}
      keyExtractor={({ id }) => `lead-preview-${id}`}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TriggersList;

const styles = StyleSheet.create({});
