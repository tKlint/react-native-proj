import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Setting(props: StackProps) {
  const { navigation } = props;
  const pressHandle = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Text>this is setting</Text>
      <Button title="跳转配置页" onPress={pressHandle} />
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
