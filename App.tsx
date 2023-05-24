import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./views/Home";
import Detail from "./views/Detail";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}