import { MaterialIcons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store";
import HistoryScreen from "./views/HistoryScreen";
import HomeScreen from "./views/HomeScreen";
import LanguageScreen from "./views/LanguageScreen";

// const BottomTab = createMaterialBottomTabNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootStackParamList>();
const TopTab = createMaterialTopTabNavigator<MianStackParamList>();

type RootStackParamList = {
  Home: undefined;
  History: undefined;
};

type MianStackParamList = {
  Translate: undefined;
  Language: undefined;
};

const bottomTabIconPropsMap = {
  Home: {
    name: "g-translate",
    size: 24,
  },
  History: {
    name: "history",
    size: 24,
  },
};

const getTabBarIconByRouterName = (
  name: keyof typeof bottomTabIconPropsMap,
  iconProps: Omit<IconProps<string>, "name">
) => {
  const defaultProps = bottomTabIconPropsMap[name] as IconProps<"g-translate">;

  return <MaterialIcons {...defaultProps} {...iconProps} />;
};

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: "#4b3c96",
              height: 50,
            },
            tabBarIcon({ color }) {
              return getTabBarIconByRouterName(route.name, { color });
            },
            tabBarActiveTintColor: "#1c1b21",
            tabBarInactiveTintColor: "#bfbfbf",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "900",
            },

            headerTintColor: "#fff",
          })}
        >
          <BottomTab.Screen name="Home" options={{ title: "主页" }}>
            {() => (
              <TopTab.Navigator initialRouteName="Translate">
                <TopTab.Screen
                  name="Translate"
                  options={{
                    title: "翻译",
                  }}
                  component={HomeScreen}
                />
                <TopTab.Screen
                  name="Language"
                  options={{
                    title: "语言",
                  }}
                  component={LanguageScreen}
                />
              </TopTab.Navigator>
            )}
          </BottomTab.Screen>
          <BottomTab.Screen
            name="History"
            options={{ title: "历史" }}
            component={HistoryScreen}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <BottomTab.Navigator
            initialRouteName="Home"
            activeColor="#9b529b"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: "#877a87" }}
            screenOptions={({ route }) => ({
              tabBarStyle: { backgroundColor: "powderblue" },
              tabBarIcon({ color }) {
                return getTabBarIconByRouterName(route.name, { color });
              },
            })}
          >
            <BottomTab.Screen name="Home" options={{ title: "主页" }}>
              {() => (
                <TopTab.Navigator initialRouteName="Translate">
                  <TopTab.Screen
                    name="Translate"
                    options={{
                      title: "翻译",
                    }}
                    component={HomeScreen}
                  />
                  <TopTab.Screen name="Language" component={LanguageScreen} />
                </TopTab.Navigator>
              )}
            </BottomTab.Screen>
            <BottomTab.Screen
              name="History"
              options={{ title: "历史" }}
              component={HistoryScreen}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
