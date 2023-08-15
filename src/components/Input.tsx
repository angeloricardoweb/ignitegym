import { View, Text } from "react-native";
import React from "react";
import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize={"md"}
      color={"white"}
      mb={4}
      {...rest}
      placeholderTextColor={"gray.400"}
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
    />
  );
}
