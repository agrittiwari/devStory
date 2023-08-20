import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { H1, H2, P2 } from "../../basic/StyledText";
import { Divider } from "react-native-paper";
import { Row } from "../../basic/StyledView";
import { Link } from "expo-router";

type TriggerCardProps = {
  trigger: string;
  triggeredDevs: string[];
  triggeredby: string;
};

const TriggerCard = ({
  trigger,
  triggeredDevs,
  triggeredby,
}: TriggerCardProps) => {
  return (
    <Link href="/(tabs)/two">
      <H1>{trigger}</H1>
      <Divider />
      <Row>
        <P2>by:{triggeredby}</P2>
        <H2>{triggeredDevs?.map((d) => d)}</H2>
      </Row>
    </Link>
  );
};

export default TriggerCard;

const styles = StyleSheet.create({});
