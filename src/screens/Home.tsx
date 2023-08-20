import React from "react";
import { Center, FlatList, HStack, Text, VStack } from "native-base";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <Group name="Costas" isActive={false} />
        <Group name="Ombros" isActive={true} />
      </HStack>
      <Text>Home</Text>
    </VStack>
  );
}
