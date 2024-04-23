import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Navigation from "./components/Navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope: require("./assets/fonts/Manrope-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Navigation />;
}
