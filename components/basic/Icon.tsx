// icon based on fontfiles....
// or a library
// or using images
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleProp, ViewStyle } from "react-native";
import Layout from "../../constants/Layout";

/* NOTE: Helps to auto suggest the icon names of MaterialIcons in the IDE.
  Don't need to create a new type for each icon name separately. Helps to avoid typos.
 */
export type IconName = React.ComponentProps<typeof MaterialIcons>["name"];

export type IconProps = {
  iconName: IconName;
  isFocused?: boolean;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export default function Icon({
  iconName,
  style,
  size = Layout.baseSize * 1.6,
  color = "grey",
  isFocused,
  onPress,
}: IconProps) {
  return (
    <MaterialIcons
      style={style}
      onPress={onPress}
      name={iconName}
      size={size}
      color={color}
    />
  );
}
