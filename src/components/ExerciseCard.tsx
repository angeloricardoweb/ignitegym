import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  name: string;
};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems={"center"} p="2" rounded="md" mb="3">
        <Image
          source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
          alt="Exercise"
          h={16}
          w={16}
          rounded="md"
          mr="4"
          resizeMode="center"
        />
        <VStack flex="1">
          <Heading color="white" fontSize="lg">
            Remada unilateral
          </Heading>
          <Text color="gray.200" fontSize={"sm"} numberOfLines={3}>
            3 séries x 12 Repetições
          </Text>
        </VStack>
        <Icon as={<Entypo name="chevron-right" />} color="gray.300" size="sm" />
      </HStack>
    </TouchableOpacity>
  );
}
