import { Button } from 'native-base'
import React, { useState } from 'react'
import { LayoutAnimation, LayoutAnimationConfig, View, Text } from 'react-native'

const cumstomAnim: Record<'anim1', LayoutAnimationConfig> = {
  anim1: {
    duration: 300,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.opacity,
      springDamping: .1
    },
    update: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.opacity,
      springDamping: .5
    }
  }
}

export default function LayoutAnimateExp() {
  
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(200)
  const [show, setShow] = useState(false)


  const largeWithPress = () => {
    LayoutAnimation.configureNext(cumstomAnim.anim1)
    setWidth(width + 20)
    setHeight(height + 20)
  }
  const ressize = () => {
    setWidth(200)
    setHeight(200)
  }
  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <View>
      <View style={[
        {
          backgroundColor: 'pink',
        },
        { width, height, opacity: show ? 1 : 0 }
      ]}>
        <Text>animate</Text>
      </View>
      <Button onPress={largeWithPress}>变大</Button>
      <Button onPress={ressize}>恢复</Button>
      <Button onPress={toggleShow}>显示隐藏</Button>
    </View>
  )
}
