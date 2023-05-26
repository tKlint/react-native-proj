import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Profile(props: StackProps) {
  const { navigation, route } = props;
  const pressHandle = () => {
    navigation.navigate('Setting')
  }

  useEffect(() => {
    const remove1 = navigation.addListener('focus', () => {
      console.log('welcome')
    })
    const remove2 = navigation.addListener('blur', () => {
      console.log('bay')
    })
    return () => {
      console.log('页面销毁')
      remove1()
      remove2()
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text>this is Profile</Text>
      <Button title="返回设置主页" onPress={pressHandle}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
