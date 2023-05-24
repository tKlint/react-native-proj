
import React from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'
import {useRef} from 'react';

export default function PanResponderExp() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    /**
     * 允许触摸
     * @returns
     */
    onStartShouldSetPanResponder: (e, gestureState) => {
      return true
    },
    onPanResponderGrant(){
      pan.setOffset({
        // @ts-ignore
        x: pan.x._value,
        // @ts-ignore
        y: pan.y._value
      });
    },
    onPanResponderMove:Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y
      }
    ], {
      useNativeDriver: false
    }),
    onPanResponderRelease(e, gestureState) {
      pan.flattenOffset();
      Animated.spring(pan, {
        toValue: {
          x: 0,
          y: 0
        },
        useNativeDriver: false
      }).start()
    },
  })
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {
        transform: [{ translateX: pan.x}, { translateY: pan.y }]
      }]} {...panResponder.panHandlers}>
        
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue'
  }
})