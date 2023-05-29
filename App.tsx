import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import AppNavigator from "./AppNavigator";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NativeBaseProvider>
            <AppNavigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
