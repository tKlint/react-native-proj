
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import HomeScreen from './views/HomeScreen';
import LanguageScreen from './views/LanguageScreen';
import HistoryScreen from './views/HistoryScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const BottomTab = createBottomTabNavigator<RootStackParamList>();
const TopTab = createMaterialTopTabNavigator<MianStackParamList>();


type MianStackParamList = {
  Translate: undefined;
  Language: undefined;
};

type RootStackParamList = {
  Home: undefined,
  History: undefined
}

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

export default function AppNavigator() {
  const insets = useSafeAreaInsets()
  console.log(insets.top)
  return (
    // <View>
       <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: "#4b3c96",
              height: insets.top,
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
    // </View>
  )
}
