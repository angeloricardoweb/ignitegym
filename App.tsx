import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Button, NativeBaseProvider } from "native-base";
import { Loading } from "@components/Loading";
import { THEME } from "./src/theme";
import { Signin } from "@screens/Signin";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <>
          <Signin />
          <StatusBar
            barStyle="light-content"
            backgroundColor={"transparent"}
            translucent
          />
        </>
      )}
    </NativeBaseProvider>
  );
}
