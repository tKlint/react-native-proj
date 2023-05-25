import React from 'react'
import { Text, View, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function A() {
  return (
    <View>
      <Text>AAA</Text>
    </View>
  )
}
function B() {
  return (
    <View>
      <Text>BBB</Text>
    </View>
  )
}
export function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="A" component={A} />
        <Tab.Screen name="B" component={B} />
      </Tab.Navigator>
  );
}



export default function Home(props: StackProps<'Home'>) {
  const { navigation, route } = props;
  const pressHandle = () => {
    navigation.navigate('Detail', {
      id: '232',
      name: '哥哥'
    })
  }
  const goToSettingHandle = () => {
    navigation.navigate('Second', {
      screen: 'Setting'
    })
  }
  const openDrawerHandle = () => {
    // navigation.clsoeDrawer()
    navigation.openDrawer()
    // navigation.toggleDrawer()
  }
  return (
    <View>
      <MyTabs />
      <Text> 
        this is home page
      </Text>
      <Text>
        {route.params?.message ?? 'no message'}
      </Text>
      <Button onPress={pressHandle} title="go to detail" />
      <Button title="switch to Setting" onPress={goToSettingHandle} />
      <Button title="open drawer" onPress={openDrawerHandle} />
    </View>
  )
}
Home.displayName = 'home'