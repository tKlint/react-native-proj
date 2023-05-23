import { Button, HStack } from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

export default function AnimatedExp() {
  const [opacity] = useState( new Animated.Value(0))
  const [rotate] = useState( new Animated.Value(0))

  // const rotate = useRef(new Animated.Value(0)).current
  const fadeInHandle = () => {
    // Animated.timing(opacity, {
    //   toValue: 1,
    //   duration: 2000,
    //   easing: Easing.linear,
    //   useNativeDriver: true
    // }).start()
    Animated.parallel([
       Animated.spring(opacity, {
        toValue: 1,
        // duration: 1000,
        // easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.spring(rotate, {
        toValue: 1,
        // duration: 500,
        // easing: Easing.linear,
        useNativeDriver: true
      }),
     
    ]).start()
    // setOpacity(1)
  }
  const fadeOutHandle = () => {
    console.log('dd')
    Animated.parallel([
      Animated.spring(opacity, {
       toValue: 0,
      //  duration: 500,
      //  easing: Easing.linear,
       useNativeDriver: true
     }),
     Animated.spring(rotate, {
       toValue: 0,
      //  duration: 300,
      //  easing: Easing.linear,
       useNativeDriver: true
     })
    
   ]).start()
    // Animated.timing(opacity, {
    //   toValue: 0,
    //   duration: 2000,
    //   easing: Easing.linear,
    //   useNativeDriver: true,
      
    // }).start()
  }
  useEffect(() => {
    console.log('opacity', opacity)
  }, [opacity])
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadeinContainer, {
        opacity,
        transform: [{
          rotate: rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        }]
      }]}>
        <Text>动画效果</Text>
      </Animated.View>
      <HStack>
        <Button onPress={fadeInHandle}>fadein</Button>
        <Button onPress={fadeOutHandle}>fadeout</Button>
      </HStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  fadeinContainer: {
    width: 300,
    height: 200,
    backgroundColor: 'skyblue'
  }
})