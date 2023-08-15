import { Center, Spinner } from "native-base";
import React from "react";

export function Loading() {
  return (
    <Center bg="gray.900" flex={1}>
      <Spinner color={"green.500"} />
    </Center>
  );
}
