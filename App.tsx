import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Button, NativeBaseProvider } from "native-base";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NativeBaseProvider>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button>ok</Button>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
    </NativeBaseProvider>
  );
}
