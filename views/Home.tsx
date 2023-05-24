import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Home(props: StackProps<'Home'>) {
  const { navigation, route } = props;
  const pressHandle = () => {
    navigation.navigate('Detail', {
      id: '232',
      name: '哥哥'
    })
  }
  return (
    <View>
      <Text>
        this is home page
      </Text>
      <Text>
        {route.params?.message ?? 'no message'}
      </Text>
      <Button onPress={pressHandle} title="go to detail" />
    </View>
  )
}
Home.displayName = 'home'