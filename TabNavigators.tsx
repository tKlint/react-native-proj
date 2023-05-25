import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons'
import 'react-native-gesture-handler';

import Home from "./views/Home";
import Detail from "./views/Detail";
import Setting from './views/Setting';
import Profile from './views/Profile';

const HomeStack = createNativeStackNavigator()
const SettingStack = createNativeStackNavigator()

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{
        headerTintColor: '#fb7299',
        headerStyle: {
          backgroundColor: 'skyblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}> 
        <Stack.Screen name="Home" component={Home} options={{ title: '首页' }} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: '详情' }} />
      </Stack.Navigator> */}

      <Tab.Navigator
        barStyle={{ backgroundColor: '#694fad' }}
        // activeColor="#f0edf6"
        initialRouteName="Home"
        inactiveColor="#3e2465"
        screenOptions={({ route }) => (
          {
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              let iconname = null;
              if (route.name === 'First') {
                iconname = focused ? "home" : "home-outline"
              } else if (route.name === 'Second') {
                iconname = focused ? "settings" : "settings-outline"
              }
              // @ts-ignore
              return <Ionicons name={iconname} size={26}  color={color} />
            }
          }
        )}
      >
        <Tab.Screen name='First' options={{
          tabBarBadge: 3
        }}>
          {() => (
            <HomeStack.Navigator
              screenOptions={{
                headerTintColor: '#fb7299',
                headerStyle: {
                  backgroundColor: 'skyblue',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }}
            >
              <HomeStack.Screen name="Home" component={Home} options={{ title: '首页' }} />
              <HomeStack.Screen name="Detail" component={Detail} options={{ title: '详情' }} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name='Second'>
          {() => (
            <SettingStack.Navigator
              screenOptions={{
                headerTintColor: '#fb7299',
                headerStyle: {
                  backgroundColor: 'skyblue',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }}
            >
             <HomeStack.Screen name="Setting" component={Setting} options={{ title: '设置' }} />
             <HomeStack.Screen name="Profile" component={Profile} options={{ title: '配置' }} />
            </SettingStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}