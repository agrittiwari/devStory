import React, { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Checkbox,
  Chip,
  HelperText,
  Modal,
  Portal,
  TextInput,
} from "react-native-paper";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { commonStyle } from "../../constants/style";
import { log, titleCaseToReadable } from "../../utils/helpers";
import SearchBar from "./Searchbar";
import { H3, P1 } from "./StyledText";
import { Text } from "./Themed";
import { Row } from "./StyledView";
import Icon from "./Icon";
import Button from "./Button";

export type Item = {
  label: string;
  value: string;
};

type PickerSelectButtonProps = {
  value?: string;
  placeholder: string;
  onValueChange?: (value: string, index: number) => void;
  items: Item[];
  isRequired?: boolean;
  disabled?: boolean;
  showSearchBar?: boolean;
  stockInStatus?: string;
  variant?: "multiCheckbox" | "normal";
  multiSelectTitle?: string;
  selectedItems?: Item[];
  setSelectedItems?: React.Dispatch<React.SetStateAction<Item[]>>;
};

export default function PickerSelectButton({
  items,
  onValueChange,
  placeholder,
  value,
  isRequired,
  disabled,
  showSearchBar = false,
  stockInStatus,
  variant,
  multiSelectTitle = "Add selected Item",
  selectedItems,
  setSelectedItems,
}: PickerSelectButtonProps) {
  const [pickerVisible, setPickerVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [searchText, setSearchText] = useState<string>("");
  const [multipleItems, setMultipleItems] = useState<Item[]>([]);

  useEffect(() => {
    if (isRequired && !value && value?.length <= 0) {
      setErrorMessage("This is a required field");
    } else if (errorMessage) {
      setErrorMessage(undefined);
    }
  }, [isRequired, value]);

  useEffect(() => {
    setMultipleItems(selectedItems);
  }, [selectedItems]);
  function openPicker() {
    setPickerVisible(true);
  }
  function closePicker() {
    setPickerVisible(false);
    !!setSelectedItems && setSelectedItems([...multipleItems]);
  }
  function onPressModalItem(value: string, index: number) {
    onValueChange(value, index);
    closePicker();
    setSearchText("");
  }
  function handleChangeText(text: string) {
    if (!text || text.length <= 0) {
      setSearchText("");
    } else {
      setSearchText((old) => text);
    }
  }

  function onSelectingItem(i: Item) {
    log("clicked", i?.label);
    multipleItems &&
      i?.label &&
      i?.value &&
      setMultipleItems([
        ...multipleItems,
        {
          label: i?.label,
          value: i?.value,
        },
      ]);
    // !!setSelectedItems && setSelectedItems([...selectedItems, ...multipleItems])
  }

  function onRemovingItem(i: Item) {
    log("remove click", selectedItems);
    const updatedItems = multipleItems?.filter(
      (item) => item?.value !== i?.value
    );

    // Update the state with the new array
    setMultipleItems([...updatedItems]);

    !!setSelectedItems && setSelectedItems(updatedItems);

    // log('after remove click', selectedItems)
  }

  function onPressingCheckbox(i: Item) {
    if (multipleItems?.some((item) => item?.label === i?.label)) {
      onRemovingItem(i);
    } else {
      onSelectingItem(i);
    }
  }

  if (variant === "multiCheckbox") {
    return (
      <TouchableOpacity onPress={!disabled ? openPicker : undefined}>
        <TextInput
          underlineColor={"white"}
          activeOutlineColor={"black"}
          outlineColor={Colors.light.inputBg}
          mode={"outlined"}
          style={{
            margin: Layout.baseSize * 0.5,
            backgroundColor: Colors.light.inputBg,
          }}
          editable={false}
          // pointerEvents={"box-only"}
          onPressIn={!disabled ? openPicker : undefined}
          label={
            !!multipleItems && multipleItems?.length > 0
              ? multipleItems?.slice()?.map((i) => `${i?.label}, `)
              : placeholder
          }
          value={value && titleCaseToReadable(value)}
          right={
            <TextInput.Icon
              icon={"menu-down"}
              size={Layout.baseSize * 1.8}
              onPress={!disabled ? openPicker : undefined}
              hitSlop={Layout.hitSlop.icon}
              disabled
            />
          }
          // disabled={disabled}
        />
        <View style={styles.chip}>
          {multipleItems?.map((i, index) => (
            <Chip
              mode="outlined"
              compact
              style={{ margin: Layout.baseSize / 4 }}
              key={i?.label}
              closeIcon="close"
              onClose={() => onRemovingItem(i)}
              hitSlop={Layout.hitSlop.icon}
            >
              {i?.label}
            </Chip>
          ))}
        </View>

        {errorMessage && (
          <HelperText type="error" visible={!!errorMessage}>
            {errorMessage}
          </HelperText>
        )}
        <Portal>
          <Modal
            visible={pickerVisible}
            onDismiss={closePicker}
            contentContainerStyle={styles.modalContentContainer}
            style={styles.modalStyle}
          >
            {/* <H3>{placeholder}</H3> */}
            {showSearchBar && (
              <SearchBar
                value={searchText}
                placeholder={placeholder}
                onChangeText={handleChangeText}
              />
            )}

            <ScrollView
              keyboardShouldPersistTaps={"always"}
              showsVerticalScrollIndicator={false}
            >
              {/* {listItems} */}
              {items &&
                items
                  ?.filter((i) =>
                    i.label?.toLowerCase()?.includes(searchText?.toLowerCase())
                  )
                  ?.map((i, index) => (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                      key={`key-${index}`}
                    >
                      <Checkbox.Item
                        status={
                          multipleItems?.some(
                            (item) => item?.label === i?.label
                          )
                            ? "checked"
                            : "unchecked"
                        }
                        label={i?.label}
                        position="leading"
                        key={`picker-item-${i?.value}-${index}`}
                        onPress={() => onPressingCheckbox(i)}
                        color={Colors.light.primary}
                      />
                    </View>
                  ))}
            </ScrollView>
            <Button
              variant="primary"
              title={multiSelectTitle}
              onPress={closePicker}
            />
          </Modal>
        </Portal>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={!disabled ? openPicker : undefined}>
      <TextInput
        underlineColor={"white"}
        activeOutlineColor={"black"}
        outlineColor={Colors.light.inputBg}
        mode={"outlined"}
        style={{
          margin: Layout.baseSize * 0.5,
          backgroundColor: Colors.light.inputBg,
        }}
        editable={false}
        // pointerEvents={"box-only"}
        onPressIn={!disabled ? openPicker : undefined}
        label={placeholder}
        value={value && titleCaseToReadable(value)}
        right={
          <TextInput.Icon
            icon={"menu-down"}
            size={Layout.baseSize * 1.8}
            onPress={!disabled ? openPicker : undefined}
            hitSlop={Layout.hitSlop.icon}
            disabled
          />
        }
        // disabled={disabled}
      />
      {!!stockInStatus && (
        <View
          style={{
            paddingTop: 2,
            alignItems: "flex-end",
            paddingRight: 10,
          }}
        >
          <Text style={{ paddingTop: 4 }}>{`Status:${stockInStatus} `}</Text>
        </View>
      )}
      {errorMessage && (
        <HelperText type="error" visible={!!errorMessage}>
          {errorMessage}
        </HelperText>
      )}
      <Portal>
        <Modal
          visible={pickerVisible}
          onDismiss={closePicker}
          contentContainerStyle={styles.modalContentContainer}
          style={styles.modalStyle}
        >
          <H3>{placeholder}</H3>
          {showSearchBar && (
            <SearchBar
              value={searchText}
              placeholder={placeholder}
              onChangeText={handleChangeText}
            />
          )}
          <ScrollView keyboardShouldPersistTaps={"always"}>
            {/* {listItems} */}
            {items
              ?.filter((i) =>
                i.label?.toLowerCase()?.includes(searchText?.toLowerCase())
              )
              ?.map((i, index) => (
                <TouchableOpacity
                  key={`picker-item-${i?.value}-${index}`}
                  onPress={() => {
                    console.log("i.value", i?.value);
                    onPressModalItem(i?.value, index);
                  }}
                  style={commonStyle.paddingVertical16}
                >
                  <P1 style={styles.labelStyle}>{i?.label}</P1>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </Modal>
      </Portal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  picker: {
    borderRadius: Layout.baseSize * 0.25,
    backgroundColor: Colors.light.background,
    height: Layout.baseSize * 6,
    // margin: Layout.baseSize * 0.5,
  },
  chip: {
    // alignContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
    // alignSelf: 'auto',
    // lineHeight: Layout.baseSize,
    // maxWidth: Layout.baseSize * 8,
  },
  modalStyle: { flex: 1, marginVertical: Layout.baseSize * 2 },
  modalContentContainer: {
    backgroundColor: Colors.light.background,
    padding: Layout.baseSize / 2,
    marginTop: Layout.baseSize * 2,
    marginBottom: Layout.baseSize * 5,
    marginHorizontal: Layout.baseSize,
    borderRadius: Layout.baseSize / 4,
  },
  labelStyle: { height: Layout.baseSize * 1.2 },
});
