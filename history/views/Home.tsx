import React from 'react'
import { Text, View, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { decrement, increment } from '../store/usersReducer';
import { AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video } from 'expo-av';

const Tab = createMaterialTopTabNavigator();

function A() {
  const users = useAppSelector((store) => store.users)
  
  return (
    <View>
      <Text>count: {users.value}</Text>
      <Text>AAA</Text>
    </View>
  )
}
function B() {
  const video = React.useRef<Video>(null);
  const dispatch = useAppDispatch()
  const [status, setStatus] = React.useState<AVPlaybackStatusSuccess>();
  const increPressHandle = () => {
    dispatch(increment())
  }
  const decrePressHandle = () => {
    dispatch(decrement())
  }
  return (
    <View>
      <Text>BBB</Text>
      <Button title="in" onPress={increPressHandle}/>
      <Button title="de" onPress={decrePressHandle}/>
      <Video
        ref={video}
        style={{
          width: 320,
          alignItems: 'center',
          alignSelf: 'center',
          height: 200
        }}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => {
          if (status.isLoaded) {
            setStatus(() => status)
          }
        }}
      />
      <View>
        <Button
          title={status?.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status?.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
          }
        />
      </View>
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