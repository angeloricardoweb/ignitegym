import React, { useState } from "react";
import { Center, FlatList, HStack, Heading, Text, VStack } from "native-base";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groupSelected, setGroupSelected] = useState<string>("Ombros");
  const [groups, setGroups] = useState<string[]>([
    "Ombros",
    "Costas",
    "Peito",
    "Biceps",
    "Triceps",
    "Pernas",
    "Abdomen",
  ]);
  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={item === groupSelected}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />
      <VStack flex="1" px="8" mb="5">
        <HStack justifyContent={"space-between"}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercícios
          </Heading>
          <Text color={"amber.200"} fontSize="sm">
            4
          </Text>
        </HStack>
        <ExerciseCard />
        <ExerciseCard />
      </VStack>
      <Text>Home</Text>
    </VStack>
  );
}
