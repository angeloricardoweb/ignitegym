import { IPressableProps, Pressable, Text } from "native-base";
import React from "react";
type Props = IPressableProps & {
  name: string;
  isActive?: boolean;
};
export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr="3"
      w="24"
      h="10"
      bg={"gray.600"}
      rounded={"md"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
      isPressed={isActive}
      _pressed={{
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    >
      <Text
        fontSize="xs"
        color={isActive ? "green.500" : "gray.100"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
      >
        {name}
      </Text>
    </Pressable>
  );
}
