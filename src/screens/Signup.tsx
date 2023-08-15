import React from "react";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgroundPng from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Signup() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <VStack flex={1} px="10" pb={10}>
        <Image
          source={BackgroundPng}
          alt="Pessoas treinando"
          resizeMode="contain"
          position={"absolute"}
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" mb={6} fontFamily={"heading"}>
            Criar e acessar
          </Heading>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Criar e acessar" />
        </Center>
        <Button title="Voltar para o login" variant={"outline"} mt={24} />
      </VStack>
    </ScrollView>
  );
}
